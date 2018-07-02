require("dotenv").config();
var keys = require("./keys");
// links keys to this document
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
// console.log("spotify");
// console.log(spotify);


// console "my-tweets" from stacietwit
// tweets my tweets
// var client = function() {
//  console.log("my-tweets")

// found this in https://www.npmjs.com/package/twitter
var Twitter = require('twitter');

var client = new Twitter({

    // consumer_key: process.env.TWITTER_CONSUMER_KEY,
    // consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    // access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    // access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    consumer_key: 'process.env.TWITTER_CONSUMER_KEY',
    consumer_secret: 'process.env.TWITTER_CONSUMER_SECRET',
    access_token_key: 'process.env.TWITTER_ACCESS_TOKEN_KEY',
    access_token_secret: 'process.env.TWITTER_ACCESS_TOKEN_SECRET'
});

var params = { stacietwit1: 'nodejs', count: 20 };
client.get('statuses/user_timeline', params, function (error, tweets, response) {
    if (!error) {
        console.log(my - tweets);
    }
});


// another option found in stackoverflow maybe not sure???
// var express = require('express');
// var Twitter = require('twitter');
// var router = express.Router();
// router.get('/', function (req, res, next) {
//     // https://dev.twitter.com/rest/reference/get/statuses/user_timeline
//     client.get('statuses/user_timeline', { stacietwit: 'nodejs', count: 20 }, function (error, tweets, response) {
//         if (!error) {
//             console.log(tweets);
//             res.status(200).render('index', { title: 'Express', tweets: tweets });
//         }
//         else {
//             res.status(500).json({ error: error });
//         }
//     });
// });
// module.exports = router;



// "spotify-this-song"
// info from node spotify API
// request can be used to make API requests to any Spotify endpoint you supply.
// https://www.npmjs.com/package/node-spotify-api

// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from

// https://api.spotify.com/v1

var Spotify = require('node-spotify-api');
var inquirer = require("inquirer");

// Created the question "Pick a song spotify this song"
inquirer.prompt(
    {
        type: "input",
        songName: "userSongName",
        message: "Enter a Song and find the Artist, Album and a link to Spotify!"
    },
)

// after user enters a song, then this function will console.log/print the name of the song.   

console.log("==============================================");
console.log("");
console.log("spotify-this-song, enter song here");
console.log("");
console.log("==============================================");



// this will console.log the Artist name from the api
this.getArtist = function (artistId, callback) {
    var request = WebApiRequest.builder()
        .withPath('/v1/artists/' + artistId)
        .build();

    _addAccessToken(request, this.getAccessToken());

    var promise = _performRequest(HttpManager.get, request);

    if (callback) {
        promise.then(function (data) {
            callback(null, data);
        }, function (err) {
            callback(err);
        });
    } else {
        return promise;
    }
};

// console.log the Artist
if (user.artistId === "artist") {

    console.log("==============================================");
    console.log("");
    console.log(artistID);
    console.log("");
    console.log("==============================================");
}


// this will pull the Album

this.getAlbum = function (albumId, options, callback) {
    // In case someone is using a version where options parameter did not exist.
    var actualCallback;
    if (typeof options === 'function') {
        actualCallback = options;
    } else {
        actualCallback = callback;
    }

    var actualOptions = {};
    if (typeof options === 'object') {
        Object.keys(options).forEach(function (key) {
            actualOptions[key] = options[key];
        });
    }

    var request = WebApiRequest.builder()
        .withPath('/v1/albums/' + albumId)
        .withQueryParameters(actualOptions)
        .build();

    _addAccessToken(request, this.getAccessToken());

    var promise = _performRequest(HttpManager.get, request);

    if (actualCallback) {
        promise.then(function (data) {
            actualCallback(null, data);
        }, function (err) {
            actualCallback(err);
        });
    } else {
        return promise;
    }
};

// this will console.log the Album
if (user.albumId === "album") {

    console.log("==============================================");
    console.log("");
    console.log(albumID);
    console.log("");
    console.log("==============================================");
}


// this will pull the track

this.getTrack = function (trackId, options, callback) {
    // In case someone is using a version where options parameter did not exist.
    var actualCallback;
    if (typeof options === 'function') {
        actualCallback = options;
    } else {
        actualCallback = callback;
    }

    var actualOptions = {};
    if (typeof options === 'object') {
        Object.keys(options).forEach(function (key) {
            actualOptions[key] = options[key];
        });
    }

    var request = WebApiRequest.builder()
        .withPath('/v1/track/' + trackId)
        .withQueryParameters(actualOptions)
        .build();

    _addAccessToken(request, this.getAccessToken());

    var promise = _performRequest(HttpManager.get, request);

    if (actualCallback) {
        promise.then(function (data) {
            actualCallback(null, data);
        }, function (err) {
            actualCallback(err);
        });
    } else {
        return promise;
    }
};

// this will console.log the Track
if (user.trackId === "track") {

    console.log("==============================================");
    console.log("");
    console.log(trackID);
    console.log("");
    console.log("==============================================");
}





// add a movie to Liri
// * Title of the movie.
//    * Year the movie came out.
//    * IMDB Rating of the movie.
//    * Rotten Tomatoes Rating of the movie.
//    * Country where the movie was produced.
//    * Language of the movie.
//    * Plot of the movie.
//    * Actors in the movie.

// http://www.omdbapi.com/?apikey=[yourkey]&


var inquirer = require("inquirer");
// Ask user to enter a movie title
inquirer.prompt(
    {
        type: "input",
        name: "movieName",
        message: "Enter a your favorite movie."
    }
        // console.log the title of the movie the user entered.
        .then(function (user) {
            if (this.name === movieName) {
                console.log(movieName);
            }
            else {
                console.log("Mr. Nobody");
            }

            {
                console.log("==============================================");
                console.log("");
                console.log(user.movieName);
                console.log("");
                console.log("==============================================");
            }

            // constructor function which can be used to list movie objects or movie information
            var movieName = function () {
                this.title = title;
                this.year = y;
                this.imdbRating = imdbRating;
                this.tomatoRating = tomatoRating;
                this.country = country;
                this.language = language;
                this.plot = plot;
                this.actors = actors;

            }

            var movieName = $(this).attr("movieName");
            console.log(movieName);
            var queryURL = "http://www.omdbapi.com/?apikey=[4f10f72]&" + movieName;
            console.log(queryURL)
            $.ajax({ query: queryURL, method: "GET" })
                .then(function (response) {
                    console.log(response);
                },
            )

            // "do-what-it-says"
            // liri to show what is in random.txt document
            var fs = require('fs');
            // set variable for file streams
            var tty = fs.createWriteStream('/random.txt');
            // set variable to write information located in random.txt doc to terminal

            console.log("=============================================="),
                console.log(""),
                console.log(tty),
                console.log(""),
                console.log("==============================================");
