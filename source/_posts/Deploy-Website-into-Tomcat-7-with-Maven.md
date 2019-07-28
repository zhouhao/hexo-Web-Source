title: Deploy Website into Tomcat 7 with Maven
date: 2014-08-22 09:10:05
tags: [Maven, Java, "Tomcat 7"]
categories: [计算机那些事, 网站]
---
This article is a brief introduction of how to use maven to deploy your website into tomcat7 [Ubuntu].
<!-- more -->
### 1. Install Tomcat 7 & Maven
It is pretty easy to do, so I don't write anything related to their installation here.

### 2. Modify `/etc/tomcat7/tomcat-users.xml`

```xml
<!-- Create new roles and new users -->
<role rolename="manager-script"/>
<role rolename="manager"/>
<role rolename="admin"/>
<user username="username" password="password" roles="manager,admin,manager-script"/>
```

### 3. Add a server in Maven: `/etc/maven/settings.xml`

```xml
<servers>
    <!-- server
     | Specifies the authentication information to use when connecting to a particular server, identified by
     | a unique name within the system (referred to by the 'id' attribute below).
     |
     | NOTE: You should either specify username/password OR privateKey/passphrase, since these pairings are
     |       used together.
     | -->
    <server>
      <id>TomcatServer</id>
      <username>username</username>
      <password>password</password>
    </server>
</servers>
```

### 4. Configurate your pom.xml as following

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>me.hzhou.paypal</groupId>
    <artifactId>PayPal-jFinal</artifactId>
    <packaging>war</packaging>
    <version>0.1</version>
    <name>PayPal Plugin For jFinal</name>
    <url>http://maven.apache.org</url>

    <dependencies>
        <dependency>
            <groupId>com.paypal.sdk</groupId>
            <artifactId>rest-api-sdk</artifactId>
            <version>0.9.0</version>
        </dependency>

        <!-- More Dependencies -->

    </dependencies>
    <build>
        <plugins>
            <!-- Maven Tomcat Plugin -->
            <plugin>
                <groupId>org.apache.tomcat.maven</groupId>
                <artifactId>tomcat7-maven-plugin</artifactId>
                <version>2.2</version>
                <configuration>
                    <url>http://YourDomainOrIP/manager/text</url>
                    <update>true</update>
                    <server>TomcatServer</server>
                    <path>/ROOT</path>
                </configuration>
            </plugin>
            <!-- Maven compiler plugin -->
            <plugin>
                <artifactId>maven-compiler-plugin</artifactId>
                <configuration>
                    <source>1.6</source>
                    <target>1.6</target>
                </configuration>
            </plugin>
        </plugins>
    </build>
    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <maven.compiler.source>1.7</maven.compiler.source>
        <maven.compiler.target>1.7</maven.compiler.target>
    </properties>
</project>
```

### 5. Change directory to your website folder
```sh
mvn tomcat7:deploy
```
Or
```sh
mvn tomcat7:redeploy
```
