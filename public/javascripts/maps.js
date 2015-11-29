$(document).ready(function() {
  console.log("The map document is ready!");

// $(function() {
  
//     var facilityId = []; //returned from the API
//     var allLatlng = []; //returned from the API
//     var allMarkers = []; //returned from the API
//     var facilityName = []; //returned from the API
//     var infowindow = null;
//     var pos;
//     var userCords;
//     var tempMarkerHolder = [];

console.log('OOOOOOOOOOOOOOOOOOOOOOOO')

        // Access-Control-Allow-Origin:"http://api.amp.active.com/camping/campgrounds?pstate=CO&siteType=2001&expwith=1&amenity=4005&pets=3010&api_key=6x8gz7qm68nwaj9ckzg3z5yg",
      $.ajax({
        type: "GET",
        contentType: "application/xml; charset=utf-8",
        xhrFields: {
          withCredentials: false
        },
        url: "http://api.amp.active.com/camping/campgrounds/?pstate=CO&pname=Rocky+Mountain+National+Park&arvdate=02%2F12%2F2016&lengthOfStay=5&siteType=10001&api_key=6x8gz7qm68nwaj9ckzg3z5yg",
        dataType: 'xml',

        success: function (data) {

           $.each(data.results, function (i, val) {
            facilityId.push(val.id);
            facilityName.push(val.facilityName);
           });
            
          console.log(facilityName);
          
          var counter = 0;
          //Now, use the id to get detailed info
          // $.each(facilityId, function (k, v){
          //   $.ajax({
          //     type: "GET",
          //     contentType: "application/xml; charset=utf-8",
          //     // submit a get request to the restful service
          //     url: " http://api.amp.active.com/camping/campgrounds?{queryString params}&api_key=" + v,
          //     dataType: 'xml',
          //     success: function (data) {

          //     for (var key in data) {

          //       var results = data[key];
                
          //       //convert values to floats, to play nice with .LatLng() below.
          //       var latitude = landmarkLat; //????parsing syntax
          //       var longitude = landmarkLong;
                
          //       //set the markers.    
          //       myLatlng = new google.maps.LatLng(latitude,longitude);
              
          //       allMarkers = new google.maps.Marker({
          //         position: myLatlng,
          //         map: map,
          //         title: facilityName[counter],
          //         html: 
          //             '<div class="markerPop">' +
          //             '<h1>' + facilityName[counter] + '</h1>' + 
          //             '</div>'
          //       });

          //       //put all lat long in array
          //       allLatlng.push(myLatlng);
                
          //       //Put the markers in an array
          //       tempMarkerHolder.push(allMarkers);
                
          //       counter++;
          //       //console.log(counter);
          //     };
                
          //     google.maps.event.addListener(allMarkers, 'click', function () {
          //       infowindow.setContent(this.html);
          //       infowindow.open(map, this);
          //     });
                
          //       //console.log(allLatlng);
          //       //  Make an array of the LatLng's of the markers you want to show
          //       //  Create a new viewpoint bound
          //       var bounds = new google.maps.LatLngBounds ();
          //       //  Go through each...
          //       for (var i = 0, LtLgLen = allLatlng.length; i < LtLgLen; i++) {
          //         //  And increase the bounds to take this point
          //         bounds.extend (allLatlng[i]);
          //       }
          //       //  Fit these bounds to the map
          //       map.fitBounds (bounds);
    
          //     }
          //   });
          // }); //end .each
        }
      });

        return false; // important: prevent the form from submitting
    });
});

// });