// Directive:
// (function() {
//   angular.module('piratesApp')
//   .directive('gsPirateShow', function(){
//     return {
//       scope: {
//         pirate: '<'
//       },
//       controller:'ShowPirateController',
//       controllerAs: 'vm',
//       templateUrl: '../views/pirates/show.html'
//     }
//   })

// })()
// >>>>> refactored to Component:

(function() {
  angular.module('piratesApp')
  .component('gsPirateShow', {
      bindings: {
        pirate: '<'
      },
      controller:'ShowPirateController',
      controllerAs: 'vm', // --> also in show.html, everything needs to get boud to controller, like vm.pirate.image_url
      templateUrl: '../views/pirates/show.html'
  })

})()

