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

function allCampgrounds(){
   foodsCollection.findOne({_id: req.params.id});
});

// function makeReservation(req, res, next){
//   Campgrounds.findOne({facilityId:req.body.id}).then(function(campground){
//     return Sites.findOne({siteId:req.body.id}).then(function(site){
//      return Reservations.find({// available?
//       }).then(function(){//if available then insert else message unavailable
//         db.close()
//       })
//     })
//   })
// }

//////

var joinCampgroundToReservation;
  function(campground, site){}
var joinCamgroundToSite;
var joinSiteToReservation;
var joinReservationToCamper;








module.export functions