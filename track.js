
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAt024MrvhPHqQ7UFPw2DvEk0HCpkDhFaA",
    authDomain: "pilgrims-database.firebaseapp.com",
    databaseURL: "https://pilgrims-database.firebaseio.com",
    projectId: "pilgrims-database",
    storageBucket: "pilgrims-database.appspot.com",
    messagingSenderId: "426442286486"
  };

  firebase.initializeApp(config);

mapboxgl.accessToken = 'pk.eyJ1IjoibXVzdGFraW0xOSIsImEiOiJjajhsMDJlbmowaXkxMnpzN3Q2Y2xncHJiIn0.nQkZjua2z2CnEMQ20eLYfw';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v9',
  center: [101, 3],
  zoom: 3
});
//map.addControl(new MapboxDirections({
    //accessToken: mapboxgl.accessToken
//}), 'bottom-right');
// Add zoom and rotation controls to the map.
//map.addControl(new MapboxGeocoder({
    //accessToken: mapboxgl.accessToken 
//}));
map.addControl(new mapboxgl.NavigationControl());
// Add geolocate control to the map.
map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
}));

var rootRef = firebase.database().ref().child("SESAT");
        rootRef.on("child_added", snap =>{
       var lon = snap.child("LATITUDE").val();
       var lat = snap.child("LONGITUDE").val();
  
  var geojson = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [lat, lon]
    },
    properties: {
      title: 'SESAT',
      description: 'Tolong ! Saya sesat!!'
    }
  },
]
};
// add markers to map
geojson.features.forEach(function(marker) {
  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker';
  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
  .setLngLat(marker.geometry.coordinates)
  .addTo(map);
});
new mapboxgl.Marker(el)
  .setLngLat(marker.geometry.coordinates)
  .addTo(map);
  
   });
function getLocation(){
if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
         window.alert("Geolocation is not supported by this browser.");
    }

    function showPosition(position){
      
      lat = position.coords.latitude;
      lon = position.coords.longitude;

      var database = firebase.database();

      var ref = database.ref('LOKASI MUTAWWIF');

      var data = {
        LATITUDE: lat,
        LONGITUDE: lon
      }
      ref.push(data);
      alert("Lokasi dihantar!");
      window.location.replace("pilihlokasi.html");
    }
}