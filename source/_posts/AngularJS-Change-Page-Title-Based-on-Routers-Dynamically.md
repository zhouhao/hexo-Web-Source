title: "AngularJS: Change Page Title Based on Routers Dynamically"
date: 2014-08-07 12:37:21
tags: [AngularJS]
---
Ohhh... I find a problem that the pages do not have titles(just display as URL), when I play the demo in [AngularJS Start with Yeoman, Grunt and Bower](http://sbzhouhao.net/2014/08/06/AngularJS-Start-with-Yeoman-Grunt-and-Bower/).
###Intuitively, the page title should be changed dynamically with routers' changing.

<!-- more -->

I get my solution in this [stackoverflow](http://stackoverflow.com/questions/12506329/how-to-dynamically-change-header-based-on-angularjs-partial-view) page.

You can find my repository in GitHub: [AngularJS-Demo-Code](https://github.com/webiseverything/AngularJS-Demo-Code/tree/canChangeTitle/app)

### 1. Open `app/index.html`:
```html
<title ng-bind="title"></title>
```
*Note: why use `ng-bind`?*
```
// from https://coderwall.com/p/vcfo4q
It is preferrable to use ngBind instead of {{ expression }} when a template is
momentarily displayed by the browser in its raw state before Angular compiles it.
```

### 2. Change `app.js` as below:
```javascript
'use strict';

/**
 * @ngdoc overview
 * @name angularJsDemoCodeApp
 * @description
 * # angularJsDemoCodeApp
 *
 * Main module of the application.
 */
var myApp = angular.module('angularJsDemoCodeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule'
  ]);

myApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        title: 'Home Page',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        title: 'About Page',  // define title property for each controller
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/todo', {
        title: 'List Page',
        templateUrl: 'views/todo.html',
        controller: 'TodoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

// change Page Title based on the routers
myApp.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);
```

### That's all! :-)
