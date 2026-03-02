---
title: 可观测性 3.0：当你的系统里跑着 AI Agent，你还看得懂它在做什么吗？
date: 2026-03-03 17:00:00
tags: [可观测性, Observability, AI Agent, OpenTelemetry, 后端工程]
categories: [ 编程人生, AI ]
---

Metrics、Logs、Traces——这套经典三支柱撑起了过去十年的可观测性体系。但当系统里的"执行者"从确定性代码变成了 AI Agent，传统的观测手段开始出现盲区。本文聊聊可观测性在 AI 时代面临的新挑战，以及工程师该怎么应对。

<!-- more -->

## 先说一个真实的场景

想象一下这样的故障排查过程：

!!! info Story
    凌晨 2 点，你的 on-call 手机响了。告警显示订单处理延迟飙升，P99 从 200ms 涨到了 8 秒。你打开 Grafana，Traces 显示瓶颈在一个叫 `order-fulfillment-agent` 的服务上。进去一看，这个 Agent 调用了 7 个工具，做了 3 次自我修正，中间还跑了 2 次 LLM 推理——但你完全不知道它**为什么**做了这些决策，也不知道哪一步导致了延迟。

日志里只有：
```
[INFO] Agent started task: fulfill_order_#84921
[INFO] Tool call: check_inventory → success
[INFO] LLM inference: 1.2s
[INFO] Tool call: reserve_stock → success  
[INFO] LLM inference: 6.8s  ← 就是这里慢，但为什么？
[INFO] Agent completed task
```

你知道慢在哪，但你不知道**为什么慢**，也不知道**下次会不会再慢**。

这就是传统可观测性在 AI Agent 场景下的核心困境：**我们能看到行为，但看不懂决策**。


## 传统三支柱的盲区

### Metrics：数字背后没有语义

Metrics 擅长描述"发生了多少"，但 AI Agent 的问题往往不是量的问题，而是质的问题。

- 平均 LLM 推理时间 = 2.1s？没问题。
- 但这 2.1s 里，Agent 是在做合理的复杂推理，还是因为 prompt 设计不好导致模型反复纠结？**Metrics 无法区分。**

### Logs：结构化了，但语义还是缺失

我们可以把 LLM 的输入输出都记到日志里，但一个 Agent 的完整运行可能产生 50KB 的 prompt + response 文本。你没办法在生产系统里对每条日志做语义分析，更没办法跨多个 Agent 的日志做关联推理。

### Traces：能追踪调用链，但追不了"思维链"

传统 Traces 很擅长追踪微服务调用链。但 AI Agent 的执行不只是函数调用的嵌套——它是一个**带有内部推理状态的决策循环**：

```
观察环境 → 推理下一步 → 选择工具 → 执行 → 观察结果 → 再推理...
```

这个循环中的"推理"部分，传统 Trace Span 是描述不了的。你知道 `llm_inference` 这个 Span 花了 6.8 秒，但你不知道模型在这 6.8 秒里想了什么、为什么想这么久。


## 可观测性 3.0：需要什么？

面对 AI Agent 的可观测性挑战，业界正在形成一些新的实践方向。我把它称为**可观测性 3.0**——在经典三支柱之上，补充三个新维度：

### 1. LLM 专项追踪（LLM Tracing）

不只记录"调用了 LLM，花了多少时间"，而是记录：

- **完整的 prompt 内容**（包括 system prompt 和 context）
- **模型的输出**（不截断）
- **Token 消耗**（input tokens / output tokens / total cost）
- **模型参数**（temperature、top_p、model version）
- **调用来源**（是哪个 Agent、哪个任务触发的）

目前 [LangSmith](https://smith.langchain.com)、[Langfuse](https://langfuse.com)、[Helicone](https://helicone.ai) 等工具在这个方向已经比较成熟。OpenTelemetry 社区也在推进 [GenAI Semantic Conventions](https://opentelemetry.io/docs/specs/semconv/gen-ai/)，试图把 LLM 追踪标准化。

用 OpenTelemetry 手动记录 LLM 调用的示例：

```python
from opentelemetry import trace
from opentelemetry.semconv.attributes.gen_ai_attributes import (
    GEN_AI_SYSTEM,
    GEN_AI_REQUEST_MODEL,
    GEN_AI_USAGE_INPUT_TOKENS,
    GEN_AI_USAGE_OUTPUT_TOKENS,
)

tracer = trace.get_tracer("my-agent")

def call_llm(prompt: str, model: str = "claude-3-5-sonnet") -> str:
    with tracer.start_as_current_span("llm.chat") as span:
        span.set_attribute(GEN_AI_SYSTEM, "anthropic")
        span.set_attribute(GEN_AI_REQUEST_MODEL, model)
        span.set_attribute("gen_ai.prompt", prompt[:2000])  # 截断避免过大
        
        response = anthropic_client.messages.create(
            model=model,
            messages=[{"role": "user", "content": prompt}]
        )
        
        span.set_attribute(GEN_AI_USAGE_INPUT_TOKENS, response.usage.input_tokens)
        span.set_attribute(GEN_AI_USAGE_OUTPUT_TOKENS, response.usage.output_tokens)
        span.set_attribute("gen_ai.response", response.content[0].text[:2000])
        
        return response.content[0].text
```

### 2. Agent 状态追踪（Agent State Tracing）

Agent 的执行是有状态的——它在每一步都有内部的"工作记忆"（working memory）：已完成的子任务、当前的目标、已知的约束条件。

传统 Traces 只追踪函数调用，不追踪状态变迁。我们需要在关键节点记录 Agent 的完整状态快照：

```python
def agent_step(self, observation: str) -> Action:
    # 记录步骤开始时的状态
    with tracer.start_as_current_span("agent.step") as span:
        span.set_attribute("agent.step_number", self.step_count)
        span.set_attribute("agent.goal", self.current_goal)
        span.set_attribute("agent.memory_size", len(self.memory))
        span.set_attribute("agent.observation", observation[:500])
        
        action = self._reason_and_act(observation)
        
        span.set_attribute("agent.action_type", action.type)
        span.set_attribute("agent.action_input", str(action.input)[:500])
        span.set_attribute("agent.reasoning", action.reasoning[:1000])
        
        return action
```

关键是要记录 **reasoning**——Agent 为什么做这个决定，这是排查问题时最有价值的信息。

### 3. 行为评估（Behavioral Evaluation）

这是最难也最重要的一层：**在线评估 Agent 的行为是否符合预期**。

不同于传统系统的确定性评估（返回 200 = 成功），AI Agent 的"对不对"是模糊的：
- Agent 完成了任务，但用了低效的路径？
- Agent 的回答语义正确，但用户满意度低？
- Agent 在某类场景下系统性地做出了错误决策？

目前的实践方向：

**离线评估：** 采样生产流量，用 LLM-as-Judge 对 Agent 的行为进行评分，发现系统性问题。

**在线护栏（Guardrails）：** 在 Agent 执行关键操作前，用轻量级的分类模型判断当前行为是否合规，不合规则拦截并告警。

```python
class AgentGuardrail:
    def check_action(self, action: Action, context: AgentContext) -> GuardrailResult:
        # 检查 Agent 是否试图访问超出权限的资源
        if action.type == "file_write":
            if not self._is_path_allowed(action.input["path"]):
                return GuardrailResult(
                    blocked=True,
                    reason=f"Path {action.input['path']} is outside allowed directory"
                )
        
        # 检查是否触发了已知的危险模式
        risk_score = self.risk_classifier.score(action, context)
        if risk_score > 0.8:
            alert(f"High-risk action detected: {action}", severity="warning")
        
        return GuardrailResult(blocked=False)
```


## 实际落地的工具选型

| 需求 | 推荐工具 |
|------|---------|
| LLM 调用追踪 | Langfuse（开源可自部署）、LangSmith |
| Agent 全链路 Trace | OpenTelemetry + Jaeger/Tempo |
| Prompt 版本管理 | Langfuse、Promptlayer |
| 在线评估 / LLM Judge | Langfuse Evaluations、Braintrust |
| 成本监控 | Helicone、自建（OTel + Grafana） |
| Guardrails | Guardrails AI、NeMo Guardrails |

如果你的团队已经在用 OpenTelemetry，可以先把 LLM Tracing 接进现有的 Trace 体系——不需要引入新的基础设施，改造成本最低。


## 一个实用的最小可行方案

如果你今天就想开始改善 AI 系统的可观测性，但资源有限，建议按这个优先级来：

**第一步：先把 LLM 调用的 token 消耗和延迟记下来。**  
这是成本控制的基础，也能帮你发现异常慢的推理（往往是 prompt 设计问题）。

**第二步：记录每次 LLM 调用的完整 prompt 和 response（按比例采样）。**  
线上问题 80% 都能在 prompt/response 里找到根因。

**第三步：给 Agent 的关键决策点加上 reasoning 记录。**  
不需要记录所有步骤，只需要在"选择行动方案"这个关键点记录 Agent 的推理过程。

**第四步：建立基线，设置异常告警。**  
平均 token 消耗基线 ± 50%、P99 延迟基线 × 3——超出就告警。这比没有强。


## 写在最后

可观测性从来不是一个"上了就完事"的系统——它是一个随着你的系统复杂度持续演进的工程实践。

传统系统里，我们的目标是"知道发生了什么"。在 AI Agent 系统里，目标升级了：**我们还需要知道为什么发生，以及下次会不会又这样发生。**

这个问题没有银弹，但方向是清晰的：让 AI 系统的决策过程可追踪、可解释、可评估。

从今天记下第一个 LLM Trace Span 开始。


**参考资料：**
- [OpenTelemetry GenAI Semantic Conventions](https://opentelemetry.io/docs/specs/semconv/gen-ai/)
- [Langfuse 官方文档](https://langfuse.com/docs)
- [LangSmith Observability Guide](https://docs.smith.langchain.com)
