app.factory('UserFactory', function ($http) {
  var match;
  var moar;
  return {
    getUser: function(id) {
      return $http.get('/api/users/'+id).then(function(response) {
        return response.data;
      }, function(err) {
        return new Error(err.message);
      })
    },
    filterMatches: function(id) {
      return $http.put('/api/users/filtermatches/'+id).then(function(response) {
        console.log('response from factory', response.data)
        match = response.data[0];
        moar = response.data.slice(1);
        console.log('match from filterMatches ', match)
        console.log('moarrrrrrr ', moar)
        return response.data;
      }, function(err) {
        return new Error(err.message);
      })
    },
    getMatch: function() {
      return match;
    },
    getMoar: function() {
      return moar;
    }
  }

});