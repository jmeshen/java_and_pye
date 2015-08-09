'use strict';
var path = require('path');
var express = require('express');
var app = express();
module.exports = app;

var braintree = require("braintree");

var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "278tfgpqn4wxzndf",
  publicKey: "zpxt7djv962s9x4d",
  privateKey: "e9f5c5577e550911d427dc9f285e42ca"
});

// Pass our express application pipeline into the configuration
// function located at server/app/configure/index.js
require('./configure')(app);

// Routes that will be accessed via AJAX should be prepended with
// /api so they are isolated from our GET /* wildcard.
app.use('/api', require('./routes'));


/*
 This middleware will catch any URLs resembling a file extension
 for example: .js, .html, .css
 This allows for proper 404s instead of the wildcard '/*' catching
 URLs that bypass express.static because the given file does not exist.
 */
app.use(function (req, res, next) {

    if (path.extname(req.path).length > 0) {
        res.status(404).end();
    } else {
        next(null);
    }

});

app.get("/client_token", function (req, res) {
  gateway.clientToken.generate({}, function (err, response) {
    res.send(response.clientToken);
  });
});

app.post("/checkout", function (req, res) {
  var nonce = req.body.payment_method_nonce;
  console.log(req.body)
  // Use payment method nonce here
  	gateway.transaction.sale({
  	amount: '25.00',
  	paymentMethodNonce: nonce
	}, function (err, result) {
		if(err) return "Error"
		console.log(result.transaction.amount, 'in the post');

	});

});


app.get('/*', function (req, res) {
    res.sendFile(app.get('indexHTMLPath'));
});

// Error catching endware.
app.use(function (err, req, res, next) {
    console.error(err, typeof next);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
});
