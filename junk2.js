var db = require('monk')('localhost/camphost-db');
var Campgrounds = db.get('campground');
var Sites = db.get('site');
var Reservations = db.get('reservation')
var Campers = db.get('camper');

var joinReservationCampground = function (reservation, campground){
  Reservations.forEach(function (reservation){
    Campgrounds.forEach(function (campground){
      if(reservation.campgroundId === campground._id){
        reservation.campground = campground
      }
    })
  })
  return campground
}

var joinReservationSites = function (reservation, sites){
  Reservations.forEach(function (reservation){
    Sites.forEach(function (sites){
      if(reservation.siteId === sites._id){
        reservation.sites = site
      }
    })
  })
  return site
}

var joinReservationCamper = function(reservation, camper){
  Reservations.forEach(function (reservation){
    Campers.forEach(function (camper){
      if(reservation.camperId === camper._id){
        reservation.camper = camper
      }
    })
  })
  return camper
}

var joinCamperReservation = function(camper, reservation){
  Campers.forEach(function (camper){
    reservations.forEach(function (reservation){
      if(camper.reservationId === reservation._id){
        camper.reservation = reservation
      }
    })
  })
  return reservation
}

router.post('/reservations/index', function(req, res, next){
  Reservations.insert(req.params, {
    "facilityName" : reservation.campground.facilityName
    "arrivalDate" : reservation.campground.arrivalDate,
    "lengthOfStay" : reservation.lengthOfStay
    "parkId" : reservation.parkId
    "loopName" : reservation.loopName
    "siteId" : reservation.siteId
    "siteType" : reservation.siteType
    "camperId" : reservation.camperId

  });
  res.redirect('/campers/dash')
})
// Questions: answer these to make a plan.
// how do i insert the other collection data into the reservation collection item?
//how do i pass that from the lib folder into the routes?
//how do i display the camper's reservation data on the dashboard?
//user can edit a reservation and/or delete it.
//how do i pass in the camp ground/site api data to the collections?()
//how do i display the google map 
// and display pins from campground api lat and long?


