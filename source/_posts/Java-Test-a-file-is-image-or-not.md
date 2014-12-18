title: "Java: Test a file is image or not"
date: 2014-12-17 20:51:50
tags:
 - Java
---
There are many ways to check whether a file is image. For example, check the file extension(jpg, png, gif ...). But this is not so safe, in a web environment, user may rename XXX.exe, to XXX.jpg, then s/he can succeed to upload it. In this case, it can induce security problem.
<!-- more -->

To make it more secure, I find two more ways as below:
1. Soution 1 is to check Mime type, and I think this is the best for me. However it will return `false` for "png" [`application/octet-stream`](http://stackoverflow.com/questions/4855627/java-mimetypesfiletypemap-always-returning-application-octet-stream-on-android-e)      
2. Finally, as a sacrifice, I use the "ImageIO" way(It is memory consuming, I think. Great news is that the image uploading requests are not called frequently). 

```java
public static boolean isImage(File file) {
    /*
    // Solution 1 
    String mimeType = new MimetypesFileTypeMap().getContentType(file);
    log.info("MimeType Type = " + mimeType);
    String type = mimeType.split("/")[0].toLowerCase();
    log.info("File Type = " + type);
    return type.equals("image");
    */
    boolean b = false;
    try {
        b = (ImageIO.read(file) != null);
    } catch (IOException e) {
        log.info("Image cannot be found");
    }
    return b;
}
```