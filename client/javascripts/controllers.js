
  
  // function PiratesController($http){
  //   var vm= this;

  //   $http.get('api/pirates').then(function(res){
  //     vm.pirates = res.data;
  //   });
  // }

  // refactor to:


// (function() {
  
//   angular 
//     .module('piratesApp')
//     .controller('PiratesController', PiratesController)
//     .controller('NewPirateController', NewPirateController)
//     .controller('ShowPirateController', ShowPirateController) 
    
//     function PiratesController(PirateService) {
//       var vm = this;
//       PirateService.getPirates().then(function(res) {
//         vm.pirates = res.data;
//       });
//     }

//     function NewPirateController(PirateService, $location) {
//       var vm = this;
//       vm.pirate = {};

//       vm.addPirate = function(newPirate) {
//         var req = { pirate: newPirate };
//         PirateService.createPirate(req).then(function(res) {
//           $location.path('/pirates');
//         });
//       }
//     }

//     function ShowPirateController(PirateService){
//     var vm = this;
//     vm.removePirate = function(id){
//       PirateService.deletePirate(id).then(function(res){
//         $route.reload('/pirates'); // forcable refresh the current view
//       })
//     }
//   }

//     PiratesController.$inject = ['PirateService'];
//     NewPirateController.$inject = ['PirateService', '$location'];
//     ShowPirateController.$inject = ['PirateService', '$route'];

// })()

(function() {
  
  angular 
    .module('piratesApp')
    .controller('PiratesController', PiratesController)
    .controller('NewPirateController', NewPirateController)
    .controller('ShowPirateController', ShowPirateController)
    
    function PiratesController(PirateService) {
      var vm = this;
      PirateService.getPirates().then(function(res) {
        vm.pirates = res.data;
      });
    }

    function NewPirateController(PirateService, $location) {
      var vm = this;
      vm.pirate = {};

      vm.addPirate = function(newPirate) {
        var req = { pirate: newPirate };
        PirateService.createPirate(req).then(function(res) {
          $location.path('/pirates');
        });
      }
    }

    function ShowPirateController(PirateService, $route) {
      var vm = this;

      vm.removePirate = function(id) {
        PirateService.deletePirate(id).then(function() {
          $route.reload();
        })
      }
    }

    PiratesController.$inject = ['PirateService'];
    NewPirateController.$inject = ['PirateService', '$location'];
    ShowPirateController.$inject = ['PirateService', '$route'];

})()