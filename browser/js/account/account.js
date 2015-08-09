app.config(function ($stateProvider) {
  $stateProvider.state('account', {
    url: '/account',
    controller: 'AccountController',
    templateUrl: 'js/account/account.html'
  });
});

app.controller('AccountController', function ($scope) {
  $scope.project = {
    description: 'Nuclear Missile Defense System',
    rate: 500
  };

  $scope.genders = [
  "female",
  "male"
  ];
});