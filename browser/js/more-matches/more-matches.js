app.config(function ($stateProvider) {
    $stateProvider.state('moar', {
        url: '/moar',
        templateUrl: 'js/more-matches/more-matches.html',
        controller: 'MoarCtrl'
    });
});

app.controller('MoarCtrl', function($scope, UserFactory) {
  $scope.moar = UserFactory.getMoar();
  console.log('mooooooarrrrr in moar state', $scope.moar)
});