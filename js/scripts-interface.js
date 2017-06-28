var MovieTitle = require('./../js/scripts.js').movieTitleModule;
var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#movie-finder').click(function() {
    var movie = $('#movie').val();
    $('#movie').val('');
    $.get('https://api.themoviedb.org/3/search/movie?api_key=' + apiKey + '&query=' + movie, function(response) {
      var movieOutput = response.results;
      for(var i = 0; i < movieOutput.length; i++){

      $('.show-movies').append('<li>' + response.results[i].title + '</li>');
      console.log(response.results[i].title);
    }
    });
  });
});
