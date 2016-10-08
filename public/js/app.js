
angular.module("gpsApp",['ngAnimate','ngGeolocation','ui-leaflet','ngMaterial', 'ngMessages'])
.config(function( $mdGestureProvider ) {
        $mdGestureProvider.skipClickHijack();
})
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
    .primaryPalette('cyan', {
          'default': '700', // by default use shade 400 from the pink palette for primary intentions
          'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
          'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
          'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
        })
    .dark();
  });
