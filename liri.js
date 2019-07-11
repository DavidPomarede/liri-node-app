var input = process.argv;
var command = input[2];
var query = input[3];

require('dotenv').config();
var keys = require('./keys.js');
var Spotify = require('node-spotify-api');
var fs = require('fs');
var axios = require('axios');

var spotify = new Spotify(keys.spotify);

//------------

var concertFunc = function() {

	var artist = query;

	var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

	axios.get(queryUrl).then(
	  function(response) {
	    console.log(response);
	    console.log(response.data);
		//Name of the venue
		//Venue location
		//Date of the Event (use moment to format this as "MM/DD/YYYY")

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
	      // The request was made and the server responded with a status code
	      // that falls out of the range of 2xx
	      console.log("---------------Data---------------");
	      console.log(error.response.data);
	      console.log("---------------Status---------------");
	      console.log(error.response.status);
	      console.log("---------------Status---------------");
	      console.log(error.response.headers);
	    } else if (error.request) {
	      // The request was made but no response was received
	      // `error.request` is an object that comes back with details pertaining t$
	      console.log(error.request);
	    } else {
	      // Something happened in setting up the request that triggered an Error
	      console.log("Error", error.message);
	    }
	    console.log(error.config);
	  });

};



var songFunc = function() {
	spotify.search({ type: 'track', query: query }, function(err, data) {
  		if (err) {
    			return console.log('Error occurred: ' + err);
  		}
		console.log(data);
	});



	//Artist(s)
	//The song's name
	//A preview link of the song from Spotify
	//The album that the song is from


	//search: function({
	//type: 'artist OR album OR track',
	//query: 'My search query',
	//limit: 20
	//},
	//callback
	//);



	//fs.appendFile('log.txt', "\n" + dataOut, function(err) {
	//  if (err) {
	//    console.log(err);
	//  } else {
	//    console.log("Content Added!");
	//  }
	//});

};



var movieFunc = function() {


	// Grab or assemble the movie name and store it in a variable called "movieName"
	var movieName = query;
	// ...
	
	// Then run a request with axios to the OMDB API with the movie specified
	var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy"


	axios.get(queryUrl).then(
	  function(response) {
	    console.log("The movie's rating is: " + response.data.imdbRating);

	//   * Title of the movie.
	//   * Year the movie came out.
	//   * IMDB Rating of the movie.
	//   * Rotten Tomatoes Rating of the movie.
	//   * Country where the movie was produced.
	//   * Language of the movie.
	//   * Plot of the movie.
	//   * Actors in the movie.
	

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



var whatSaysFunc = function() {
	 fs.readFile("random.txt", "utf8", function(error, data) {

	  if (error) {
	    return console.log(error);
	  }

	  console.log(data);
	  var dataArr = data.split(",");
	  console.log(dataArr);
		query = dataArr[1];
	//here you can run functions on dataArr[1] based on what dataArr[0] says
	//maybe you have to put each search in a function... that's work!
	switch (true) {
	    case dataArr[0] == "concert-this":
	        console.log("A");
		concertFunc();
	        break;
	    case dataArr[0] == "spotify-this-song":
	        console.log("B");
		songFunc();	
	        break;
	    case dataArr[0] == "movie-this":
	        console.log("C");
		movieFunc();
	        break;
	    default:
	        console.log("F");
	};	
  });
};



//------------

switch (true) {
    case input[2] == "concert-this":
        console.log("A");
	concertFunc();
        break;
    case input[2] == "spotify-this-song":
        console.log("B");
	songFunc();	
        break;
    case input[2] == "movie-this":
        console.log("C");
	movieFunc();
        break;
    case input[2] == "do-what-it-says":
        console.log("D");
	whatSaysFunc();
        break;
    default:
        console.log("F");
};



