var db = require('monk')('localhost/camphost-db');
var Campgrounds = db.get('campground');
var Sites = db.get('site');
var Reservations = db.get('reservation')
var Campers = db.get('camper');
var routes = require("../routes");


var helper = {

	register: function(){
		////
	//redirect and render need to go back in routes
	//what about if and else?????
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
		////
	},


	login: function(){		
		/////
	//redirect and render need to go back in routes	
	//what about if and else?????
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
		/////
	},

	dash: function(){
		/////
		Reservations.find({}, function (err, reservations){})
		/////
	},

	parseLatLng: function(response){
		/////
		var campgroundsXML = response.body
		var data = []
		parseString(campgroundsXML, function (err, result) {

		    result.resultset.result.map(function(r){
		      var lng = Number(r['$'].longitude)
		      var lat = Number(r['$'].latitude)
		      console.log((r['$']))
		      data.push( { lat: lat, lng: lng } )
		    });
		});
		/////
	},

	findCampgrounds: function(){
		///
		// Campgrounds.find({}, function (err, campgrounds){});
		return Campgrounds.find({})
		///
	},

	findSites: function(){
		/////
		// Sites.find({}, function (err, sites) {});
		return Sites.find({});
		/////
	},

	findOneSite: function(){
		// Sites.findOne({_id: req.params.id}, function (err, sites){})
		return Sites.findOne({_id: req.params.id})
	}











	
	

}



// //in lib
// var libObj = {
//   get: function(url){
//    return new Promise(function(resolve){
//      console.log('camphostDB.find',url, 'is available');
//       resolve(url)
//    })
//   }
// };

// //in route
// //var getLibObj = require('/lib/filename');

// libObj.get('http://example.com').then(function(valOfTheResultOfThePromise){
//   console.log('do this now')
//   console.log(valOfTheResultOfThePromise);
// })

//Make sure to require:
//var db = require('monk')('localhost/camphost-db');
// var Campgrounds = db.get('campground');
// var Sites = db.get('site');
// var Reservations = db.get('reservation')
// var Campers = db.get('camper');

// //Build object with methods in lib folder first
// //then test by calling from routes file
// //later , you will have to figure out how to call these methods from your jade forms


