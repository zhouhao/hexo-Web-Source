title: AngularJS $http Demo
date: 2014-08-07 09:41:39
tags:
 - AngularJS
 - Ajax
categories:
   - 计算机那些事
   - 网站
---
### For JavaScript, I believe the most powerful function is ***Ajax***. So I made a very very simple demo for AngularJS as learner.

<!-- more -->

```html
<!DOCTYPE html>
<html lang="" ng-app="httpExample">
<head>
<meta charset="UTF-8">
<title>AngularJS http Demo</title>
<link rel="stylesheet" href="">
</head>
<body>
    <div class="container" ng-controller="SimpleController">
        <h3>Simple Controller</h3>
        <ul>
            <li ng-repeat="user in users">{{user.name}} -- {{user.page}}</li>
        </ul>
    </div>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.21/angular.min.js"></script>
<script>

    angular.module('httpExample', [])
    .controller('SimpleController', ['$scope', '$http',
      function($scope, $http) {
        $scope.method = 'GET';
        $scope.url = 'data.json';

          $http({method: $scope.method, url: $scope.url}).
            success(function(data, status) {
              $scope.status = status;
              $scope.users = data;
            }).
            error(function(data, status) {
              $scope.data = data || "Request failed";
              $scope.status = status;
          });
      }]);

</script>
</body>
</html>
```

###JSON data source file `data.json`
```json
[{"name": "Hao Zhou", "page": "Home Pgae"},{"name": "Shan Zhou", "page": "Search Pgae"}]
```

All set now!

![Final Demo Page](https://dn-myblog.qbox.me/img/angularJS/http.png "Final Demo Page")  
