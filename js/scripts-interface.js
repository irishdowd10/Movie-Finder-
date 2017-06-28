var MovieTitle = require('./../js/scripts.js').movieTitleModule;

var displayMovie = function(movie) {
  $('.show-movies').show().append('<li>' + movie + '</li>');
};


$(document).ready(function() {
  var movieObject = new MovieTitle();
  $('#movie-finder').click(function() {
    $('.show-movies').empty();
    var movie = $('#movie').val();
    $('#movie').val('');
    movieObject.getMovie(movie, displayMovie);

  });
});
