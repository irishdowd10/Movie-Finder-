var apiKey = require('./../.env').apiKey;

function MovieInfo(title, vote_average, release_date) {
  this.title = title;
  this.vote_average = vote_average;
  this.release_date = release_date;
}

MovieInfo.prototype.getTitle = function(movie, displayMovie) {
  $.get('https://api.themoviedb.org/3/search/movie?api_key=' + apiKey + '&query=' + movie) .then(function(response) {
    var allMovies = [];
    var movieOutput = response.results;
    for(var i = 0; i < movieOutput.length; i++){
      var newMovie = new MovieInfo(response.results[i].title, response.results[i].vote_average, response.results[i].release_date);
      allMovies.push(newMovie);
    }
    displayMovie(allMovies);
    console.log(allMovies);

  })
  .fail(function(error){
    $('.show-movies').text(error.responseJSON.message);
  });
};

exports.movieTitleModule = MovieInfo;
