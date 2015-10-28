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
var joinCamperToReservation;
var joinSiteToReservation;
var makeReservation;

function makeReservation()


//////////////////////////////
//dbq's from/to routes

function(req, res, next) {
  Campgrounds.find({}, function (err, campgrounds){
    res.render('campgrounds/cgsAll', { title: 'All Campgrounds', allCampgrounds: campgrounds 
    });
  });
}

function(req, res, next) {
  Sites.find({}, function (err, sites) {
    res.render('campgrounds/cg', { title: 'Campground Name Here', allSites: sites
    });
  });
}

function(req, res, next) {
  Sites.findOne({_id: req.params.id}, function (err, sites){
  res.render('campgrounds/site', { title: 'Site Number', thisSite: sites });
  })
}

function(req, res, next) {
  res.render('campers/register', { title: 'Camper Registration' });
}

function(req, res, next){
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

}

function(req, res,next){
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
}

function(req, res, next) {
  res.render('campers/login', { title: 'Camper Login' });
}

function(req, res, next) {
  Reservations.find({}, function (err, reservations){
  // Reservations.find({ camperId: { $in: req.params} }, function (err, reservations){  
    res.render('campers/dash', { title: 'Camper Dashboard', allReservations: reservations 
    });
  })
}

function(req, res, next) {
  Sites.findOne({_id: req.params.id}, function (err, sites){
  res.render('reservations/index', { title: 'Make A Reservation', thisSite: sites });
  });
}

function(req, res, next){
  // var facilityName = req.body.facilityName; ?????
  Reservations.insert(req.params, {
    "facilityName" : req.body.facilityName,
    "arrivalDate" : req.body.arrivalDate,
    "lengthOfStay" : req.body.lengthOfStay,
    "parkId" : req.body.parkId,
    "loopName" : req.body.loopName,
    "siteId" : req.body.siteId,
    "siteType" : req.body.siteType,
    "camperId" : req.body.camperId
  });
  res.redirect('/campers/dash')
}

// router.post('/reservations/logout', function(req, res, next){
//   res.redirect('/index')
// })



module.export functions