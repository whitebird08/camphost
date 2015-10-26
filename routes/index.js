var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/camphost-db');
var Campgrounds = db.get('campground');
var Sites = db.get('site');
var Reservations = db.get('reservation')
var Campers = db.get('camper');

var bcrypt = require('bcrypt');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Camp Host' });
});

router.get('/campgrounds/cgsAll', function(req, res, next) {
  res.render('campgrounds/cgsAll', { title: 'All Campgrounds' });
});

router.get('/campgrounds/cg', function(req, res, next) {
  // return campgroundApi();
  res.render('campgrounds/cg', { title: 'Campground Name Here' });
});

router.get('/campgrounds/sitesAll', function(req, res, next) {
  res.render('campgrounds/sitesAll', { title: 'All Sites For This Campground' });
});

router.get('/campgrounds/site', function(req, res, next) {
  res.render('campgrounds/site', { title: 'Site Number' });
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
  res.render('campers/dash', { title: 'Camper Dashboard' });
});

router.get('/reservations/index', function(req, res, next) {
  res.render('reservations/index', { title: 'Make A Reservation' });
});

router.post('/reservations/index', function(req, res, next){

  res.redirect('/campers/dash')
})

// router.post('/reservations/logout', function(req, res, next){
//   res.redirect('/index')
// })



module.exports = router;
