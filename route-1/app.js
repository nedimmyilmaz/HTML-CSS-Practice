var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "anasayfa.html",
            controller: "anaSayfaCTRL"
        })
        .when("/hakkimizda", {
            templateUrl: "hakkimizda.html",
            controller: "hakkimizdaCTRL"
        }).when("/iletisim", {
            templateUrl: "iletisim.html"
        })
});

app.controller("anaSayfaCTRL", function($scope) {
    $scope.baslik = "Anasayfa Başlığı"
    $scope.aciklama = "Anasayfa açıklması"
});
app.controller("hakkimizdaCTRL", function($scope) {
    $scope.baslik = "hakkımızda Başlığı"
    $scope.aciklama = "hakkımızda açıklması"
});