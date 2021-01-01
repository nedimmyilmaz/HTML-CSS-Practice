var app = angular.module("module", []).controller("controller", function($scope, $http) {
    $http.get("veri.json").then(function(gelenVeri) {
        $scope.personeller = gelenVeri.data;
    });
});