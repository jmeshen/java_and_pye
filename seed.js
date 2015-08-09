/*

This seed file is only a placeholder. It should be expanded and altered
to fit the development of your application.

It uses the same file the server uses to establish
the database connection:
--- server/db/index.js

The name of the database used is set in your environment files:
--- server/env/*

This seed file has a safety check to see if you already have users
in the database. If you are developing multiple applications with the
fsg scaffolding, keep in mind that fsg always uses the same database
name in the environment files.

*/

var mongoose = require('mongoose');
var Promise = require('bluebird');
var chalk = require('chalk');
var connectToDb = require('./server/db');
var User = Promise.promisifyAll(mongoose.model('User'));

var seedUsers = function () {

    var users = [
        {
            email: 'testing@fsa.com',
            password: 'password',
            name: 'Calvin Klein',
            gender: 'Male',
            lookingfor: {
                gender: 'Female',
                age: {
                    min: 21,
                    max: 28
                },
                ethnicity: ['White'],
                religion: 'Not spiritual'

            },
            photos: ['http://sandhosting.net/my/newedge/facebook-profile-pics-for-male-i17.jpg'],
            age: 23,
            location: 10025,
            height: {
                feet: 5,
                inches: 10
            },
            ethnicity: 'White',
            religion: 'Not spiritual',
            occupation: 'Designer',
            languages: ['English'],
            personalwork: ['https://github.com/'],
            monies: 1337
        },
        {
            email: 'obama@gmail.com',
            password: 'potus',
            name: 'Victoria Secret',
            gender: 'Female',
            lookingfor: {
                gender: 'Male',
                age: {
                    min: 21,
                    max: 28
                },
                ethnicity: ['White'],
                religion: 'Not spiritual'

            },
            photos: ['http://alisfashions.com/wp-content/uploads/2015/05/girl-picture-for-facebook-profile-wtf85cwh.jpg'],
            age: 23,
            location: 10018,
            height: {
                feet: 5,
                inches: 2
            },
            ethnicity: 'White',
            religion: 'Not spiritual',
            occupation: 'Developer',
            languages: ['English'],
            personalwork: ['https://github.com/'],
            monies: 1337
        },
        {
            email: 'testing2@fsa.com',
            password: 'password2',
            name: 'Baby Gap',
            gender: 'Male',
            lookingfor: {
                gender: 'Female',
                age: {
                    min: 21,
                    max: 28
                },
                ethnicity: ['White'],
                religion: 'Not spiritual'

            },
            photos: ['http://sandhosting.net/my/newedge/facebook-profile-pics-for-male-i17.jpg'],
            age: 30,
            location: 10025,
            height: {
                feet: 5,
                inches: 10
            },
            ethnicity: 'Asian',
            religion: 'Christian',
            occupation: 'Designer',
            languages: ['Korean'],
            personalwork: ['https://naver.com/'],
            monies: 1337
        }
    ];

    return User.createAsync(users);

};

connectToDb.then(function () {
    User.findAsync({}).then(function (users) {
        if (users.length === 0) {
            return seedUsers();
        } else {
            console.log(chalk.magenta('Seems to already be user data, exiting!'));
            process.kill(0);
        }
    }).then(function () {
        console.log(chalk.green('Seed successful!'));
        process.kill(0);
    }).catch(function (err) {
        console.error(err);
        process.kill(1);
    });
});
