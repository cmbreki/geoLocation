angular.module("gpsApp").controller("appController",['$scope','$location',function($scope,$location){

/*
if(localStorageService.get('localStorageKey')==null){
     $scope.currentNavItem='currentLocation';
     console.log("localStorageKey is Null");
}
else{
   $scope.currentNavItem=localStorageService.get('localStorageKey');
   console.log("localStorageKey is: ",$scope.currentNavItem);

}
*/
/*
$scope.$watch('currentNavItem', function(newValue){
        localStorageService.set('localStorageKey',newValue);
         console.log(newValue);
         //console.log($scope.zoom);
}); */
console.log($location.path());
if($location.path()==='/location'){
  $scope.currentNavItem='currentLocation';
}
else if ($location.path()==='/pois'){
  $scope.currentNavItem='myPOIs';
}



}]);
