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
            '<p><b>campground</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
            'sandstone rock formation in the southern part of the '+
            'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
            'south west of the nearest large town, Alice Springs; 450&#160;km '+
            '(280&#160;mi) by road. Kata Tjuta and campground are the two major '+
            'features of the campground - Kata Tjuta National Park. campground is '+
            'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
            'Aboriginal people of the area. It has many springs, waterholes, '+
            'rock caves and ancient paintings. campground is listed as a World '+
            'Heritage Site.</p>'+
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

        marker.addListener('click', function() {
          infowindow.open(map, marker);

        });

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
