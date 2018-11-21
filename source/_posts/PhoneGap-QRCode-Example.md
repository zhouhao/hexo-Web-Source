title: "PhoneGap: QRCode Example"
date: 2014-07-22 13:07:37
tags:
 - PhoneGap
 - QRCode
 - Mobile
categories:
  - 计算机那些事
  - 手机开发
---
With PhoneGap, we can use HTML+CSS+JS to build the mobile apps. With it, I can easly wrap [this website](http://ios-emulator.hzhou.me/) into a iOS app.
But how could we call hardware of iPhone, such as camera, in our code with PhoneGap?
### Good news is that there are many plugins already existed, with which we can interact with hardware.
Now let's do a app for QRCode sanner:
<!-- more -->

### 1. You should install [Node](http://nodejs.org/) in your computer.
### 2. Install [**phoneGap**](http://phonegap.com/install/) with `npm`:

```bash
npm install -g phonegap
```

### 3. Create an app with the CMD below:

```bash
phonegap create qrcode
cd qrcode
```

### 4. Modify `index.html` in `www` folder as below [[refer](https://github.com/cfjedimaster/Cordova-Examples/tree/master/barcode)]

```html
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-tap-highlight" content="no" />
        <!-- WARNING: for iOS 7, remove the width=device-width and height=device-height attributes. See https://issues.apache.org/jira/browse/CB-4323 -->
        <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi" />
        <link rel="stylesheet" type="text/css" href="css/index.css" />
        <title>Hello World</title>
    </head>
    <body>
        <p>
            <button id="startScan">Start Scan</button>
        </p>

        <div id="results"></div>
        <script type="text/javascript" src="cordova.js"></script>
        <script type="text/javascript" src="js/index.js"></script>
    </body>
</html>
```

### 5. Modify `index.js` in `www/js` folder as below [[refer](https://github.com/cfjedimaster/Cordova-Examples/tree/master/barcode)]

```js
var resultDiv;

document.addEventListener("deviceready", init, false);
function init() {
    document.querySelector("#startScan").addEventListener("touchend", startScan, false);
    resultDiv = document.querySelector("#results");
}

function startScan() {

    cordova.plugins.barcodeScanner.scan(
        function (result) {
            var s = "Result: " + result.text + "<br/>" +
            "Format: " + result.format + "<br/>" +
            "Cancelled: " + result.cancelled;
            resultDiv.innerHTML = s;
        },
        function (error) {
            alert("Scanning failed: " + error);
        }
    );

}
```

### 6. Open `config.xml` in `www`, and add below in [[refer](https://build.phonegap.com/plugins/261)]:

```xml
<gap:plugin name="com.phonegap.plugins.barcodescanner" version="1.1.0" />
```

### 7. Upload the project into GitHub

### 8. Build you app in [phoneGap website](https://build.phonegap.com/) ---- You need an account here

#### Note: *if you need to build an iOS app, you need to provide a key. ---- Apple Developer $99/yr*

### See my demo project in the [GitHub](https://github.com/zhouhao/PhoneGap-Test).
![Start Page](/img/phoneGap-QRCode/1.jpg "Start Page")
![Scan Page](/img/phoneGap-QRCode/2.jpg "Scan Page")  
