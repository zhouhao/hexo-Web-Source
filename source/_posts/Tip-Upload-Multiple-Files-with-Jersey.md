---
title: 'Tip: Upload Multiple Files with Jersey'
date: 2016-05-01 22:30:17
tags: [Java, RESTful]
categories: [计算机那些事, Java]
---
这篇文章将简单介绍一下如何用Jersey（DropWizard）在一次Request中接受多个文件。其实Google一下，SO上会有很多回答，只是在这边献丑一下。
<!-- more -->

### 1. 添加必要的依赖
因为要上传文件，所以这个依赖是必须的
```xml
       <dependency>
           <groupId>org.glassfish.jersey.media</groupId>
           <artifactId>jersey-media-multipart</artifactId>
           <version>2.22.2</version>
       </dependency>
```

### 2. 在配置文件中注册
查看Github源文件：https://github.com/zhouhao/RESTful-Examples/blob/master/src/main/java/me/hzhou/demo/App.java

```java
   @Override
   public void run(Configure configuration, Environment environment) {
       // more code
       environment.jersey().register(MultiPartFeature.class);
   }
```

### 3. 添加Resource
以下方法来自SO。查看[demo源码](https://github.com/zhouhao/RESTful-Examples/blob/master/src/main/java/me/hzhou/demo/Res.java)

```java
   @Path("/upload")
   @POST
   @Consumes(MediaType.MULTIPART_FORM_DATA)
   @Produces(MediaType.APPLICATION_JSON)
   public Response upload(FormDataMultiPart form) {
       List<FormDataBodyPart> parts = form.getFields("file");
       List<String> result = new ArrayList<String>();
       for (FormDataBodyPart part : parts) {
           FormDataContentDisposition file = part.getFormDataContentDisposition();
           InputStream fileInputStream = part.getValueAs(InputStream.class);

           String filePath = "/tmp/" + file.getFileName();
           // save the file to the server
           saveFile(fileInputStream, filePath);
           String output = "File saved to server location using FormDataMultiPart : " + filePath;
           result.add(output);
       }
       return Response.ok(result).build();
   }

   // save uploaded file to a defined location on the server
   private void saveFile(InputStream uploadedInputStream, String serverLocation) {

       try {
           OutputStream outputStream = new FileOutputStream(new File(serverLocation));
           int read = 0;
           byte[] bytes = new byte[1024];
           while ((read = uploadedInputStream.read(bytes)) != -1) {
               outputStream.write(bytes, 0, read);
           }
           outputStream.flush();
           outputStream.close();
           uploadedInputStream.close();

       } catch (IOException e) {
           e.printStackTrace();
       }
   }
```

### 4. 简单客户端测试
启动DropWizard线程之后，直接在浏览器打开这个文件即可进行测试
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Files Upload</title>
</head>
<body>
<form name="formtest" action="http://127.0.0.1:8080/upload" method="POST" enctype="multipart/form-data">
    <input type="file" name="file" value="" />
    <input type="file" name="file" value="" />
    <input type="submit" value="submit" />
</form>
</body>
</html>
```

### 5. All set, have fun!!!
