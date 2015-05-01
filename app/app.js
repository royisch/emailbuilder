var app;
    app = angular.module('App', [
        'ngRoute',
        'dndLists'
    ]);
    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/landing.html',
                controller: 'testCtrl'
            })
            .otherwise({
                redirectTo: 'views/landing.html',
                controller: 'testCtrl'
            });
    });


