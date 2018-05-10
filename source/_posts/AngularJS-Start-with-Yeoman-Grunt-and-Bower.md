title: AngularJS Start with Yeoman, Grunt and Bower
date: 2014-08-06 11:54:27
tags:
 - AngularJS
 - Todo
 - Yeoman
 - Grunt
 - Bower
---
In this article, I do not try to code myself, just understand AngularJS in a high-level view.
<!-- more -->
1. Before we start, we should install Node, npm, Grunt, Bower and Yeoman.
```
#This will install the latter three tools
npm install -g yo grunt-cli bower
```
2. Now, let's install [AngularJS generator](https://github.com/yeoman/generator-angular), which is a Yeoman generator for AngularJS.
```
npm install -g generator-angular
```

###After you run `grunt serve`, you will see the page as below:   
![Yeoman Page](https://dn-myblog.qbox.me/img/angularJS/yo.png "Yeoman Page")  

###Now, I am going to add the todo list from [official AngularJS page](https://angularjs.org/#add-some-control) to this demo.

1. Create `todo.html` in `app/views` folder with the code:

```html
<!-- change TodoController to TodoCtrl -->
<div ng-controller="TodoCtrl">
    <span>{{remaining()}} of {{todos.length}} remaining</span>
    [ <a href="" ng-click="archive()">archive</a> ]
    <ul class="unstyled">
      <li ng-repeat="todo in todos">
        <input type="checkbox" ng-model="todo.done">
        <span class="done-{{todo.done}}">{{todo.text}}</span>
      </li>
    </ul>
    <form ng-submit="addTodo()">
      <input type="text" ng-model="todoText"  size="30" placeholder="add new todo here">
      <input class="btn-primary" type="submit" value="add">
    </form>
</div>
```

2. Create `todo.js` in `app/scripts/controllers` folder with the code:

```js
'use strict';

/**
 * @ngdoc function
 * @name angularJsDemoCodeApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the angularJsDemoCodeApp
 */
angular.module('angularJsDemoCodeApp')
  .controller('TodoCtrl', function ($scope) {

    $scope.todos = [
      {text:'learn angular', done:true},
      {text:'build an angular app', done:false}];
 
    $scope.addTodo = function() {
      $scope.todos.push({text:$scope.todoText, done:false});
      $scope.todoText = '';
    };
 
    $scope.remaining = function() {
      var count = 0;
      angular.forEach($scope.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
 
    $scope.archive = function() {
      var oldTodos = $scope.todos;
      $scope.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) { // please add this "{", or jsLint will report error in grunt
            $scope.todos.push(todo); 
        }
      });
    };
  });

```

3. Change `app.js` to:

```js
'use strict';

/**
 * @ngdoc overview
 * @name angularJsDemoCodeApp
 * @description
 * # angularJsDemoCodeApp
 *
 * Main module of the application.
 */
angular
  .module('angularJsDemoCodeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/todo', {
        templateUrl: 'views/todo.html',
        controller: 'TodoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  ```

 4. Modify `index.html` menu as:

 ```html
<ul class="nav nav-pills pull-right">
    <li class="active"><a ng-href="#">Home</a></li>
    <li><a ng-href="#/about">About</a></li>
    <li><a ng-href="#/todo">Todo</a></li>
</ul>
```

5. Add `.done-true { text-decoration: line-through; color: grey;}` to `main.css`.

Now, we are all set.

![Final Demo Page](https://dn-myblog.qbox.me/img/angularJS/final_demo.png "Final Demo Page")  