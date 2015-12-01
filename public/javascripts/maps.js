$(document).ready(function() {
  console.log("The map document is ready!");


console.log('OOOOOOOOOOOOOOOOOOOOOOOO')

        // Access-Control-Allow-Origin:"http://api.amp.active.com/camping/campgrounds?pstate=CO&siteType=2001&expwith=1&amenity=4005&pets=3010&api_key=6x8gz7qm68nwaj9ckzg3z5yg",
      $.ajax({
        type: "GET",
        contentType: "application/xml; charset=utf-8",
        xhrFields: {
          withCredentials: false
        },
        url: "http://api.amp.active.com/camping/campgrounds?pname=ASPEN&api_key=6x8gz7qm68nwaj9ckzg3z5yg",
        dataType: 'xml',

        success: function (data) {
          //////////
          var campgrounds = response.body

          var coordsArray = [];
          var tempArray = [];
          var splitData = response.body.split(' ')

            for(var i=0; i<splitData.length; i++){
              if(splitData[i].substring(0,8) === 'latitude'){
                var latValue = splitData[i].substring(10,20)
                tempArray.push(latValue)
              }
              if(splitData[i].substring(0,9) === 'longitude'){
                var longValue = splitData[i].substring(11,23)
                tempArray.push(longValue)
              }
            }

            for(i=0; i<tempArray.length; i+=2){
              var coordSet = {lat:tempArray[i],lng:tempArray[i+1]}
              coordsArray.push(coordSet)
            }

            // console.log('coordsArray = ', coordsArray..........................................)


                var myLatlng = new google.maps.LatLng(39.5403, -106.0600);
                var mapOptions = {
                  zoom: 5,
                  center: myLatlng
                }
                var map = new google.maps.Map(document.getElementById("map"), mapOptions);

                var coordsArray = [{lat:35.5503, lng:-106.0700},{lat:39.3403, lng:-106.0400}];
                for(var i=0; i<coordsArray.length; i++){
                  var marker = new google.maps.Marker({
                      position: coordsArray[i],
                      title:"Hello Campground"
                  });
              // To add the marker to the map, call setMap();
                marker.setMap(map);
                };

          //////////

         

        }
      // });

        // return false; // important: prevent the form from submitting
    });
});

// });