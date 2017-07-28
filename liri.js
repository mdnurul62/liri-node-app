//console.log("Link test")

var fs = require('fs');

var Twitter = require('twitter');
var keys = require('./keys.js');
var client = new Twitter(keys);
var spotify = require('spotify');
var request = require('request');

//Two arguments, first one is user command and second agr is user search to pick the choice.
var userCom = process.argv[2];
var userSearch = process.argv[3];

//User commands: 'my-tweets', 'soptify-this-song', 'movie-this', 'do-what-it-says'.
//User searches:'<song name>', '<movie name>'


//switch-case statement for user command
function switchCase() {
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
	}
};

switchCase();


//Call twitter functions

function fetchTwitter() {
	if (userSearch) {
		
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
			}
		};


fetchTwitter();

//Call spotify function
function fetchSpotify() {
	var spotify = require('spotify');
	var searchObj = {
			type: 'track',
			query: "whatToFind"
		}
 
	spotify.search(searchObj, function(err, data) {
		if (userSearch != undefined) {
    		if ( err ) {
        		console.log('Error occurred: ' + err);
        		return;
    		}
 
    	// Do something with 'data'
    	var trackCount = data.tracks.items.length;
    	console.log('Found: ' + trackCount + ' Tracks for query: ' + whatToFind + '\n');

    	 for (var i = 0; i < trackCount; i++) {
                        var artistCount = data.tracks.items[i].artists.length;
                        for (var j = 0; j < artistCount; j++) {
                            console.log("Artist: " + data.tracks.items[i].artists[j].name);
                            console.log(" Album:  " + wordwrap.wrap(data.tracks.items[i].album.name, { width: 60 }));
                            console.log(" Link: " + data.tracks.items[i].artists[j].external_urls.spotify + "\n");
                        }
         		}
		}
	})
	fetchSpotify();
};

	
//Call movie function

function fetchMovie(userSearch){
	//If a movie was not typed it, default to the movie Mr. Nobody
	if (userSearch === null){
		var movieName = "";
		console.log(movieName);
	} else {
		var movieName = '';
		var requestUrl = "http://www.omdbapi.com/?t=" + movieName + "&apikey=40e9cece";

		request(requestUrl, function(error, response, body) {
			if (!error && response.statusCode === 200) {

			}
		});
	}

	function callback(err, response, data) {
		if (err) {
			console.log('Error occurred' + err)
		} else {

			const json = JSON.parse(body);

			console.log("---------------------------------------------");
			console.log("\nMy Movie: ");
	   		console.log("\nTitle: " + json.Title);
	   		console.log("Year: " + json.Year);
	   		console.log("Rated: " + json.imdbRating);
	   		console.log("Country: " + json.Country);
	   		console.log("Language: " + json.Language);
	   		console.log("Plot: " + json.Plot);
	   		console.log("Actors: " + json.Actors);
	   		console.log("Rotten Tomatoes: " + json.Value);
	   		console.log("URL: https://www.rottentomatoes.com/search/?search=" + userSearch);
			console.log("-----------------------------------------------");
			console.log(data)
		
		}
	}
};

fetchMovie();

//Call random function
function fetchRandom(){
	var fileName = require('./random.txt');
	var writeThis = [process.argv[3], process.argv[4]];

	fs.writeFile('random.txt', writeThis, function(error){
		if (error) {
			console.log('error');
		} else {
			console.log('created the file');
		}
	});


	fs.readFile(fileName, 'utf8', function(err, fileContents){
		if (err) {
			return console.log(err)
		} else {
			console.log(fileContents);
			var array = data.split(',');

			userCom = array[0];
			userSearch = array [1];

			switchCase();
		}
	});
};

