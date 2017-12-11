
var config = {
    apiKey: "AIzaSyBmPiUDFjXW4Dij_Ke6WdiTFEUTxRqTfYs",
    authDomain: "database-e-pilgrim.firebaseapp.com",
    databaseURL: "https://database-e-pilgrim.firebaseio.com",
    projectId: "database-e-pilgrim",
    storageBucket: "",
    messagingSenderId: "1006356553834"
  };
  firebase.initializeApp(config);

mapboxgl.accessToken = 'pk.eyJ1IjoibXVzdGFraW0xOSIsImEiOiJjajhsMDJlbmowaXkxMnpzN3Q2Y2xncHJiIn0.nQkZjua2z2CnEMQ20eLYfw';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v9',
  center: [101, 3],
  zoom: 3
});
map.addControl(new MapboxDirections({
    accessToken: mapboxgl.accessToken
}), 'bottom-right');
// Add zoom and rotation controls to the map.
map.addControl(new MapboxGeocoder({
    accessToken: mapboxgl.accessToken 
}));
map.addControl(new mapboxgl.NavigationControl());
// Add geolocate control to the map.
map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
}));

