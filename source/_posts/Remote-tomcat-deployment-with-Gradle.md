---
title: Remote tomcat deployment with Gradle
date: 2015-01-21 18:49:20
tags: ["Tomcat 7", Gradle]
categories: [计算机那些事, 普通]
---
Recently, I am playing Gradle, which is a similar tool as Maven. What I usual do is to depoly webiste into Tomcat. Refer this [Deploy Website into Tomcat 7 with Maven](http://sbzhouhao.net/2014/08/22/Deploy-Website-into-Tomcat-7-with-Maven/). Here is my note to deploy website with Gradle.
<!-- more -->

### 1. Configure [Gradle SSH Plugin](https://github.com/int128/gradle-ssh-plugin) into your project.
This is a demo from my ongoing project [DealRen-Java-SDK](https://github.com/DealRenDev/DealRen-Java-SDK/blob/master/build.gradle)
```groovy
plugins {
    id 'groovy'
    id 'war'
    id 'org.hidetake.ssh' version '1.0.1'
}

tasks.withType(JavaCompile) {
    sourceCompatibility = 1.7
    targetCompatibility = 1.7
    options.encoding = "UTF-8"
}

remotes {
    codeashobby {
        host = project.property('host')
        user = project.property('host.user')
        password = project.property('host.password')
    }
}

task showPlatformVersion << {
    ssh.run {
        session(remotes.codeashobby) {
            execute('uname -a')
            execute('cat /etc/*-release || true')
        }
    }
}

ext.webappsDir = project.property('host.webapps.dir')
war.archiveName = project.property('war.name')

task deploy(dependsOn: war) << {
    ssh.run {
        session(remotes.codeashobby) {
            put(war.archivePath.path, webappsDir)
            //execute('sudo service tomcat restart')
        }
    }
}

task wrapper(type: Wrapper) {
    gradleVersion = '2.2.1'
}

repositories {
    mavenCentral()
}

dependencies {
    testCompile 'junit:junit:4.11'
    compile 'org.codehaus.groovy:groovy-all:2.3.9'
    compile 'com.google.guava:guava:18.0'
	// many many more
}
```

### 2. Then open a terminal, and type `gradle deploy`.
This will connection your server with SSH, and overwrite the previous war file, which is different from Maven, which use tomcat manager page to deploy war file.

### Note:
When you run `gradle deploy`, you may get such error: `reject HostKey`
Find a solution here: http://anahorny.blogspot.com/2013/05/solution-for-comjcraftjschjschexception.html, and it works great.
<br/><br/>