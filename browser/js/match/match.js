app.config(function ($stateProvider) {
    $stateProvider.state('match', {
        url: '/match',
        templateUrl: 'js/match/match.html',
        controller: 'MatchCtrl'
    });
});

app.controller('MatchCtrl', function($scope, UserFactory) {
  $scope.match = UserFactory.getMatch();
  console.log($scope.match)
})