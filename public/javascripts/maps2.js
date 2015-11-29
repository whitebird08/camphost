$(document).ready(function() {
  console.log("The maps2 document is ready!");

	var myLatlng = new google.maps.LatLng(39.5403, -106.0600);
	var mapOptions = {
	  zoom: 5,
	  center: myLatlng
	}
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);

	var testArray = [{lat:35.5503, lng:-106.0700},{lat:39.3403, lng:-106.0400}];
	for(var i=0; i<testArray.length; i++){

		var marker = new google.maps.Marker({
		    position: testArray[i],
		    title:"Hello Campground"
		});
// To add the marker to the map, call setMap();
	marker.setMap(map);
	};

});