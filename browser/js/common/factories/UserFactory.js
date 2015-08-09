app.factory('UserFactory', function ($http) {
  var match;
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
        console.log('match from filterMatches ', match)
        return response.data;
      }, function(err) {
        return new Error(err.message);
      })
    },
    getMatch: function() {
      return match;
    }
  }

});