
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


function fetchOMDB(movieName){
	//If a movie was not typed it, default to the movie Mr. Nobody
	if (artName == null){
		movieName = "Mr. Nobody";
	}

	var requestURL = "http://www.omdbapi.com/?t=" + movieName + "&tomatoes=true&y=&plot=short&r=json";

	request(requestURL, function (error, response, data){

		//200 response means that the page has been found and a response was received.
		if (!error && response.statusCode == 200){
			console.log("Everything working fine.");
		}
		console.log("---------------------------------------------");
		console.log("The movie's title is: " + JSON.parse(data)["Title"]);
		console.log("The movie's release year is: " + JSON.parse(data)["Year"]);		
		console.log("The movie's rating is: " + JSON.parse(data)["imdbRating"]);
		console.log("The movie's was produced in: " + JSON.parse(data)["Country"]);
		console.log("The movie's language is: " + JSON.parse(data)["Language"]);
		console.log("The movie's plot: " + JSON.parse(data)["Plot"]);
		console.log("The movie's actors: " + JSON.parse(data)["Actors"]);
		console.log("The movie's Rotten Tomatoes Rating: " + JSON.parse(data)["tomatoRating"]);
		console.log("The movie's Rotten Tomatoes URL: " + JSON.parse(data)["tomatoURL"]);

		appendFile("---------------------------------------------");
		appendFile("The movie's title is: " + JSON.parse(data)["Title"]);
		appendFile("The movie's release year is: " + JSON.parse(data)["Year"]);		
		appendFile("The movie's rating is: " + JSON.parse(data)["imdbRating"]);
		appendFile("The movie's was produced in: " + JSON.parse(data)["Country"]);
		appendFile("The movie's language is: " + JSON.parse(data)["Language"]);
		appendFile("The movie's plot: " + JSON.parse(data)["Plot"]);
		appendFile("The movie's actors: " + JSON.parse(data)["Actors"]);
		appendFile("The movie's Rotten Tomatoes Rating: " + JSON.parse(data)["tomatoRating"]);
		appendFile("The movie's Rotten Tomatoes URL: " + JSON.parse(data)["tomatoURL"]);											
	});
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