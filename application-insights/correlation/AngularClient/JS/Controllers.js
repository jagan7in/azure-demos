﻿/// <reference path="../angular.min.js" />
/// <reference path="Modules.js" />
/// <reference path="Services.js" />

app.controller("RESTClientController", ['$scope', '$log', 'RESTClientService', function ($scope, $log, RESTClientService) {
    //debugger;
    function createGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    $scope.operation_id = createGuid();
    window.appInsights.trackEvent("Custom event from JS", { operation_Id: $scope.operation_id });

    var promiseGet = RESTClientService.get($scope.operation_id);
    promiseGet.then(function (pl) {
        $scope.message = pl.data;
    },
              function (errorPl) {
                  $log.error('failure loading Company', errorPl);
              });
}]);
