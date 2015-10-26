//camphost-db
///camgroundsCollection[{name:"Morraine", region: "NW", map: img.jpg, }]
//reservationsCollection[{campers:[camper_id, camper_id], cg_id:, site_id:}]
//campersCollection[{email:email@example, password:}]


campgrounds >> campground >> campsites >> site >> reservation

var db = require('monk')('localhost/camphost-db');
var Campgrounds = db.get('campground');
var Sites = db.get('site');
var Reservations = db.get('reservation')
var Campers = db.get('camper');


campgrounds.findOne({facilityId:req.body}).then(function(campground){
  sites.findOne({siteId:req.body}).then(function(site){
    reservation.findOne({reservationId:req.body}).then(function(){
      db.close()
    })
  })
})

//export functions