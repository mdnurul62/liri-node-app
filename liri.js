//console.log("Link test")

var fs = require('fs');

var Twitter = require('twitter');
var keys = require('./keys.js');
var client = new Twitter(keys);
var spotify = require('spotify');

//Two arguments, first one is user command and second agr is user search to pick the choice.
var userCom = process.argv[2];
var userSearch = process.argv[3];

//User commands: 'my-tweets', 'soptify-this-song', 'movie-this', 'do-what-it-says'.
//User searches:'<song name>', '<movie name>'
//switch-case statement for user command

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

//Call twitter functions

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

//Call spotify function
function fetchSpotify() {
	var searchObj = {
			type: 'track',
			query: "songName"
		}

	if (userSearch === 'undefined') {
		var fileName = require('./random.txt')
		fs.readFile(fileName, 'utf8', function(err, fileContents) {
			if (err) {
				return console.log(err);
			} else {
			console.log(fileContents.split(','));
			} 

		});

	} else {
			spotify.search(searchObj, callback);
		}

		function callback(err, data) {
			if (err) {
				console.log('Error occurred: ' + err);
				return;
			} else {
				console.log('Tracks: ' + data.tracks[0]);
				console.log('Artist: ' + data.tracks[0].artist[0]);
				console.log('Album: ' + data.tracks[0].album);
				console.log('Spottify link: ' + data.tracks[0].external_url.spotify);
			}
		};
	

//Call movie function

function fetchMovie(){
	//If a movie was not typed it, default to the movie Mr. Nobody
	if (userSearch === null){
		var movieName = "Mr. Nobody";
		console.log(movieName);
	} else {
		var movieName = '';
		var requestURL = "http://www.omdbapi.com/?t=" + movieName + "&tomatoes=true&y=&plot=short&r=json";
		request(requestURL, callback);
	}

	function callback(err, data) {
		if (err) {
			console.log('Error occurred' + err)
		} else {
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
			console.log("-----------------------------------------------");
		}
	};
	
//Call random function
function fetchRandom(){
	var fileName = require('./random.txt');
	fs.readFile(fileName, 'utf8', function(err, fileContents){
		if (err) {
			return console.log(err)
		} else {
			console.log(fileContents.split(','));
			var dataArr = data.split(',');
			var randomUserCom = dataArr[0];
			var randomUserSearch = dataArr[1];

			console.log("You requested to " + "<" + randomUserCom + "> with " + randomUserSearch);
			appendFile("You requested to " + "<" + randomUserCom + "> with " + randomUserSearch);
		}
	});
};

