
//console.log("Link test")

var fs = require('fs');

var Twitter = require('twitter');
var keys = require('./keys.js');
var client = new Twitter(keys);
//console.log(T);

var params = {
		q: 'nurulcode',
	count: 2
	}

//search twitter for all tweets of nurulcode
client.get('search/tweets', params, callback); 

	function callback(err, data, response) {
			//console.log(data);
			var tweets = data.statuses;
			for (var i = 0; i < tweets.length; i++) {
				console.log(tweets[i].text)
			}
	}


//npm package install for spotify
var spotify = require('spotify');
var userCom = process.argv[2]
var song = process.argv[3];
var searchObj = {
	type: 'track',
	query: "songName"
}

if (userCom === 'soptify-this-song' && song === 'undefined') {
	fs.readFile('./random.txt', 'utf8', function(err, data) {
		if (err) {
			return console.log(err);
		}

		spotify.search(searchObj, callback);

			function callback(err, data) {
				if (err) {
					console.log('Error occurred: ' + err);
					return;
				}
				return console.log('Tracks: ' + data.tracks[0]);
				return console.log('Artist: ' + data.tracks[0].artist[0]);
				return console.log('Album: ' + data.tracks[0].album);
				return console.log('Spottify link: ' + data.tracks[0].external_url.spotify);
			};
		})
}
/*
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

*/
/*
function fetchTwitter() {
	var params = {
		q: 'rainbow',
	count: 2
	}

	client.get('search/tweets', params, gotData); 

	function gotData(err, data, response) {
			console.log(data);
	}
}
*/		
/*
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

*/