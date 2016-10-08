angular.module("gpsApp").controller("GPSController",['$scope','$geolocation','$timeout', function($scope,$geolocation,$timeout){


/*$geolocation.watchPosition({
            timeout: 60000,
            maximumAge: 250,
            enableHighAccuracy: true
        });*/

        angular.extend($scope, {
                        myposition: {
                            lat: 37.97565,
                            lng: 23.73400,
                            zoom: 8
                         },
                         layers: {
                           baselayers: {
                             googleTerrain: {
                               name: 'Google Terrain',
                               layerType: 'TERRAIN',
                               type: 'google'
                       },
                         googleHybrid: {
                            name: 'Google Hybrid',
                             layerType: 'HYBRID',
                              type: 'google'
                     },
                         googleRoadmap: {
                           name: 'Google Streets',
                           layerType: 'ROADMAP',
                           type: 'google'
                         }
                       }
                     }
                 });

      /* $geolocation.getCurrentPosition({
                   timeout: 60000
                }).then(function(position) {

                      console.log("I got here");
                      $scope.myPosition = position;
              	       console.log($scope.myPosition);

                     angular.extend($scope, {
                                     myposition: {
                                         lat: $scope.myPosition.coords.latitude,
                                         lng: $scope.myPosition.coords.longitude,
                                         zoom: 18
                                      },
                                      markers: {
                                          m1: {
                                              lat: $scope.myPosition.coords.latitude,
                                              lng: $scope.myPosition.coords.longitude,
                                       }
                                    }

                    });
        }); */

   $geolocation.watchPosition({
            timeout: 60000,
            maximumAge: 250,
            enableHighAccuracy: true

        })

      $scope.myPosition=$geolocation.position;
      console.log($scope.myPosition);


      $scope.$on('$geolocation.position.changed', function(event, args) {
          console.log("Signal broadcasted");
          angular.extend($scope, {
                          myposition: {
                                lat: $scope.myPosition.coords.latitude,
                                lng: $scope.myPosition.coords.longitude,
                                zoom: 18



                           },
                           markers: {
                               m1: {
                                   lat: $scope.myPosition.coords.latitude,
                                   lng: $scope.myPosition.coords.longitude,
                            }
                         }
          })
      });

    $scope.$on('$geolocation.position.error', function(event, args) {
       console.log($geolocation.position.error);
    });

    /*  $scope.$watch('myPosition',function(){
        angular.extend($scope, {
                        myposition: {
                            lat: $scope.myPosition.coords.latitude,
                            lng: $scope.myPosition.coords.longitude,
                            zoom: 18
                         }
                       });
      }); */

     

}]);
