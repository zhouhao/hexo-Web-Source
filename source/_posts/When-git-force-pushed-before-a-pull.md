---
title: When git force pushed before a pull
tags: [ git, push, recover ]
categories: [ 计算机那些事, 操蛋 ]
date: 2023-07-14 16:13:35
---

Git, a widely used version control system, empowers developers to collaborate seamlessly and manage code repositories
efficiently. However, even with its robust features and safeguards, human mistakes can still occur, leading to potential
code conflicts and loss of work. One such common pitfall is force-pushing changes before performing a pull operation.
And I just made it happen today.
<!-- more -->

The story is that I have a feature branch, and I keep merging new sub-feature PRs into that main feature branch.

As a milestone, I would like to rebase the main feature branch after a while. So I type the code without any hesitation.

```bash
git fetch origin && git rebase origin/main
git push origin feature/my-awesome-feature -f
```

I did not realize anything bad, until I open a new PR to merge a new module to the feature branch, and I can see:
![WTF: Why so many files get changed](/img/blog/pr-diff-view.png)

OK, I am fine! 😭 (Not a big deal with a force push without a pull?!)
![I am fine](/img/blog/i-am-fine.jpg)

After few seconds with trying `ctrl + z`, and nothing happens. I know it is time to take some real actions.

#### Case 1: before the force push, we already have the PR opened for `feature/my-awesome-feature`

We can see this log info from the pr page, and we will know: before the force push, the head is @ `1234567`. And we need
this number.
![Force Push Log](/img/blog/force-push-log.png)

#### Case 2: no PR page, but you rebased other branch locally just before force push

If you run `git fetch origin && git rebase origin/main`, you may see the similar log below. And you can see the latest
head of `feature/my-awesome-feature` is `1234567`.

```
From github.com:XYZ/ABC
2312a5a..1234567  feature/my-awesome-feature -> origin/feature/my-awesome-feature
Successfully rebased and updated refs/heads/feature/my-awesome-feature-sub-X.
```

### Solution

With the commit hash we get before the force push. We can restore branch `feature/my-awesome-feature` as

```
$ git reset --hard 1234567
$ git push --force
```