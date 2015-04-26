'use strict';

angular.module('App')
    .controller('testCtrl',['$scope','$http','testModel', function ($scope, $http, testModel) {
        console.log('controller initialized with model ==> ',testModel.getPeopleList());
        $scope.models = {
            selected: null,
            lists: {"A": [], "B": []}
        };

        // Generate initial model
        for (var i = 1; i <= 3; ++i) {
            $scope.models.lists.A.push({label: "Item A" + i});
            $scope.models.lists.B.push({label: "Item B" + i});
        }

        // Model to JSON for demo purpose
        $scope.$watch('models', function(model) {
            $scope.modelAsJson = angular.toJson(model, true);
        }, true);

        }
    ]);
