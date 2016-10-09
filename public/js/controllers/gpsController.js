angular.module("gpsApp").controller("GPSController",['$scope','$geolocation','$timeout','Points', function($scope,$geolocation,$timeout,Points){


$scope.mark={};
/*$geolocation.watchPosition({
            timeout: 60000,
            maximumAge: 250,
            enableHighAccuracy: true
        });*/

        var drawMarkers=function(){
          angular.extend($scope, {
             markers:$scope.mark
          });
        }

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
                     },
                  markers:{}
                 });

                 $scope.$watch('myposition.zoom', function(newValue){
                          $scope.zoom = newValue;
                          console.log($scope.zoom);
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
                                /*zoom: $scope.zoom*/
                                zoom: 16



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
       alert($geolocation.position.error);
    });


    Points.query().$promise.then(function (result) {
       $scope.poi =  result;
       console.log($scope.poi);

       angular.forEach(result, function(value, key) {
            $scope.mark[key]=  {
                lat: value.latitude,
                lng: value.longitude,
                focus: false,
                message: value.name
              }
            });
      console.log($scope.mark)
      drawMarkers();
    });




}]);
