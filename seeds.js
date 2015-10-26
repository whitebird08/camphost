var db = require('monk')('localhost/camphost-db');
var Campgrounds = db.get('campground');
var Sites = db.get('site');
var Reservations = db.get('reservation')
var Campers = db.get('camper');

//campground = facilityName, parkId, landmarkName, landmarkLat, landmarkLong, detailDescription
var morraineParkId = campground.id(),
var glacierBasinId = campground.id(),
var aspenGlenId = campground.id()

// site = parkId, loopName, siteNum, siteType
var siteId01 = site.id(),
var siteId02 = site.id(),
var siteId03 = site.id(),

//reservation = resId, arrivalDate, lengthOfStay, parkId, loopName, siteNum, siteType, camperId
var reservationId01 = reservation.id(),
var reservationId02 = reservation.id(),
var reservationId03 = reservation.id()

//camper =  camperId, email, password
var joeId = camper.id(),
    sueId = camper.id(),
    timId = camper.id(),
    kimId = camper.id()

Promise.all([
  users.remove().then(function () {
    return Promise.all([
      Campers.insert({
        _id: joeId, 
        username: 'Joe', 
      }),
      Campers.insert({
        _id: sueId, 
        username: 'Sue', 
      }),
      Campers.insert({
        _id: timId, 
        username: 'Tim', 
      }),
      Campers.insert({
        _id: kimId, 
        username: 'Kim', 
      }),
    ])
  }),

  //campground = facilityName, parkId, landmarkName, landmarkLat, landmarkLong, detailDescription
  Campgrounds.remove().then(function () {
    return Promise.all([
      Campgrounds.insert({
        facilityName:"MORRAINE PARK"
        facilityId:"190306", 
        landmarkName:true, 
        landmarkLat:37.84035, 
        landmarkLong:-122.4888889
      }),

      Campgrounds.insert({
        facilityName:"GLACIER BASIN"
        facilityId:"190307", 
        landmarkName:true, 
        landmarkLat:37.84035, 
        landmarkLong:-122.4888889
      }),
      Campgrounds.insert({
        facilityName:"ASPEN GLEN"
        facilityId:"190308", 
        landmarkName:true, 
        landmarkLat:37.84035, 
        landmarkLong:-122.4888889
      }),

    ])
  }),
  // site = parkId, loopName, siteNum, siteType
  Sites.remove().then(function () {
    return Promise.all([
      Sites.insert({
        parkId:"50032", 
        loopName:"A", 
        siteId: "1582", 
        siteType:"2003"
      },
      {
        parkId:"50033", 
        loopName:"B", 
        siteId: "1582", 
        siteType:"2003"
      },
      {
        parkId:"50034", 
        loopName:"C", 
        siteId: "1582", 
        siteType:"2003"
      }
      ),

    ])
  }),

  Reservations.remove({}).then(function () {
    return Promise.all([

      Reservations.insert(
      {
        facilityName:"ASPEN GLEN"
        arrivalDate:'02/01/2016', 
        lengthOfStay:4, 
        parkId:"50032", 
        loopName:"B", 
        siteId:"1582", 
        siteType:"2003", 
        camperId:"123456123456123456123454"
      },
      {
        facilityName:"GLACIER BASIN"
        arrivalDate:'01/01/2016', 
        lengthOfStay:3, 
        parkId:"50032", 
        loopName:"B", 
        siteId:"1582", 
        siteType:"2003", 
        camperId:"123456123456123456123453"
      },
      { 
        facilityName:"MORRAINE PARK"
        arrivalDate:'12/01/2015', 
        lengthOfStay:1, 
        parkId:"50032", 
        loopName:"B", 
        siteId:"1582", 
        siteType:"2003", 
        camperId:"123456123456123456123452"
      },
      { 
        facilityName:"MORRAINE PARK"
        arrivalDate:'11/01/2015', 
        lengthOfStay:2, 
        parkId:"50032", 
        loopName:"B", 
        siteId:"1582", 
        siteType:"2003", 
        camperId:"123456123456123456123451"
      }
      )
    ])
  }),
]).then(function () {
  db.close()
})
