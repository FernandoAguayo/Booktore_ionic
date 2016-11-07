angular.module('starter', ['ionic','MainController','AuthorController','CurriculumController','BibliotecaController','BookController'])

.config(function($urlRouterProvider,$stateProvider){

      $stateProvider  
      .state('main',{
        url:'/main',
        templateUrl:'templates/main.html',
        controller:'HomeCtrl'
      })
      .state('acceso',{
        url:'/acceso',
        templateUrl:'templates/ibiblioteca.html',
        controller:'ibibliotecaCtrl'
      })
      .state('consulta',{
        url:'/consulta',
        templateUrl:'templates/author.html',
        controller:'authorCtrl'
      })
      .state('curriculum',{
        url:'/curriculum',
        templateUrl:'templates/curriculum.html',
        controller:'curriculumCtrl'
      })
      .state('bookDetail',{
        url:'/book/:id',
        templateUrl:'templates/book.html',
        controller:'bookCtrl'
      })

      $urlRouterProvider.otherwise('main');
})
.factory('bookService', function() {     
var books = [       
      { title: 'C/C++ curso de programacion', year: '2015', author: 'Miguel Angl Acera', isbn: '843992688X', editorial: 'Anaya', cover: 'img/c++.jpg' }, 
      { title: 'Programacion en java', year: '2014', author: 'Luis Joyanes Aguilar', isbn: '0936388110', editorial: 'McGrawHill', cover: "img/java.jpg" },       
      { title: 'El gran libro de programacion con Android', year: '2014',  author: 'Jose Enrique Amaro soriano', isbn: '0844273619', editorial: 'Alfaomega', cover: "img/android.jpg" }     
      ];     
  return {         
    getBooks: function() {             
      return books;         
    },         
    getBook: function(id) {             
      return books[id];         
    },     
  } 
});

