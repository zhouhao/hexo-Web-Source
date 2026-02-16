---
title: "Java Mail中文乱码"
date: 2015-07-22 17:05:12
tags: [Java]
categories: [编程人生, Java]
---
由于长时间在自己coding中处理英文内容，导致今天发现自己在做的一单网站在给用户发新密码邮件的时候居然中文乱码。（原来我每天都说的中文在我写代码的时候被忽略了）
<!-- more -->

其实解决这个问题的方法很简单----添加`UTF-8`支持。因为中文只是我其中要支持的一种，觉得直接使用`GBK`是个stupid的想法。

![Java Mail charset](/img/blog/java-mail.png "Java Mail charset")

I18N还是蛮坑的，那些页面的文字，以及操作的提示目前都得我一个个的添加----好多条目。或者应该尝试将i18n直接应用在View的模板上，不同的locale调用对应locale的view。

### 最后提供一个简单的Java用mailgun发邮件的示例

```java
import java.io.UnsupportedEncodingException;
import java.util.Properties;

import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.jetbrains.annotations.NotNull;

import static javax.mail.Message.RecipientType;

public final class SendMailKit {

    private SendMailKit() {

    }

    public static void send(String toEmails, String content, String subject, @NotNull RecipientType recipientType) {
        final String username = Const.MAILGUN_USERNAME;
        final String password = Const.MAILGUN_PASSWORD;
        final String fromEmail = "notify@hzhou.me";
        final String fromName = "Hao Zhou";

        Properties props = new Properties();
        props.setProperty("mail.smtp.auth", "true");
        props.setProperty("mail.smtp.starttls.enable", "true");
        props.setProperty("mail.smtp.host", "smtp.mailgun.org");
        props.setProperty("mail.smtp.port", "587");

        Session session = Session.getInstance(props, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(username, password);
            }
        });

        try {
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(fromEmail, fromName));
            message.setRecipients(recipientType, InternetAddress.parse(toEmails));
            message.setSubject(subject);
            // Please append "charset=utf-8"
            message.setContent(content, "text/html;charset=utf-8");

            Transport.send(message);

        } catch (MessagingException | UnsupportedEncodingException e) {
            log.error(e);
        }
    }

    public static void main(String[] args) {
        SendMailKit.send("hzhou.me@gmail.com", "中文测试正文", "中文测试--title");
    }
}
```
