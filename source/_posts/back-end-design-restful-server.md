title: Back-End-Design-RESTful-Server
date: 2014-05-31 20:09:38
tags:
 - RESTful 
 - Back End
 - jFinal
---
What will the server do?
	1. Communicate with database (R/W)
	2. Check whether the request is valid and legal from clients
	3. Reponse certain data to client in JSON format

After comparing with different Java frameworks, I choose [jFinal](http://jfinal.com/), which is an new Open-Source MVC framework [[GitHub](https://github.com/jfinal/jfinal)]. If you never heared this before, I think it's time for you to take a look of that, as it is really awesome.
<!-- more -->

![Communication between Server and Client](http://zhouhao.u.qiniudn.com/ServerUML.png)

It is not so hard to build this back-end system, the tricky issue is how to output the data in JSON format. The good news is that, with jFinal, it is very easy to achieve that.

###Check the link of this back-end repository: https://github.com/zhouhao/WebService-In-Maven

##Notes:
1. Chrome and the server will block your cross site requests by default. For this issue, you'd config the server open to such connection requests. (A global handler in jFinal)

```java
package me.hzhou.handler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.jfinal.handler.Handler;

public class GlobalHandler extends Handler {

	@Override
	public void handle(String target, HttpServletRequest request,
			HttpServletResponse response, boolean[] isHandled) {
		response.addHeader("Access-Control-Allow-Origin", "*");
		nextHandler.handle(target, request, response, isHandled);

	}

}
```
Enable it in `MyConfig.java` as below:
```java
public void configHandler(Handlers me){
	me.add(new GlobalHandler());
}
```