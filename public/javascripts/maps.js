$(document).ready(function() {
        var myLatlng = new google.maps.LatLng(39.5403, -106.0600);
        var map = new google.maps.Map(document.getElementById("map"), {zoom: 8, center: myLatlng});
  
  $.ajax({
      method: 'GET',
      url: '../parse',            
      success: function(data) {
        for(var i=0; i < data.length; i++){
          var marker = new google.maps.Marker({
              position: data[i],
              title:"Hello Campground"
          }); 
        marker.setMap(map);
        }
      }
  });

});


// var markerA = new google.maps.Marker({
//     map: map,
//     position: new google.maps.LatLng(0, 0),
//     customInfo: "Marker A"
// });

// var markerB = new google.maps.Marker({
//     map: map,
//     position: new google.maps.LatLng(-10, 0)
// });
// markerB.customInfo = "Marker B";

// var markerC = new google.maps.Marker({
//     map: map,
//     position: new google.maps.LatLng(-20, 0)
// });
// markerC['customInfo'] = "Marker C";
// Then to retrieve it in a similar manner:

// google.maps.event.addListener(markerA, 'click', function() {
//     alert(this.customInfo);
// });