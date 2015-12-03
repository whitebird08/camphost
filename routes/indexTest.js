// var express = require('express');
// var router = express.Router();
// var db = require('monk')('localhost/camphost-db');
// var Campgrounds = db.get('campground');
// var Sites = db.get('site');
// var Reservations = db.get('reservation')
// var Campers = db.get('camper');
// var unirest = require('unirest');
// var parseString = require('xml2js').parseString;
// var helpers = require("../lib/helper.js");


// var bcrypt = require('bcrypt');

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Camp Host' });
// });

// router.get('/parse', function(req, res, next) {

//   unirest.get( "http://api.amp.active.com/camping/campgrounds?pname=ASPEN&api_key=6x8gz7qm68nwaj9ckzg3z5yg")
//   .end(function (response) {
//     	//helper.parseLatLng().then(function(result){})
//     res.json(data);
//   });  
// });


// router.get('/campgrounds/cgsAll', function(req, res, next) {
//     //helper.findCampgrounds().then(function(result){
//     res.render('campgrounds/cgsAll', { title: 'All Campgrounds', allCampgrounds: campgrounds 
//     });
//   // })
// });

// router.get('/campgrounds/cg/:id', function(req, res, next) {
//   //helper.findSites().then(function(result){
//     res.render('campgrounds/cg', { title: 'Campground Name Here', allSites: sites//is this result instead of sites
//     });
//   // })
  
// });

// // router.get('/campgrounds/sitesAll', function(req, res, next) {
// //   Sites.find({}, function (err, sites){
// //   res.render('campgrounds/sitesAll', { title: 'All Sites For This Campground', allSites: sites });
// //   })
// // });
           
// router.get('/campgrounds/site/:id', function(req, res, next) {
//  //helper.findOneSite().then(function(result){
//   res.render('campgrounds/site', { title: 'Site Number', thisSite: sites });
//  // })
// });

// router.get('/campers/register', function(req, res, next) {
//   res.render('campers/register', { title: 'Camper Registration' });
// });

// router.post('/campers/register', function(req, res, next){
// 	//helper.register().then(function(result){})
// })

// router.post('/campers/login', function(req, res,next){
//   	//helper.login().then(function(result){})
// })


// router.get('/campers/login', function(req, res, next) {
//   res.render('campers/login', { title: 'Camper Login' });
// });

// router.get('/campers/dash', function(req, res, next) {
//    //helper.findSites().then(function(result){
//     res.render('campers/dash', { title: 'Camper Dashboard', allReservations: reservations 
//     });
//   //})
// });

// router.get('/reservations/index', function(req, res, next) {
// 	//helper.findOneSite().then(function(result){
//  //using same promise as site/:id
//   res.render('reservations/index', { title: 'Make A Reservation', thisSite: sites });
//   // })
// });

// router.post('/reservations/index', function(req, res, next){
//   joinCamperReservation();
//   Reservations.insert(req.params, {
//     "facilityName" : reservation.campground.facilityName,
//     "arrivalDate" : reservation.campground.arrivalDate,
//     "lengthOfStay" : reservation.campground.lengthOfStay,
//     "parkId" : reservation.site.parkId,
//     "loopName" : reservation.site.loopName,
//     "siteId" : reservation.site.siteId,
//     "siteType" : reservation.site.siteType,
//     "camperId" : reservation.camper.camperId
//   });
//   res.redirect('/campers/dash')
// })

// // router.post('/reservations/logout', function(req, res, next){
// //   res.redirect('/index')
// // })



// module.exports = router;
