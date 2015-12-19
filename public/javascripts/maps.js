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
          ////////
          var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Campground</h1>'+
            '<div id="bodyContent">'+
            '<p><b>campground</p>'+
            '<p>Attribution: campground, <a href="https://en.wikipedia.org/w/index.php?title=campground&oldid=297882194">'+
            'https://en.wikipedia.org/w/index.php?title=campground</a> '+
            '(last visited June 22, 2009).</p>'+
            '</div>'+
            '</div>';

          var infowindow = new google.maps.InfoWindow({
            content: contentString
          /////////
              
          }); 
        marker.setMap(map);

        // marker.addListener('click', function() {

          // infowindow.open(map, marker);

        // });
//////
        google.maps.event.addListener(marker,'click', (function(marker,contentString,infowindow){ 
        return function() {
           infowindow.setContent(contentString);
           infowindow.open(map,marker);
        };
    })(marker,contentString,infowindow));
///////
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
