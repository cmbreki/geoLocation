angular.module('gpsApp').factory('Points',function($resource){
  return $resource('/points/:id', {id:"@id"},{

      //custom update method
      update:{
        method:"PUT"        
      }


  } );

});
