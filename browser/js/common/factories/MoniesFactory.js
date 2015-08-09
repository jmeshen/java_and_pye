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

	monies.checkouT = function(token) {
		return $http.post('/checkout', {payment_method_nonce: token})
			.then(function(res){
				return res.data;
			}, function(err){
				return new Error(err.message);
			});
	};

	return monies;

});