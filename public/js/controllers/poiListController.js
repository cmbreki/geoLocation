angular.module("gpsApp").controller("POIListController",['$scope','$geolocation','$timeout','Point','$mdToast', function($scope,$geolocation,$timeout,Point,$mdToast){


$scope.mark={};

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

  
    Point.query().$promise.then(function (result) {
       $scope.poi =  result;
       //console.log($scope.poi);

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
