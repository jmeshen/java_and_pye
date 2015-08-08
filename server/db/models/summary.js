'use strict';
var crypto = require('crypto');
var mongoose = require('mongoose');

var schema = new mongoose.Schema({

    iam: [String],
    ilike: [String],
    iappreciate: [String]

});



mongoose.model('Summary', schema);