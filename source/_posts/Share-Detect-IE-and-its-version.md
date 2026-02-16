---
title: "Share: Detect IE and its version"
date: 2014-07-17 12:50:12
tags: [IE, Web]
categories: [编程人生, 网站]
---
This post will tell you how detect IE and its version.
Refer: http://stackoverflow.com/questions/10964966/detect-ie-version-in-javascript
<!-- more -->

```html
<!DOCTYPE html>
<html lang="">

<head>
    <meta charset="UTF-8">
    <title>IE Tester</title>
</head>

<body>
    <script>
        function isIE() {
            var myNav = navigator.userAgent.toLowerCase();
            return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
        }
        if (isIE() && isIE() <= 9) {
            // is IE version less than 9
            console.log("small");
        } else {
            // is IE 9 and later or not IE
            console.log("large");
        }
    </script>
</body>

</html>
```
### ScreenShots:
![IE 10](/img/blog/ie10.png "IE 10")
![IE 9](/img/blog/ie9.png "IE 9")
![IE 7](/img/blog/ie7.png "IE 7")
