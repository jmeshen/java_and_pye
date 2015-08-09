app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller: 'HomeCtrl'
    });
});

app.controller('HomeCtrl', function($scope, AuthService, UserFactory) {
  console.log('in home ctrl')
  AuthService.getLoggedInUser().then(function(data) {
    console.log('getting here?')
    $scope.user = data;
    // UserFactory.filterMatches($scope.user._id).then(function(data) {
    //   console.log('back with data!', data);
    //   // console.log(data)
    //   $scope.user.match = data[0];
    //   console.log($scope.user.match)
    // })
    UserFactory.filterMatches($scope.user._id);
  });
})