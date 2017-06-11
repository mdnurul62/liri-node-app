
console.log("Link test")
var fs = require('fs')

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