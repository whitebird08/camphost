var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/camphost-db');
var Campgrounds = db.get('campground');
var Sites = db.get('site');
var Reservations = db.get('reservation')
var Campers = db.get('camper');
var dbqFunctions = require("../lib/dbq.js");
var unirest = require('unirest');
// var xmlToJSON = require('xmlToJSON');


// {
//   joinReservationSites: [function]
// }

// var tmp = dbqFunctions.joinReservationSites(['res1', 'res2'], ['site1', 'site2']);
// console.log(tmp)

//var Dbq = require ('./lib/dbq_functions.js')

var bcrypt = require('bcrypt');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Camp Host' });
});
////
router.get('/campgrounds/cgsAll', function(req, res, next) {
  console.log('ZZZZZZZZZZZZZZZ')
  unirest.get( "http://api.amp.active.com/camping/campgrounds?pname=ASPEN&api_key=6x8gz7qm68nwaj9ckzg3z5yg")
  .end(function (response) {
    // console.log(response.body, 'is response.body')
    var campgrounds = response.body

    //loop thru response.body and get lat&lng, create coords obj with lat&lng, push coords object to testArray in maps2

    var coordsArray = [];
    var output = [];
        var splitTest = response.body.split(' ')
        // console.log(splitTest)
        for(var i=0; i<splitTest.length; i++){
          if(splitTest[i].substring(0,8) === 'latitude'){
          // console.log(splitTest[i].substring(10,20), 'is what we are looking at')
          var latValue =  splitTest[i].substring(10,20)
          output.push(latValue)
          }
          if(splitTest[i].substring(0,9) === 'longitude'){
          // console.log(splitTest[i].substring(11,23), 'we are looking for longitude ')
          var longValue =  splitTest[i].substring(11,23)
          output.push(longValue)
          }
        }

        // for(var i=0; i<splitTest.length; i++){
        //   if(splitTest[i].substring(0,9) === 'longitude'){
        //   console.log(splitTest[i].substring(11,23), 'we are looking for longitude ')
        //   var longValue =  splitTest[i].substring(11,23)
        //   output.push(longValue)
        //   }
        // }
        console.log(output, 'is output....')

        // coordsArray = [];
        // var latSubstring = response.body.slice(response.body.indexOf('latitude'))
        // // console.log(latSubstring)
        // var latValue = latSubstring.substring(10, 20)
        // // console.log(latValue, 'LLLLLLLLLLLLLLLLLATTTTT')

        // var longSubstring = response.body.slice(response.body.indexOf('longitude'))
        // // console.log(longSubstring)
        // var longValue = longSubstring.substring(11, 23)
        // // console.log(longValue, 'LLLLLLLLLLLLLLLLLONGGGGG')

        // var coords = {lat:latValue, lng:longValue}
        // console.log('coords object = ',coords)
        // coordsArray.push(coords)
        // console.log('coordsArray = ', coordsArray)
    
      


    // var latSubstring = response.body.slice(response.body.indexOf('latitude'))
    // console.log(latSubstring)
    // var latValue = latSubstring.substring(10, 20)
    // console.log(latValue, 'LLLLLLLLLLLLLLLLLATTTTT')

    // var longSubstring = response.body.slice(response.body.indexOf('longitude'))
    // // console.log(longSubstring)
    // var longValue = longSubstring.substring(11, 23)
    // console.log(longValue, 'LLLLLLLLLLLLLLLLLONGGGGG')

    res.render('campgrounds/cgsAll', { title: 'All Campgrounds', campgrounds:campgrounds
    });
  });
});

/////

// router.get('/campgrounds/cgsAll', function(req, res, next) {
//   Campgrounds.find({}, function (err, campgrounds){   
//     res.render('campgrounds/cgsAll', { title: 'All Campgrounds', allCampgrounds: campgrounds 
//     });
//   });
// });

router.get('/campgrounds/cg/:id', function(req, res, next) {
  Sites.find({}, function (err, sites) {
    res.render('campgrounds/cg', { title: 'Campground Name Here', allSites: sites
    });
  });
});

// router.get('/campgrounds/sitesAll', function(req, res, next) {
//   Sites.find({}, function (err, sites){
//   res.render('campgrounds/sitesAll', { title: 'All Sites For This Campground', allSites: sites });
//   })
// });
           
router.get('/campgrounds/site/:id', function(req, res, next) {
  Sites.findOne({_id: req.params.id}, function (err, sites){
  res.render('campgrounds/site', { title: 'Site Number', thisSite: sites });
  })
});

router.get('/campers/register', function(req, res, next) {
  res.render('campers/register', { title: 'Camper Registration' });
});

router.post('/campers/register', function(req, res, next){
  var hash = bcrypt.hashSync(req.body.password, 8)
  Campers.findOne({email:req.body.email}).then(function(camper){
    if (camper === ''){
      res.render('campers/register', {error: 'Email / Password cannot be blank'})
    }
    if (camper){
      res.render('campers/register', {title: 'Camper Registration', error: 'Invalid Email/Password'})
    } else {
      Campers.insert({email:req.body.email, password:hash}).then(function(camper){
        res.redirect('/campers/login')
      })
    }
  })

})

router.post('/campers/login', function(req, res,next){
  Campers.findOne({email:req.body.email}).then(function(camper){
    if (camper) {  
      if (bcrypt.compareSync(req.body.password, camper.password)){
        req.session.camper = camper
        res.redirect('/campers/dash')
      } else {
        res.render('campers/login', {title: 'Camper Login' , error: 'Invalid Email/Password'})
      }
    }
  })
})

router.get('/campers/login', function(req, res, next) {
  res.render('campers/login', { title: 'Camper Login' });
});

router.get('/campers/dash', function(req, res, next) {
  Reservations.find({}, function (err, reservations){
  // Reservations.find({ camperId: { $in: req.params} }, function (err, reservations){  
    res.render('campers/dash', { title: 'Camper Dashboard', allReservations: reservations 
    });
  })
});

router.get('/reservations/index', function(req, res, next) {
  Sites.findOne({_id: req.params.id}, function (err, sites){
  res.render('reservations/index', { title: 'Make A Reservation', thisSite: sites });
  });
});

router.post('/reservations/index', function(req, res, next){
  joinCamperReservation();
  Reservations.insert(req.params, {
    "facilityName" : reservation.campground.facilityName,
    "arrivalDate" : reservation.campground.arrivalDate,
    "lengthOfStay" : reservation.campground.lengthOfStay,
    "parkId" : reservation.site.parkId,
    "loopName" : reservation.site.loopName,
    "siteId" : reservation.site.siteId,
    "siteType" : reservation.site.siteType,
    "camperId" : reservation.camper.camperId
  });
  res.redirect('/campers/dash')
})

// router.post('/reservations/logout', function(req, res, next){
//   res.redirect('/index')
// })



module.exports = router;
