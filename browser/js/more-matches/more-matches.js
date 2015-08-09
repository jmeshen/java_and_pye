app.config(function ($stateProvider) {
  $stateProvider.state('moar', {
    url: '/moar',
    templateUrl: 'js/more-matches/more-matches.html',
    controller: 'MoarCtrl',
    resolve: {
      user: function(AuthService) {
        return AuthService.getLoggedInUser().then(function(user) {
          return user;
        })
      }
    }
  });
});

app.controller('MoarCtrl', function($scope, UserFactory, MoniesFactory, $state) {
  // $scope.user = user;
  $scope.moar = UserFactory.getMoar();
  console.log('mooooooarrrrr in moar state', $scope.moar)
  $scope.decision = false;
  $scope.makeTrue = function() {
    $scope.decision = true;
  }
  $scope.goToMatch = function(idx) {
    UserFactory.updateMatch($scope.moar[idx]);
    MoniesFactory.updateCoffeeBeans(-300);
    $state.go('match');
  }
});