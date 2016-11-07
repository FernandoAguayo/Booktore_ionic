angular.module('CurriculumController',[])

.controller('curriculumCtrl',function($scope){
	$scope.works = [     
	{ date: 'Octubre 2016 - hoy', description: 'Programacion en meteorJS' },      
	{ date: '2013 - Hoy', description: 'Programacion Java' },      
	{ date: '2010 - Hoy', description: 'Tecnico en informatica' } 
]; 
})