---
title: SaltyNote Implementation - Chrome Extension
tags: [ microservice, SpringBoot, Java, Redis, MariaDB, SaltyNote ]
categories: [ 编程人生, Chrome Extension, microservice ]
date: 2023-04-22 21:39:25
---

In [SaltyNote Implementation - Service](https://hzhou.me/2023/04/22/saltynote-implementation-service/), I shared the
details about server side implementation of SaltyNote. In this article, I will introduce the implementation of the
SaltyNote Chrome Extension.

<!-- more -->

<div class="box box-tip">
  Since Chrome Extension is a special Web Application running in Chrome, in this article, I will focus more on the differences between Chrome Extension and standard Web Application.
</div>

Reference: https://saltynote.github.io/saltynote-chrome-extension/

Unlike standard website, Chrome Extension can have 2 different runtime environments: **background script** and **content
script**.

* **background.js**: The background script is a persistent script that runs in the background of Chrome Extension. It is
  used to handle the events from the browser, and it can communicate with the content script. For example, the
  background script can listen to the browser action click event, and send a message to the content script to open the
  sidebar. For more details, please refer to
  [Manage events with service workers](https://developer.chrome.com/docs/extensions/mv3/service_workers/)
* **Content Script**: The content script is a script that runs in the context of the web page. It can read details of
  the web pages the browser visits, make changes to them, and pass information to their parent extension. For more
  details, please refer
  to [Content scripts](https://developer.chrome.com/docs/extensions/mv3/content_scripts/)

![Chrome Extension Runtime Environment](/img/saltynote/chrome-runtime-envs.png)

## Workflow

![Chrome Extension Workflow](/img/saltynote/chrome-extension-workflow.png)

1. The Content Script will create a new div in the web page, and mount a Vue application to that
   div. [Source Code](https://github.com/SaltyNote/saltynote-chrome-extension/blob/master/src/overlay/overlay.js#L12-L19)
   Then within that Vue application, it will render the component of Annotation Card, Sidebar, etc. All available
   components are
   listed [here](https://github.com/SaltyNote/saltynote-chrome-extension/tree/master/src/overlay/components).
2. Due to `Same-Origin Policy`, the content script cannot send http requests to the SaltyNote Server directly. So the
   content script will send a message to the background script, and the background script will forward the http request
   to the SaltyNote Server. Once the response is received, the background script will send the response back to the
   content
   script. ![Chrome Extension has a different Origin, whose requests will not be blocked by `SOP`](/img/saltynote/chrome-extension-origin.jpg)
3. As I mentioned in Service Implementation, the auth model is implemented with access token and refresh token. And the
   access token will expire in a short time. So instead of asking user to login again or manually refresh the access
   token with refresh token, before sending out the data request, the Chrome extension will check whether the access
   token is expired or not, it is expired, it will send a request to refresh the access token automatically. Since we
   have a long-lived refresh token, the user only needs to login once before refresh token expires or is invalidated.

## Misc

When injecting the content script, a css file will also be pushed to host page. If we do not take if carefully, the
injected css may impact the UI of the host page. For resolve this, I
use [`sass-plus`](https://www.npmjs.com/package/sass-plus)([Source Code](https://github.com/SaltyNote/saltynote-chrome-extension/blob/70892bb4e20934e2870c7f9eca8e09391921aea3/package.json#L10))
to generate a customized css file
with bootstrap within a custom class
name `saltynote`([source code](https://github.com/SaltyNote/saltynote-chrome-extension/blob/70892bb4e20934e2870c7f9eca8e09391921aea3/src/custom.scss#L7)).
Then I will add the class name to the root element of the Vue
application. So the css will only impact the elements within the Vue application.