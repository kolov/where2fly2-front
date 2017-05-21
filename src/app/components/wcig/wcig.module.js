var underscore = angular.module('underscore', []);
underscore.factory('_', function () {
  return window._; // assumes underscore has already been loaded on the page
});


var wcigModule = angular.module("wcig", [
  'ngResource',
  'ui.bootstrap',
  'ui.router',
  'ui.bootstrap.modal',
  'ngSanitize',
  'angularLoad',
  'underscore',
  'ui.slider',
  'smart-table',
  'ngMap']);

wcigModule.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider

    .state('home', {
      url: '/home',
      controller: 'FlightsController',
      templateUrl: 'app/pages/search-flights.html'
    })

    .state('disclaimer', {
      url: '/disclaimer',
      controller: 'AppController',
      templateUrl: 'app/pages/disclaimer.html'
    })

    .state('about', {
      url: '/about',
      controller: 'AppController',
      templateUrl: 'app/pages/about.html'
    });

});
wcigModule
  .config(['$sceDelegateProvider', function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist(
      ['self',
        'https://www.google.com/**']);
  }]);

wcigModule.config(['$httpProvider', function ($httpProvider) {
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);


wcigModule.config(['$httpProvider', function ($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);







