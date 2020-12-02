var app = angular.module("Uygulama", []).controller("MusteriController", function ($scope) {
	var musteri = {
		isim: 'Nedim',
		soyisim: 'YILMAZ',
		cinsiyet: 'Erkek'
	};
	$scope.musteri = musteri;
});
