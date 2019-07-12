# Liri Search App

**What it does:**
The app take two primary arguments:
	1. What kind of search: *movie* information, *song* information, *concert* information, or if you want to perform a search listed in the file "random.txt"
	1. The parameters of your search (formatted in quotes if there are spaces).

The **options** for the first argument are the follwing:

 * *concert-this* : enter an artist name or band name and find the city, venue and date of their next show. 
 * *spotify-this-song* : enter a song title and get the artist, album and a link to spotify to play the song. 
 * *movie-this* : enter a movie title and find out lots of informormation about the movie including plot, cast and release year.
 * *do-what-it-says* : take information from a CSV file (called "random.txt") and perform a search using that.

**Why it's *useful*:**
Liri gives you instant information about your favorite movies, songs or bands.

**Get started:**
Clone the repo and make sure you have Node.js and NPM installed. Navigate to the repo and download the packages from NPM with the following command:

> npm install

**Example Search**

> node liri spotify-this-song "smells like teen spirit"

The result should look something like this:

![example.png](example.png)


**>>>**

**How the app is organized**

Each function type is called with a switch that depends on the first parameter of your Liri search.
If you choose the "do-what-it-says" option, that function will take the first and second arguments in the CSV file "random.txt" and perform its own switch that will inform one of the top three functions (movies, songs, or concert search). Each function after displaying the information will log the search results in the included file "log.txt".

Technologies used: JS, Node.js, npm, moments.js, fs, SpotifyAPI, OMDBApi, Band in Town API. 



**For more help** on installing the necessary packages via NPM, [click here](https://www.npmjs.com/).

Maintained by me.
