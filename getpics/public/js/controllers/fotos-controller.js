angular.module('alurapic').controller('FotosController', function($scope, $http) {
	
	$scope.fotos = [];
	$scope.filtro = "";

	$http.get('v1/fotos')
	.success(function(fotos){
		$scope.fotos = fotos;
	}).error(function(){
		console.log(error);
	})

	/*
	var promise = $http.get('v1/fotos');
	promise.then(function(retorno) {
		$scope.fotos = retorno.data;
	}).catch(function(error){
		console.log(error)
	});
	*/

	/*
	$scope.foto = {
		titulo : 'Leão',
		url : 'http://www.fundosanimais.com/Minis/leoes.jpg'
	}; 
	
	$scope.foto2 = {
		titulo : 'Leão',
		url : 'http://www.fundosanimais.com/Minis/leoes.jpg'
	}; 

	$scope.foto3 = {
		titulo : 'Leão',
		url : 'http://www.fundosanimais.com/Minis/leoes.jpg'
	}; 
	*/

	/*
	$scope.fotos = [
	{
		titulo : 'Leão',
		url : 'http://www.fundosanimais.com/Minis/leoes.jpg'
	},
	{
		titulo : 'Leão',
		url : 'http://www.fundosanimais.com/Minis/leoes.jpg'
	},
	{
		titulo : 'Leão',
		url : 'http://www.fundosanimais.com/Minis/leoes.jpg'
	},
	{
		titulo : 'Leão',
		url : 'http://www.fundosanimais.com/Minis/leoes.jpg'
	},
	{
		titulo : 'Leão',
		url : 'http://www.fundosanimais.com/Minis/leoes.jpg'
	},
	{
		titulo : 'Leão',
		url : 'http://www.fundosanimais.com/Minis/leoes.jpg'
	}
	]; 
	*/


});