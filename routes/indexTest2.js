var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/camphost-db');
var Campgrounds = db.get('campground');
var Sites = db.get('site');
var Reservations = db.get('reservation')
var Campers = db.get('camper');
var unirest = require('unirest');
var parseString = require('xml2js').parseString;
var helper = require("../lib/helper.js");

router.get('/campers/register', function(req, res, next) {
  res.render('campers/register', { title: 'Camper Registration' });
});

router.post('/campers/register', function(req, res, next){
  helper.register(req, res, next).then(function(result){
    return result
  })
})

router.get('/campers/login', function(req, res, next) {
  res.render('campers/login', { title: 'Camper Login' });
});
//invalid pw message not working
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


var bcrypt = require('bcrypt');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Camp Host' });
});

router.get('/parse', function(req, res, next) {
  helper.parseLatLng(req, res, next).then(function(result){
    return result
  })

  // unirest.get( "http://api.amp.active.com/camping/campsites?contractCode=CO&parkId=50032&eqplen=50&api_key=6x8gz7qm68nwaj9ckzg3z5yg")
  unirest.get( "http://api.amp.active.com/camping/campgrounds?pstate=CO&api_key=6x8gz7qm68nwaj9ckzg3z5yg")
  // unirest.get( "http://api.amp.active.com/camping/campgrounds?pname=ASPEN&api_key=6x8gz7qm68nwaj9ckzg3z5yg")
    .end(function (response) {
      var campgroundsXML = response.body
      var data = []
      var parkID = 0;
      parseString(campgroundsXML, function (err, result) {

          result.resultset.result.map(function(r){
            var lng = Number(r['$'].longitude)
            var lat = Number(r['$'].latitude)
            parkID = Number(r['$'].facilityID)
            console.log((r['$']))
            data.push( { lat: lat, lng: lng } )
          });
      });

      unirest.get( "http://api.amp.active.com/camping/campsites?contractCode=CO&parkId=" + parkID + "&eqplen=50&api_key=6x8gz7qm68nwaj9ckzg3z5yg")
      // unirest.get( "http://api.amp.active.com/camping/campgrounds?pstate=CO&api_key=6x8gz7qm68nwaj9ckzg3z5yg")
      // unirest.get( "http://api.amp.active.com/camping/campgrounds?pname=ASPEN&api_key=6x8gz7qm68nwaj9ckzg3z5yg")
      .end(function (response) {
        var campsitesXML = response.body
        var data = []
        parseString(campsitesXML, function (err, result) {        
              // console.log(result, "THIS IS IT!!!!!!!!!!!!!!!!!")
              // data.push( { campgroundName = parkId } )
        });
      // console.log(data) 
      // res.json(data);
    });
      // console.log(data) 
      res.json(data);
    });
  
});

router.get('/campgrounds/cgsAll', function(req, res, next) {
  helper.findCampgrounds(req, res, next).then(function(result){
    return result
  });
});

router.get('/campgrounds/cg/:id', function(req, res, next) {
  helper.findSites(req, res, next).then(function(result){
    return result
  });
});

// router.get('/campgrounds/sitesAll', function(req, res, next) {
//   Sites.find({}, function (err, sites){
//   res.render('campgrounds/sitesAll', { title: 'All Sites For This Campground', allSites: sites });
//   })
// });
           
router.get('/campgrounds/site/:id', function(req, res, next) {
  helper.findOneSite(req, res, next).then(function(result){
    return result
  })
});

router.get('/campers/dash', function(req, res, next) {
  helper.dash(req, res, next).then(function(result){
    return result
  })
});

router.get('/reservations/index/:id', function(req, res, next) {
  Sites.findOne({_id: req.param.id}, function (err, sites){
  res.render('reservations/index', { title: 'Make A Reservation', thisSite: sites });
  });
});

router.post('/reservations/index', function(req, res, next){
  console.log(req.session.camper._id,"Session");
  console.log(req.headers.referer,'siteId');
  var header = req.headers.referer.split("/");
  req.body.siteId = header[header.length-1];
  req.body.camperId = req.session.camper._id;
  req.body.loopName = req.body.loopName;
  console.log(req.session, ".....req.session")
  req.body.campgroundId = req.session.campgroundId;
  Reservations.insert(req.body);   

  res.redirect('/campers/dash')
})

// router.post('/reservations/logout', function(req, res, next){
//   res.redirect('/index')
// })


module.exports = router;
