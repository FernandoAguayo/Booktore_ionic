angular.module('BookController',[])

.controller('bookCtrl',function($scope,bookService,$stateParams){

	$scope.articulo = books[$stateParams.id];

})
var books = [       
      { title: 'C/C++ curso de programacion', year: '2015', author: 'Miguel Angl Acera', isbn: '843992688X', editorial: 'Anaya', cover: 'img/c++.jpg' }, 
      { title: 'Programacion en java', year: '2014', author: 'Luis Joyanes Aguilar', isbn: '0936388110', editorial: 'McGrawHill', cover: "img/java.jpg" },       
      { title: 'El gran libro de programacion con Android', year: '2014',  author: 'Jose Enrique Amaro soriano', isbn: '0844273619', editorial: 'Alfaomega', cover: "img/android.jpg" }    
      ];  