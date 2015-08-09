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
    $scope.ctoken;

    MoniesFactory.getClientToken().then(function(token){
       
        braintree.setup(token, "dropin", {
            container: "payment-form"
        });

        $scope.ctoken = token;
    });

    $scope.checkout = function(token) {
        MoniesFactory.checkouT(token).then(function(stuff){
            console.log('checkout', stuff)
        })
    }

});