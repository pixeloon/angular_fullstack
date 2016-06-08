(function() {

  angular
    .module('piratesApp')
    .service('PirateService', PirateService)

    function PirateService($http) {
      const BASE_URL = '/api/pirates'

      this.getPirates = function() {
        return $http.get(BASE_URL)
      }

      this.createPirate = function(newPirate) {
        return $http.post(BASE_URL, newPirate); // the second parameter is the data we send TO the server, is essentially req.body.pirate
      }

      this.getPirate = function(id) {
        // implement!
        return $http.get(BASE_URL + "/" + id)
      }

      this.deletePirate = function(id) {
        // implement!
        return $http.delete(BASE_URL + "/" + id)
      }

      this.updatePirate = function(data) {
        // implement!
        return $http.put(BASE_URL + "/" + data.pirate.id, data) // the second parameter is the data we send TO the server, is essentially req.body.pirate
      }
    }

    PirateService.$inject = ["$http"];

})()