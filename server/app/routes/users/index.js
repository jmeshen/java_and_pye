'use strict';
var router = require('express').Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var _ = require('lodash');

module.exports = router;

//Gets users match of the day, sends back user data
router.get('/:id', function(req, res, next){
	console.log('inside the get for user', req.params.id)
	User.findOne({_id: req.params.id})
	// .populate('currentMatch')
	.exec()
	.then(function(user){
		console.log('got them users', user)
		res.send(user)
	})
	.then(next, null)
});


//Set arrayOfPotentialMatches using the info the user filters by
//and send back arrayOfPotentialMatches
router.put('/filtermatches/:id', function(req, res, next){
	User.findOne({_id: req.params.id})
	.exec()
	.then(function(user){
		var l = {
			gender: user.lookingfor.gender,
			min: user.lookingfor.age.min,
			max: user.lookingfor.age.max,
			ethnicity: user.lookingfor.ethnicity,
			religion: user.lookingfor.religion,
			distance: user.lookingfor.distance
		};

		console.log(l)

		User.find({$and: [ {'gender': l.gender}, {'age': {$gte: l.min, $lte: l.max}},
			{'ethnicity': l.ethnicity}, {'religion': l.religion} ]})
		.exec()
		.then(function(users){
			console.log(users);

			user.arrayofPotentialMatches = users;
			user.save(next);
			//save users to arrayofpotentialmatches here
			//send back the arrayofpotentialmatches to
			//go into selecting one and displaying a random 6 of the rest
			res.send(users)
		})


	})
	.then(null, next)
});

//update when a person pushes like or pass
router.put('/:likeorpass/status/:id', function(req,res,next){
	var likeorpass = req.params.likeorpass;
	var id = req.params.id;
	User.findOne({_id: id})
	.exec()
	.then(function(user){
		user.history.push(req.body.matchId);
		if(likeorpass === 'like'){
			user.likes.push(req.body.matchId);
		} else {
			user.passes.push(req.body.matchId);
		}

		user.save(next);

	})
	.then(next, null);
})



// creates new user
router.post('/', function(req, res, next){
	User.create(req.body)
	.then(function(user){
		console.log('user has been created!', user)
		res.send({message: 'user saved!'})
	})
	.then(null, next)
});

