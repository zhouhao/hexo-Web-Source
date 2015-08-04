title: "AngularJS: $http Post Data Cannot be Recognized by Server Side"
date: 2014-08-25 13:54:18
tags:
 - AngularJS
 - Ajax
categories:
  - 计算机那些事
  - 网站
---
As a newcomer, I find a lot of problems when I am using AngularJS. One problem is related to Ajax request.
In jQuery, the server side can easy get the parameters, such as name: "John".
```javascript
$.post( 'test.php', { name: 'John', time: '2pm' } );
```
<!-- more -->
But in AngularJS, as following:
```javascript
$http.post('test.php', { name: 'John', time: '2pm' }).success(function(response) {
	//...
});
```
My server side can never recognize the parameters.

<h3>I can see the Form Data in my http header, but anyway, the server cannot recognize it:</h3>
![Http Header Demo](https://dn-myblog.qbox.me/img/angularJS/angularPost.png "Http Header Demo")  

### Finally, I find the solution here: http://victorblog.com/2012/12/20/make-angularjs-http-service-behave-like-jquery-ajax/

### Reason:
```
// These line are from the link above directly, thanks for zeke(author) contribution

The difference is in how jQuery and AngularJS serialize and transmit the data. Fundamentally,
the problem lies with your server language of choice being unable to understand AngularJS’s
transmission natively—that’s a darn shame because AngularJS is certainly not doing anything wrong.
By default, jQuery transmits data using Content-Type: x-www-form-urlencoded and the familiar
foo=bar&baz=moe serialization. AngularJS, however, transmits data using Content-Type: application/json
and { "foo": "bar", "baz": "moe" } JSON serialization, which unfortunately some Web server
languages—notably PHP—do not unserialize natively.
```

### Solution: Just initialize you App as below:

```javascript
// Your app's root module...
angular.module('MyModule', [], function($httpProvider) {
  // Use x-www-form-urlencoded Content-Type
  $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

  /**
   * The workhorse; converts an object to x-www-form-urlencoded serialization.
   * @param {Object} obj
   * @return {String}
   */
  var param = function(obj) {
    var query = '', name, value, fullSubName, subName, subValue, innerObj, i;

    for(name in obj) {
      value = obj[name];

      if(value instanceof Array) {
        for(i=0; i<value.length; ++i) {
          subValue = value[i];
          fullSubName = name + '[' + i + ']';
          innerObj = {};
          innerObj[fullSubName] = subValue;
          query += param(innerObj) + '&';
        }
      }
      else if(value instanceof Object) {
        for(subName in value) {
          subValue = value[subName];
          fullSubName = name + '[' + subName + ']';
          innerObj = {};
          innerObj[fullSubName] = subValue;
          query += param(innerObj) + '&';
        }
      }
      else if(value !== undefined && value !== null)
        query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
    }

    return query.length ? query.substr(0, query.length - 1) : query;
  };

  // Override $http service's default transformRequest
  $httpProvider.defaults.transformRequest = [function(data) {
    return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
  }];
});
```
