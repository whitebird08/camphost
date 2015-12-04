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
