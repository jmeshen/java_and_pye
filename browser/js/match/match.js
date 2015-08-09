app.config(function ($stateProvider) {
    $stateProvider.state('match', {
        url: '/match',
        templateUrl: 'js/match/match.html',
        controller: 'MatchCtrl'
    });
});

app.controller('MatchCtrl', function($scope, UserFactory, $state) {
  $scope.match = UserFactory.getMatch();
  console.log('whats up', $scope.match)
  var x = $scope.match;
  $scope.languages = x.languages.join(',');
  $scope.decision = false;
  $scope.makeTrue = function() {
    $scope.decision = true;
  }
  $scope.goToMoar = function() {
    $state.go('moar');
  }
});