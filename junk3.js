getCampground: function(){
  return Campgrounds.find({}, {facilityName: name})
}

getSite: function()

  








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