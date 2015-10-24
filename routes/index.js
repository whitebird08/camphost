var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Camp Host' });
});

router.get('/campgrounds/cgsAll', function(req, res, next) {
  res.render('campgrounds/cgsAll', { title: 'All Campgrounds' });
});

router.get('/campgrounds/cg', function(req, res, next) {
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

// router.post('/heroes/signup', function(req, res, next){
//   var hash = bcrypt.hashSync(req.body.password, 8)
//   Hero.findOne({email:req.body.email}).then(function(hero){
//     if (hero === ''){
//       res.render('heroes/signup', {error: 'Email / Password cannot be blank'})
//     }
//     if (hero){
//       res.render('heroes/signup', {error: 'Invalid Email/Password'})
//     } else {
//       Hero.insert({email:req.body.email, password:hash}).then(function(hero){
//         res.redirect('/heroes/signin')
//       })
//     }
//   })

// })

// router.post('/heroes/signin', function(req, res,next){
//        console.log('MMMMMMMMMMMMMMMMMMMMMMM')
//   Hero.findOne({email:req.body.email}).then(function(hero){
//     if (hero) {  
//       if (bcrypt.compareSync(req.body.password, hero.password)){
//         req.session.hero = hero
//          console.log('YYYYYYYYYYYYYYYYYYYYYYY')
//         res.redirect('/heroes/dash')
//       } else {
//         res.render('heroes/signin', {error: 'Invalid Email/Password'})
//       }
//     }
//   })
// })

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




module.exports = router;
