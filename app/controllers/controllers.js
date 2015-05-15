'use strict';

angular.module('App')
    .controller('testCtrl',['$scope','$http','testModel', function ($scope, $http, testModel) {
        console.log('controller initialized with model ==> ',testModel.getPeopleList());
        $scope.models = {
            selected: null,
            lists: {"definition": [], "email": []}
        };
        $http.get('/getElements')
            .success(function(data, status, headers, config) {
                $scope.models.lists.definition = data;
                //$scope.models.lists.email = data;
                $http.get('/getEmail')
                    .success(function(data, status, headers, config) {
                        $scope.models.lists.email = data;
                    }).
                    error(function(data, status, headers, config) {
                        console.log('Error getting elements');
                    });
        }).
            error(function(data, status, headers, config) {
                console.log('Error getting elements');
        });

        $scope.test = function(item) {
            $scope.models.selected = item;
            this.setType(item.type);
        }

        $scope.$watch('models', function(model) {
            $scope.modelAsJson = angular.toJson(model, true);
        }, true);

        }
    ])
    .controller('sideCtrl',['$scope','$http','testModel', function ($scope, $http, testModel) {
        console.log('controller initialized with model ==> ',testModel.getPeopleList());
        $scope.type = testModel.getType();
    }
    ]);
