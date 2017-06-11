//node liri.js my-tweets
//node liri.js spotify-this-song '<song name here>'
//node liri.js movie-this '<movie name here>'
//node liri.js do-what-it-says


var fs = require('fs')

var keys = require('./keys.js');
var twitter = require('twitter');
var client = new twitter(keys.twitterKeys)

//Two arguments, first one is user command and second agr is user choice to pick
var userComm = process.argv[2];
var userChoice = process.argv[3];

//User commands are 'my-tweets', 'soptify-this-song <song name>', 'movie-this <movie name>', 'do-what-it-says'.
//Create switch-case statement for user command

switch (userComm) {
	case 'my-tweets':
		fetchTwitter();
		break;

	case 'soptify-this-song':
		fetchSpotify();
		break;

	case 'movie-this':
		fetchMovie();
		break;

	case 'do-what-it-says':
		fetchRandom();
		break;
};

//Call tweets function


function fetchTwitter() {
	var params = {screen_name: 'bootcampcoder'}
	keys.get('statuses/user_timeline', 20, function(error, data) {
		if (error) {
			return console.log(error);
		} 
			console.log("-----------------------");
			for (var i = 0; i < 20; i++) {
				console.log("Tweet " + "#" + (i + 1) + ":" + tweets[i].text);
			}
			console.log("---------------------------")
		})
	};

