'use strict';
var crypto = require('crypto');
var mongoose = require('mongoose');
var _ = require('lodash');
var Q = require('q');

var schema = new mongoose.Schema({
    email: {
        type: String
    },
    password: {
        type: String
    },
    salt: {
        type: String
    },
    twitter: {
        id: String,
        username: String,
        token: String,
        tokenSecret: String
    },
    facebook: {
        id: String
    },
    google: {
        id: String
    },

    name: String,
    gender: String,
    lookingfor: {
        gender: String,
        age: {
            min: Number,
            max: Number
        },
        ethnicity: [String],
        religion: String,
        distance: Number

    },
    photos: [String],
    age: Number,
    location: String,
    height: {
        feet: Number,
        inches: Number
    },
    ethnicity: String,
    religion: String,
    occupation: String,
    languages: [String],
    personalwork: [String],
    currentMatch: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    arrayOfPotentialMatches: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    history: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    likes: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    connections: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    passes: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    monies: Number,
    iam: [String],
    ilike: [String],
    iappreciate: [String]


});

// generateSalt, encryptPassword and the pre 'save' and 'correctPassword' operations
// are all used for local authentication security.
var generateSalt = function () {
    return crypto.randomBytes(16).toString('base64');
};

var encryptPassword = function (plainText, salt) {
    var hash = crypto.createHash('sha1');
    hash.update(plainText);
    hash.update(salt);
    return hash.digest('hex');
};

schema.pre('save', function (next) {

    if (this.isModified('password')) {
        this.salt = this.constructor.generateSalt();
        this.password = this.constructor.encryptPassword(this.password, this.salt);
    }

    next();

});

schema.statics.generateSalt = generateSalt;
schema.statics.encryptPassword = encryptPassword;

schema.method('correctPassword', function (candidatePassword) {
    return encryptPassword(candidatePassword, this.salt) === this.password;
});



schema.method('matchOfTheDay', function(arrayOfPotentialMatches) {
    var randomPerson = Math.floor(Math.random * arrayOfPotentialMatches.length);
    return arrayOfPotentialMatches[randomPerson];
})




mongoose.model('User', schema);