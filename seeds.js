var db = require('monk')('localhost/camphost-db');
var Campgrounds = db.get('campground');
var Sites = db.get('site');
var Reservations = db.get('reservation')
var Campers = db.get('camper');

// campground = facilityName, parkId, landmarkName, landmarkLat, landmarkLong, detailDescription
var morraineParkId = Campgrounds.id()
var glacierBasinId = Campgrounds.id()
var aspenGlenId = Campgrounds.id()

// site = parkId, loopName, siteNum, siteType
var siteId01 = Sites.id()
var siteId02 = Sites.id()
var siteId03 = Sites.id()

// reservation = resId, arrivalDate, lengthOfStay, parkId, loopName, siteNum, siteType, camperId
var reservationId01 = Reservations.id()
var reservationId02 = Reservations.id()
var reservationId03 = Reservations.id()

// camper =  camperId, email, password
var joeId = Campers.id()
var sueId = Campers.id()
var timId = Campers.id()
var kimId = Campers.id()
console.log('starting')

Promise.all([
  Campers.remove().then(function () {
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

  // campground = facilityName, parkId, landmarkName, landmarkLat, landmarkLong, detailDescription
  Campgrounds.remove().then(function () {
    return Promise.all([
      Campgrounds.insert({
        parkId:"50032",
        facilityName:"MORRAINE PARK",
        facilityId:"190306", 
        landmarkName:true, 
        landmarkLat:39.4135, 
        landmarkLong:-106.4888889
      }),

      Campgrounds.insert({
        parkId:"50033",
        facilityName:"GLACIER BASIN",
        facilityId:"190307", 
        landmarkName:true, 
        landmarkLat:39.82035, 
        landmarkLong:-106.4888889
      }),
      Campgrounds.insert({
        parkId:"50034",
        facilityName:"ASPEN GLEN",
        facilityId:"190308", 
        landmarkName:true, 
        landmarkLat:39.83035, 
        landmarkLong:-106.4888889
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
      }),
      Sites.insert({
        parkId:"50033", 
        loopName:"B", 
        siteId: "1582", 
        siteType:"2003"
      }),
      Sites.insert({
        parkId:"50034", 
        loopName:"C", 
        siteId: "1582", 
        siteType:"2003"
      }),
    ])
  }),

  Reservations.remove({}).then(function () {
    return Promise.all([
      Reservations.insert({
        facilityName:"ASPEN GLEN",
        arrivalDate:'02/01/2016', 
        lengthOfStay:4, 
        parkId:"50032", 
        loopName:"B", 
        siteId:"1582", 
        siteType:"2003", 
        camperId:"123456123456123456123454"
      }),
      Reservations.insert({
        facilityName:"GLACIER BASIN",
        arrivalDate:'01/01/2016', 
        lengthOfStay:3, 
        parkId:"50032", 
        loopName:"B", 
        siteId:"1582", 
        siteType:"2003", 
        camperId:"123456123456123456123453"
      }),
      Reservations.insert({
        facilityName:"MORRAINE PARK",
        arrivalDate:'12/01/2015', 
        lengthOfStay:1, 
        parkId:"50032", 
        loopName:"B", 
        siteId:"1582", 
        siteType:"2003", 
        camperId:"123456123456123456123452"
      }),
      Reservations.insert({
        facilityName:"MORRAINE PARK",
        arrivalDate:'11/01/2015', 
        lengthOfStay:2, 
        parkId:"50032", 
        loopName:"B", 
        siteId:"1582", 
        siteType:"2003", 
        camperId:"123456123456123456123451"
      })
    ])
  }),
]).then(function () {
  console.log("HERE")
  db.close()
})
