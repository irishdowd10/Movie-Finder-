var MovieInfo = require('./../js/scripts.js').movieTitleModule;

var displayMovie = function(allMovies) {
  for(i = 0; i < allMovies.length; i++) {
  $('.show-movies').show().append('<h3>' + 'Title:  ' + allMovies[i].title + '</h3>' + '<p>' + 'Average Rating:  ' + allMovies[i].vote_average + '</p>' + '<p>' + 'Release Date:  ' + allMovies[i].release_date + '</p>');
  }
};


$(document).ready(function() {
  var movieObject = new MovieInfo();
  $('#movie-finder').click(function() {
    $('.show-movies').empty();
    var movie = $('#movie').val();
    $('#movie').val('');
    movieObject.getTitle(movie, displayMovie);

  });
});
