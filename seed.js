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
                    max: 99
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
            monies: 1337,
            iam: ['outgoing','optimistic','hardworking'],
            ilike: ['hanging out with friends for dinner','karaoke','going to the gym or playing tennis',
            'cooking and enjoying what life throws at me','making others laugh'],
            iappreciate: ['has a sense of humor','knows how to work hard and have fun']

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
            monies: 1337,
            iam: ['fun', 'easy-going', 'adventurous'],
            ilike: ['wine','coffee','pinkberry','traveling','outdoor activities','staying active'],
            iappreciate: ['is thoughtful','smart','funny']

        },
        {
            email: 'testing2@fsa.com',
            password: 'password2',
            name: 'Baby Gap',
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
            photos: ['http://sandhosting.net/my/newedge/facebook-profile-pics-for-male-i17.jpg'],
            age: 30,
            location: 10025,
            height: {
                feet: 5,
                inches: 10
            },
            ethnicity: 'Asian',
            religion: 'Not spiritual',
            occupation: 'Designer',
            languages: ['Korean'],
            personalwork: ['https://naver.com/'],
            monies: 1337,
            iam: ['optimistic','a go getter','fun'],
            ilike: ['food','yoga','a good convo'],
            iappreciate: ['takes the initiative','is funny']

        },
        {
            email: 'testing3@gmail.com',
            password: 'potus',
            name: 'Grace Hopper',
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
            age: 89,
            location: 'Long Island City, New York',
            height: {
                feet: 5,
                inches: 6
            },
            ethnicity: 'White',
            religion: 'Not spiritual',
            occupation: 'Developer',
            languages: ['English'],
            personalwork: ['https://github.com/'],
            monies: 1337,
            iam: ['shy at first', 'serious but can be silly', 'i love trying new cuisines and restaurants'],
            ilike: ['trying out new restaurants in the city','enjoying the company of friends over a nice dinner','exploring the city'],
            iappreciate: ['is willing to try something new with me','can laugh at my jokes','can engage in conversation']

        },
        {
            email: 'testing4@gmail.com',
            password: 'potus',
            name: 'Alana Turing',
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
            age: 77,
            location: 'New York, New York',
            height: {
                feet: 5,
                inches: 10
            },
            ethnicity: 'White',
            religion: 'Not spiritual',
            occupation: 'Developer',
            languages: ['English'],
            personalwork: ['https://github.com/'],
            monies: 1337,
            iam: ['an excellent listener', 'easily amused', 'quick to laugh'],
            ilike: ['baking pastries from scratch','exploring coffee shops all over the city','playing the ukulele'],
            iappreciate: ['remembers the little things']

        },
        {
            email: 'testing5@gmail.com',
            password: 'potus',
            name: 'Scarlett Johansson',
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
            age: 30,
            location: 'New York, New York',
            height: {
                feet: 5,
                inches: 3
            },
            ethnicity: 'White',
            religion: 'Not spiritual',
            occupation: 'Developer',
            languages: ['English'],
            personalwork: ['https://github.com/'],
            monies: 1337,
            iam: ['willing to try new things and meet new people','easy going and fun to be around','passionate about teaching children'],
            ilike: ['to spend quality time with friends and family','to travel when opportunity arises'],
            iappreciate: ['can laugh about himself','enjoys food with me!']

        },
        {
            email: 'testing6gmail.com',
            password: 'potus',
            name: 'Ariana Grande',
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
            age: 22,
            location: 'New York, New York',
            height: {
                feet: 5,
                inches: 0
            },
            ethnicity: 'White',
            religion: 'Not spiritual',
            occupation: 'Developer',
            languages: ['English'],
            personalwork: ['https://github.com/'],
            monies: 1337,
            iam: ['adventurous', 'kind', 'silly'],
            ilike: ['live music','grabbing drinks with friends','exploring and trying new things'],
            iappreciate: ['suggests ideas for things to do','is dependable','has a goofy sense of humor']

        },
        {
            email: 'testing7@gmail.com',
            password: 'potus',
            name: 'Miranda Kerr',
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
            age: 32,
            location: 'New York, New York',
            height: {
                feet: 5,
                inches: 9
            },
            ethnicity: 'White',
            religion: 'Not spiritual',
            occupation: 'Developer',
            languages: ['English'],
            personalwork: ['https://github.com/'],
            monies: 1337,
            iam: ['chill and outgoing'],
            ilike: ['good people'],
            iappreciate: ['is a good person']

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
