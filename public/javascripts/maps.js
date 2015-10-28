$(document).ready(function() {
  console.log("The document is ready! Yo....");

$(function() {
  var map;
  function initialize() {
    map = new google.maps.Map(document.getElementById('map-canvas'), {
      zoom: 8,
      center: {lat: -34.397, lng: 150.644}
    });


    var mapDiv = document.getElementById('map-canvas');

    google.maps.event.addListener(map, 'click', addMarker);
  }


  function addMarker(event) {
    console.log(event.latLng.A);
    console.log(event.latLng.F);

    //Add your code to add markers here
  }

  initialize();
});

});