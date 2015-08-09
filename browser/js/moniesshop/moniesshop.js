app.config(function ($stateProvider) {
    $stateProvider.state('monies', {
        url: '/monies',
        templateUrl: 'js/moniesshop/moniesshop.html',
        controller: 'MoniesController'
    });
});

app.controller('MoniesController', function ($scope, $state, MoniesFactory) {

    $scope.login = {};
    $scope.error = null;
    var ctoken;

    MoniesFactory.getClientToken().then(function(token){
        console.log('whats up', token)
        ctoken = token;
    })

    $scope.checkout = function() {
        console.log("good hands");
    }

});