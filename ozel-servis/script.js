var app = angular.module("ozelServis", [])
    .controller("controller", function($scope, factory) {
        $scope.hesapla = function(sayi1, sayi2, option) {
            $scope.sonuc = factory.dortIslem(sayi1, sayi2, option);
        }
    });

app.factory("factory", function() {
    return {
        dortIslem: function(sayi1, sayi2, option) {
            sayi1 = Number(sayi1);
            sayi2 = Number(sayi2);

            if (option == "+") {
                return s1 + sayi2;
            } else if (option == "-") {
                return sayi1 - sayi2;
            } else if (option == "*") {
                return sayi1 * sayi2;
            } else if (option == "/") {
                return sayi1 / sayi2;
            } else {
                return "İşlemi doğru seçin"
            }

        },
    }
});