var input = process.argv;

require('dotenv').config();
var keys = require('./keys.js');
var spotify = new Spotify(keys.spotify);

var fs = require('fs');
var axios = require('axios');


var Spotify = require('node-spotify-api');







//------------

if (input[2] == "concert-this") {

var artist = input[3];

var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

axios.get(queryUrl).then(
  function(response) {
    console.log("The movie's rating is: " + response.data.imdbRating);

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

if (input[2] == "spotify-this-song") {
	var songQuery = input[3];
	spotify.search({ type: 'track', query: songQuery }, function(err, $
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



fs.appendFile('log.txt', "\n" + dataOut, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Content Added!");
  }
});



};

if (input[2] == "movie-this") {
// Grab or assemble the movie name and store it in a variable called "movieName"
var movieName = input[3];
// ...

// Then run a request with axios to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apike


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

if (input[2] == "do-what-it-says") {
 fs.readFile("random.txt", "utf8", function(error, data) {

  if (error) {
    return console.log(error);
  }

  console.log(data);
  var dataArr = data.split(",");
  console.log(dataArr);

//here you can run functions on dataArr[1] based on what dataArr[0] says
//maybe you have to put each search in a function... that's work!



  });
};
