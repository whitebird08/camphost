var db = require('monk')('localhost/camphost-db');
var Campgrounds = db.get('campground');
var Sites = db.get('site');
var Reservations = db.get('reservation')
var Campers = db.get('camper');
var routes = require("../routes");
var bcrypt = require('bcrypt');

var helper = {

	register: function(req, res, next){
		////
	//redirect and render need to go back in routes
	//what about if and else?????
		return new Promise (function(resolved){

			var hash = bcrypt.hashSync(req.body.password, 8)
			Campers.findOne({email:req.body.email}).then(function(camper){
			  if (camper === ''){
			    res.render('campers/register', {error: 'Email / Password cannot be blank'})
			  //replace^^ with result and mv render to route
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
		////
	},


	login: function(req, res, next){		
		/////
	//redirect and render need to go back in routes	
	//what about if and else?????
		// return new Promise (function(resolved){	
		// 	Campers.findOne({email:req.body.email}).then(function(camper){
		// 	  if (camper) {  
		// 	    if (bcrypt.compareSync(req.body.password, camper.password)){
		// 	      req.session.camper = camper
		// 	      res.redirect('/campers/dash')
		// 	    } else {
		// 	      res.render('campers/login', {title: 'Camper Login' , error: 'Invalid Email/Password'})
		// 	    }
		// 	  }
		// 	})
		// })
		/////
	},

	dash: function(req, res, next){
		/////
		return new Promise(function(resolved){
			Reservations.find({}, function (err, reservations){
			  res.render('campers/dash', { title: 'Camper Dashboard', allReservations: reservations 
			  });
			})
		})
		/////
	},

	parseLatLng: function(response){
		/////
		return new Promise(function(resolved){
			  //   var campgroundsXML = response.body
			  //   var data = []
			  //   parseString(campgroundsXML, function (err, result) {

			  //       result.resultset.result.map(function(r){
			  //         var lng = Number(r['$'].longitude)
			  //         var lat = Number(r['$'].latitude)
			  //         console.log((r['$']))
			  //         data.push( { lat: lat, lng: lng } )
			  //       });
			  //   });

			  //   console.log(data)
			  //   res.json(data);
			  // });  
		})
		/////
	},

	findCampgrounds: function(req, res, next){
		///
		return new Promise(function(resolved){	
			Campgrounds.find({}, function (err, campgrounds){
				res.render('campgrounds/cgsAll', { title: 'All Campgrounds', allCampgrounds: campgrounds 
			});
			})
		})
		///
	},

	findSites: function(req, res, next){
		/////
		return new Promise(function(resolved){
			Sites.find({}, function (err, sites) {
    			res.render('campgrounds/cg', { title: 'Campground Name Here', allSites: sites
				});
			})
		
		})
		/////
	},

	findOneSite: function(req, res, next){
		return new Promise(function(resolved){
			Sites.findOne({_id: req.params.id}, function (err, sites){
				res.render('campgrounds/site', { title: 'Site Number', thisSite: sites 
				});
			})
		})
	}


}

module.exports = helper
