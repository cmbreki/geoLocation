angular.module('gpsApp').config(function ($stateProvider,$urlRouterProvider) {

  $urlRouterProvider.otherwise('/location');

  $stateProvider.state('currentLocation', {
           url: '/location',
           controller : 'GPSController',
           templateUrl: '/views/currentPosition.html'


       })
    $stateProvider.state('myPOIs', {
           url: '/pois',
           templateUrl: '/views/poisList.html'
       });

});
