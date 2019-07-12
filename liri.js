

var input = process.argv;
var command = input[2];
var query = input[3];
require('dotenv').config();
var keys = require('./keys.js');
var Spotify = require('node-spotify-api');
var fs = require('fs');
var axios = require('axios');
var moment = require('moment');
var spotify = new Spotify(keys.spotify);

// logging data variable
var dataOut = "";

// Bands in Town Search function

var concertFunc = function() {

	var artist = query;

	var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

	axios.get(queryUrl).then(
	  function(response) {
		console.log("\nYou seached for: "+ artist + "\n");
		console.log("Where: " + response.data[0].venue.name + " in " + response.data[0].venue.city + ", " + response.data[0].venue.country);
		console.log("When: " + moment(response.data[0].datetime).format('L'));

		dataOut = "\n>>>CONCERT SEARCH\nSearch: " + artist + "\n" + "Where: " + response.data[0].venue.name + " in " + response.data[0].venue.city + ", " + response.data[0].venue.country + "\n" + "When: " + moment(response.data[0].datetime).format('L');

		fs.appendFile('log.txt', "\n" + dataOut, function(err) {
		  if (err) {
		    console.log(err);
		  } else {
		    console.log("Content Added!");
		  }
		});
	  })

	  .catch(function(error) {
	    if (error.response) {
	      console.log("---------------Data---------------");
	      console.log(error.response.data);
	      console.log("---------------Status---------------");
	      console.log(error.response.status);
	      console.log("---------------Status---------------");
	      console.log(error.response.headers);
	    } else if (error.request) {
	      console.log(error.request);
	    } else {
	      console.log("Error", error.message);
	    }
	    console.log(error.config);
	  });

};

// Spotify song search function

var songFunc = function() {
	spotify.search({ type: 'track', query: query }, function(err, data) {
  		if (err) {
    			return console.log('Error occurred: ' + err);
  		}
	        console.log("\nYou seached for: "+ query + "\n");
		console.log("Track: " +data.tracks.items[0].name);
		console.log("Artist: " + data.tracks.items[0].artists[0].name);
		console.log("From the album: " + data.tracks.items[0].album.name);
		console.log("Link: " + data.tracks.items[0].external_urls.spotify);
		dataOut = "\n>>>SONG SEARCH\nSearch: " + query + "\n" + "Track: " +data.tracks.items[0].name + "\n" + "Artist: " + data.tracks.items[0].artists[0].name + "\n" + "From the album: " + data.tracks.items[0].album.name + "\n" + "Link: " + data.tracks.items[0].external_urls.spotify;

		fs.appendFile('log.txt', "\n" + dataOut, function(err) {
 		 if (err) {
		    console.log(err);
		  } else {
		    console.log("Content Added!");
		  }
		});
	});
};

// Movie search function

var movieFunc = function() {

	var movieName = query;
	var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy"

	axios.get(queryUrl).then(
	  function(response) {
	        console.log("\nYou seached for: "+ movieName + "\n");
		console.log("Title: " + response.data.Title);
		console.log("Year: " + response.data.Year);
		console.log("The movie's IMDB rating is: " + response.data.Ratings[0].Value);
		console.log("The movie's Rotten Tomatoes rating is: " + response.data.Ratings[1].Value);
		console.log("Country: " + response.data.Country);
		console.log("Language: " + response.data.Language);
		console.log("Plot: " + response.data.Plot);
		console.log("Cast: " + response.data.Actors);

		dataOut = "\n>>>MOVIE SEARCH\nSearch: " + movieName + "\n" + "Title: " + response.data.Title + "\n" + "Year: " + response.data.Year + "\n" + "The movie's IMDB rating is: " + response.data.Ratings[0].Value + "\n" + "The movie's Rotten Tomatoes rating is: " + response.data.Ratings[1].Value + "\n" + "Country: " + response.data.Country + "\n" + "Language: " + response.data.Language + "\n" + "Plot: " + response.data.Plot + "\n" + "Cast: " + response.data.Actors;

		fs.appendFile('log.txt', "\n" + dataOut, function(err) {
		  if (err) {
		    console.log(err);
		  } else {
		    console.log("Content Added!");
		  }
		});
	  })

	  .catch(function(error) {
	    if (error.response) {
	      console.log("---------------Data---------------");
	      console.log(error.response.data);
	      console.log("---------------Status---------------");
	      console.log(error.response.status);
	      console.log("---------------Status---------------");
	      console.log(error.response.headers);
	    } else if (error.request) {
	       console.log(error.request);
	    } else {
	       console.log("Error", error.message);
	    }
	    console.log(error.config);
	  });
};

// do-what-it-says function

var whatSaysFunc = function() {
	fs.readFile("random.txt", "utf8", function(error, data) {

	if (error) {
	  return console.log(error);
	}

	console.log(data);
	var dataArr = data.split(",");
	console.log(dataArr);
	query = dataArr[1];

	switch (true) {
	    case dataArr[0] == "concert-this":
		concertFunc();
	        break;
	    case dataArr[0] == "spotify-this-song":
		songFunc();	
	        break;
	    case dataArr[0] == "movie-this":
		movieFunc();
	        break;
	    default:
	        console.log("Do something else");
	};	
  });
};



//Main Switch

switch (true) {
    case input[2] == "concert-this":
	concertFunc();
        break;
    case input[2] == "spotify-this-song":
	songFunc();	
        break;
    case input[2] == "movie-this":
	movieFunc();
        break;
    case input[2] == "do-what-it-says":
	whatSaysFunc();
        break;
    default:
        console.log("Please enter a command: concert-this, spotify-this-song, movie-this, or do-what-it-says.");
};
