app.factory('MoniesFactory', function ($http) {
	var monies = {};

	monies.getClientToken = function() {
		return $http.get('/client_token')
			.then(function(response) {
				return response.data;
			}, function(err) {
				return new Error(err.message);
			});
	};

	return monies;

});