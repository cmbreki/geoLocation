angular.module('gpsApp').factory('Point',function($resource){
  return $resource('/points/:id', {id:"@id"},{

      //custom update method
      update:{
        method:"PUT"
      }


  } );

});
