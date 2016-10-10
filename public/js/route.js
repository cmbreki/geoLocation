angular.module('gpsApp').config(function ($stateProvider,$urlRouterProvider) {

  $urlRouterProvider.otherwise('/location');

  $stateProvider.state('currentLocation', {
           url: '/location',
           controller : 'GPSController',
           templateUrl: '/views/currentPosition.html'


       })
    $stateProvider.state('myPOIs', {
           url: '/pois',
           controller : 'POIListController',
           templateUrl: '/views/poisList.html'
       });

});
