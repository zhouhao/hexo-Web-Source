title: Apache Zip Compress Example
date: 2015-08-05 14:21:48
tags:
  - 压缩
  - Java
categories:
  - 计算机那些事
  - Java
---
简单的hello world一下Apache compress中的zip压缩。正好最近项目中需要把一些xml文件分类打包成多个zip包。

<!-- more -->
这边也给出了一个example，和我调用的API不一样：
[Create Zip Files in Java - Example Program](http://thinktibits.blogspot.com/2012/12/Apache-Commons-Compress-How-to-create-zip-file-in-java-example-program.html)
```java
//Note： 他这个FileInputStream没有关闭
IOUtils.copy(new FileInputStream(new File("test_file_1.xml")), logical_zip);
```

### My Example
```java
package me.hzhou.util;

import java.io.Closeable;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

import org.apache.commons.compress.utils.IOUtils;
import org.jetbrains.annotations.NotNull;

/**
* Description: A utility class for zip files
*
* @author hzhou
*/
public final class ZipUtil {

    private ZipUtil() {

    }

    public static void create(@NotNull List<File> srcs, @NotNull File dest) throws IOException {
        create(srcs, new FileOutputStream(dest));
    }

    public static void create(@NotNull List<File> srcs, @NotNull String dest) throws IOException {
        create(srcs, new FileOutputStream(dest));
    }

    private static void create(@NotNull List<File> srcs, @NotNull FileOutputStream dest) throws IOException {
        ZipOutputStream zip_output = new ZipOutputStream(dest);

        // put files into zip output stream
        for (File file : srcs) {
            zip_output.putNextEntry(new ZipEntry(file.getName()));
            FileInputStream in = new FileInputStream(file);
            IOUtils.copy(in, zip_output);
            closeQuietly(in); // if you use common-compress-1.9, you can call IOUtils.closeQuietly(in) directly
        }
        /* Close output stream, our files are zipped */
        closeQuietly(zip_output);
    }

    /**
    * Since common-compress 1.9, this function is added for IOUtils
    * However, in 1.5, it doesn't have this one
    * @param c closeable
    */
    public static void closeQuietly(Closeable c) {
        if (c != null) {
            try {
                c.close();
            } catch (IOException ignored) { // NOPMD
            }
        }
    }
}
```

![Apache Zip Compress](https://dn-myblog.qbox.me/img/blog/code/apache_zip.png "Apache Zip Compress")
