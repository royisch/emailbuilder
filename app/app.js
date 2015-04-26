var app;
    app = angular.module('App', [
        'ngRoute',
        'dndLists'
    ]);
    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/hello.html',
                controller: 'testCtrl'
            })
            .otherwise({
                redirectTo: 'views/hello.html',
                controller: 'testCtrl'
            });
    });


