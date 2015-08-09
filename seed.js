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
            location: 'New York, New York',
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
            name: 'Jessica Alba',
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
            photos: ['http://cdn.modernfarmer.com/wp-content/uploads/2014/10/Jessica-Alba-3.jpg','http://a1.files.biography.com/image/upload/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE4MDAzNDEwMzY0NDMzOTM0.jpg','http://rbk.h-cdn.co/assets/14/51/980x490/548fd16d22d83_-_rbk-jessica-alba-0414-1-s2.jpg','http://ucesy-sk.happyhair.sk/celebrity_img/alba3n308.jpg','http://www.imagozone.com/var/albums/filme/Machete/Jessica%20Alba%20009-308082642.jpg?m=1293569939'],
            age: 23,
            location: 'New York, New York',
            height: {
                feet: 5,
                inches: 7
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
            name: 'Beyonce',
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
            photos: ['http://img2-3.timeinc.net/people/i/2014/sandbox/news/140512/beyonce-600x450.jpg','http://www.etonline.com/photo/2014/09/24100953/200_beyonce_3_instagram_300.jpg','http://assets.rollingstone.com/assets/2014/article/beyonce-is-now-selling-drunk-in-love-emoji-t-shirts-20140610/15691/_original/1035x914-20140608-beyonce-1800-1402425050.jpg','http://cp91279.biography.com/1000509261001/1000509261001_2036548679001_Bio-Biography-Beyonce-SF.jpg','http://assets-s3.usmagazine.com/uploads/assets/articles/69517-beyonce-gender-equality-myth-beyonce-knowles-carter-essay/1389638094_beyonce-lg.jpg'],
            age: 30,
            location: 'New York, New York',
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
            photos: ['http://cecomhistorian.armylive.dodlive.mil/files/2012/03/28-hopper.jpg','https://www.floridamemory.com/fpc/prints/pr22151.jpg','http://gracehopperfilm.com/assets/img/DontaskpermissionGrace.jpg','http://images.mentalfloss.com/sites/default/files/styles/article_640x430/public/hopper-hero.jpg','http://reuther.wayne.edu/files/images/av2621_Hopper.preview.jpg'],
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
        photos: ['https://regmedia.co.uk/2012/06/21/alan_turing2.jpg','http://www.returnofkings.com/wp-content/uploads/2014/01/alan-turing.jpg','http://www.alanturing.net/turingimgs/rotatephotos/TAHC_Alan_Turing_3.jpg','https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg','http://ichef.bbci.co.uk/images/ic/496xn/p02ck8fl.jpg'],
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
            photos: ['http://www.hdwallpapers.in/walls/scarlett_johansson_2013-wide.jpg','http://photos.imageevent.com/afap/wallpapers/stars/scarlettjohansson//scarlett%20johansson%20--%208.jpg','http://www.albawaba.com/sites/default/files/im/Entertainment/Scarlett_Johansson8-5-2013.jpg','http://www.usmagazine.com/uploads/assets/articles/58517-scarlett-johnasson-my-go-to-holiday-makeup/1355506862_scarlett-johansson-zoom-02.jpg','http://artworkwallpaper.com/wp-content/uploads/2015/04/scarlett_johansson_104_wallpaper_screensavers.jpg'],
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
            photos: ['http://www.michigandaily.com/files/ArianaGrande.jpg','http://www.lovebscott.com/wp-content/uploads/2015/06/ariana_grande-wide.jpg','http://scalr-9465-us-east-1.s3.amazonaws.com/images/PHOTO_18268046.jpg', 'http://www.eonline.com/eol_images/Entire_Site/2014628/rs_634x871-140728201735-634.Ariana-Grande-Seventeen-Magazine-1.ms.072814.jpg', 'http://cos.h-cdn.co/assets/cm/14/25/53a0cca06778c_-_cos-01-ariana-grande-de-37429817.jpg'],
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
            photos: ['http://ris.fashion.telegraph.co.uk/RichImageService.svc/imagecontent/1/TMG10811028/m/Miranda_Kerr_2902539a.jpg','http://celebzer.com/wp-content/uploads/2015/04/miranda-kerr-instagram.jpg','http://images.vintagesnoise.com/wp-content/uploads/2011/12/miranda_kerr_style_01.jpg','http://assets-s3.usmagazine.com/uploads/assets/articles/61845-miranda-kerr-is-out-as-a-victorias-secret-angel-shes-not-a-big-seller/1365549576_162416235_miranda-kerr-467.jpg','http://www.eonline.com/eol_images/Entire_Site/201398/rs_1024x759-131008130251-1024.-2miranda-kerr-mango-winter-2013--100813.jpg'],
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
