app.config(function ($stateProvider) {
    $stateProvider.state('monies', {
        url: '/monies',
        templateUrl: 'js/moniesshop/moniesshop.html',
        controller: 'MoniesController'
    });
});

app.controller('MoniesController', function ($scope, $state, MoniesFactory, $timeout) {

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
    };

    $scope.monies = function(amount){
        console.log(amount, 'whats up in the controller')
        MoniesFactory.updateCoffeeBeans(amount).then(function(res){
            console.log('we back fromt eh factory', res)
            $scope.success = res.message;

            var onSuccess = function () {
                    $state.go('home')
                }
            $timeout(onSuccess, 3330);
        })
        .catch(function () {
                $scope.error = 'Order not complete.';
        });
    };

});