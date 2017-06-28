// var ExampleModule = require('./../js/scripts.js').exampleModule;

var apiKey = "72601d02d4379c40ed70d6697cc032b1";

$(document).ready(function() {
  $('#movie-finder').click(function() {
    var movie = $('#movie').val();
    $('#movie').val('');
    $.get('https://api.themoviedb.org/3/search/movie?api_key=' + apiKey + '&query=' + movie, function(response) {
      $('.show-movies').text('Similar titles to ' + movie + ' are: ' +  response.results[1,5].title);
      console.log(response);
    });
  });
});
