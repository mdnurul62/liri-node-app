
//console.log("Link test")

var fs = require('fs');

var Twitter = require('twitter');
var keys = require('./keys.js');
var client = new Twitter(keys);
var spotify = require('spotify');

//Two arguments, first one is user command and second agr is user choice to pick
var userCom = process.argv[2];
var userSearch = process.argv[3];

//User commands: 'my-tweets', 'soptify-this-song', 'movie-this', 'do-what-it-says'.
//User searches:'song name', 'movie name'
//Create switch-case statement for user command

switch (userCom) {
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

//Call functions

function fetchTwitter() {
	
	var params = {
			q: 'nurulcode',
			count: 2
		}

	//search all tweets of nurulcode
	client.get('search/tweets', params, callback); 

		function callback(err, data, response) {
			//console.log(data);
			if (err) {
				return console.log(err)
			}
			var tweets = data.statuses;
			for (var i = 0; i < tweets.length; i++) {
				console.log(tweets[i].text)
			}
		}

};

function fetchSpotify() {
	var searchObj = {
			type: 'track',
			query: "songName"
		}

	if (userSearch === 'undefined') {
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
			}
		})
	}
};




function fetchOMDB(movieName){
	//If a movie was not typed it, default to the movie Mr. Nobody
	if (userSearch === null){
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

	});
}

function fetchRandom(){
	//LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
	//Runs `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
	fs.readFile("random.txt", 'utf8', function(err, data){

		// console.log(data);

		//Creating an array from a string with split()
		//Every comma, push the element into the array
		var dataArr = data.split(',');

		// console.log(dataArr);

		var randomUserCommand = dataArr[0];
		var randomArtName = dataArr[1];

		console.log("You requested to " + "<" + randomUserCommand + "> with " + randomArtName);
		appendFile("You requested to " + "<" + randomUserCommand + "> with " + randomArtName);

		//Remove the quotes before making a request
		randomArtName = randomArtName.replace(/^"(.*)"$/, '$1');

		doNext(randomUserCommand, randomArtName);
	});
};


