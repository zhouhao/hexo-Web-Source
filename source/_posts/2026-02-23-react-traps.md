---
title: React 开发的十个致命陷阱
date: 2026-02-23 20:00:00
tags: [React, 前端, 陷阱]
categories: 技术
---

React 作为最流行的前端框架之一，虽然概念简单，但实际开发中隐藏着许多容易被忽视的陷阱。本文总结了我在项目中遇到的十大致命问题，帮助你避坑。

## 1. useEffect 依赖数组的陷阱

```jsx
// ❌ 错误：每次渲染都会执行
useEffect(() => {
  fetchData();
});

// ✅ 正确：指定依赖
useEffect(() => {
  fetchData(id);
}, [id]);
```

**问题**：依赖数组写错会导致无限循环、死循环或数据不同步。

## 2. 闭包陷阱

```jsx
// ❌ 错误：获取的是旧值
useEffect(() => {
  const timer = setInterval(() => {
    console.log(count); // 永远是 0
  }, 1000);
  return () => clearInterval(timer);
}, []);

// ✅ 正确：使用函数式更新
useEffect(() => {
  const timer = setInterval(() => {
    setCount(c => c + 1);
  }, 1000);
  return () => clearInterval(timer);
}, []);
```

## 3. 状态更新是异步的

```jsx
// ❌ 错误：期望同步获取值
setCount(count + 1);
console.log(count); // 仍然是旧值

// ✅ 正确：使用 useEffect 监听变化
setCount(count + 1);
useEffect(() => {
  console.log(count); // 新值
}, [count]);
```

## 4. 虚拟 DOM 的误解

React 的虚拟 DOM 并不是最快的，它只是**差异算法**的优化。频繁创建大量组件仍然会性能低下。

```jsx
// ❌ 每次渲染都创建新函数
<Button onClick={() => handleClick(id)} />

// ✅ 使用 useCallback 缓存
const handleClick = useCallback((id) => {
  // ...
}, []);
<Button onClick={() => handleClick(id)} />
```

## 5. Context 的性能问题

```jsx
// ❌ 所有消费者都会重新渲染
const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

// ✅ 拆分 Context 或使用 memo
const ThemeContext = createContext();
const UpdateContext = createContext();
```

## 6. key 的正确使用

```jsx
// ❌ 使用 index 作为 key
items.map((item, index) => <Item key={index} {...item} />)

// ✅ 使用唯一 ID
items.map(item => <Item key={item.id} {...item} />)
```

**后果**：使用 index 会导致动画错误、状态混乱、渲染错乱。

## 7. 组件命名首字母大写

```jsx
// ❌ 错误
function myComponent() { ... }
<myComponent />

// ✅ 正确
function MyComponent() { ... }
<MyComponent />
```

## 8. 不要在 JSX 中直接使用对象

```jsx
// ❌ 每次渲染都是新对象
<div style={{ margin: 10 }} />

// ✅ 提取到组件外
const style = { margin: 10 };
<div style={style} />
```

## 9. useState 和 useReducer 选择

- **useState**：简单状态、状态间逻辑简单
- **useReducer**：复杂状态逻辑、多个子值、下一状态依赖前一个

```jsx
// useReducer 示例
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const [state, dispatch] = useReducer(reducer, { count: 0 });
```

## 10. 内存泄漏

```jsx
// ❌ 清理函数中未清理
useEffect(() => {
  const subscription = someAPI.subscribe();
  return () => {
    // 忘记调用 unsubscribe
  };
}, []);

// ✅ 正确清理
useEffect(() => {
  const subscription = someAPI.subscribe();
  return () => subscription.unsubscribe();
}, []);
```

---

## 总结

React 入门容易，精通难。避免这些陷阱需要：

1. 深入理解 Hooks 原理
2. 理解 JavaScript 闭包、异步特性
3. 重视性能优化
4. 养成良好的编码习惯

希望这篇文章能帮助你在 React 进阶之路上少走弯路。

**关注我，持续分享更多技术干货！**
