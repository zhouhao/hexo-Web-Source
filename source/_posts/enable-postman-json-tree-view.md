---
title: Enable postman json tree view
tags: [ JSON, Postman ]
categories: [ 计算机那些事, Backend ]
date: 2023-07-25 11:34:01
---

As a qualified backend programmer, we need to deal with JSON data from time to time.

Currently, many backend programmers use [Postman](https://www.postman.com/) to test API requests. However, Postman as a
tool itself does not provide
particularly powerful JSON data visualization. For example, it only offers simple code-level data folding and cannot
perceive the specific number of elements inside a list.

<!-- more -->

![Original Postman Response View](/img/blog/postman/code-view.jpg)

To compensate for Postman's shortcomings, I often use [JSON Editor Online](https://jsoneditoronline.org/) to parse and
visualize JSON data more
effectively. The Tree View feature allows us to focus on the data of interest by collapsing irrelevant parts. However,
it dampens my enthusiasm as it requires manual copying and pasting of data each time.

But after closely examining Postman, I discovered the existence of a "Visualize" tab. My intuition tells me that this
could be the solution I need.

![Visualize Tab](/img/blog/postman/visualize-tab.jpg)

In short, let's jump straight to the demo: By enabling the JSON tree view plugin, we can achieve the following effect.

![Tree View](/img/blog/postman/tree-view.jpg)

### How to set up

1. Select the "Collections" you want to enable this feature from the left side bar (for example: I picked "Local Test"
   here)
2. Select "Test" Tab, and past the [code](https://github.com/zhouhao/zhouhao/blob/main/code/postman-tree-view.js) into
   the text area.
3. Then all requests in that collection will be enabled with tree view from visualize tab.
4. Note: You can also enable this code for a single request only rather than a collection by pasting the code into the request's "tests" tab.

![Setup](/img/blog/postman/setup.jpg)

### Reference

Thanks to the opne source project: [josdejong/jsoneditor](https://github.com/josdejong/jsoneditor)