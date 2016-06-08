// The way we learned it:
// var app = angular.module('piratesApp', [ngRoute]);
//app.config

// John Papa style guide way is not to populate the global scope any more, so no declaring global variable
(function() {
  angular
  .module('piratesApp', ['ngRoute'])
  .config(config) // call the function that is defined below
  //
  function config($routeProvider, $locationProvider){

    $routeProvider.when('/pirates',{
      templateUrl: '../views/pirates/index.html',
      controller: 'PiratesController',
      controllerAs: 'vm'
    })
    .when('/pirates/new',{
      templateUrl: '../views/pirates/new.html',
      controller: 'NewPirateController',
      controllerAs: 'vm' // needs to be called differently with nested controllers
    })
    .when('/pirates/:id/edit',{
      templateUrl: '../views/pirates/edit.html',
      controller: 'EditPirateController',
      controllerAs: 'vm' // needs to be called differently with nested controllers
    })
    .otherwise({redirectTo: '/pirates'}) // default route
    $locationProvider.html5Mode(true) // make sure to also use <base href="/">

// injecting sets the order/meaning of the parameters in the config function so that after code minimizing it still works
    config.$inject = ['$routeProvider','$locationProvider'] // strings do not get minimized

  }
})()