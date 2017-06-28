var apiKey = require('./../.env').apiKey;

function MovieTitle() {
}

MovieTitle.prototype.getMovie = function(movie, displayMovie) {
  $.get('https://api.themoviedb.org/3/search/movie?api_key=' + apiKey + '&query=' + movie) .then(function(response) {
    var movieOutput = response.results;
    for(var i = 0; i < movieOutput.length; i++){
      var newMovie = response.results[i].title;
      displayMovie(newMovie);
    }
  })
  .fail(function(error){
    $('.show-movies').text(error.responseJSON.message);
  });
};

exports.movieTitleModule = MovieTitle;
