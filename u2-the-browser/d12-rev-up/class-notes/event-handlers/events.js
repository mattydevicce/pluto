$(function() {
  $('li').click(function(event) {
    console.log('li event', event);
  });

  $('#submit').click(function(event) {
    event.preventDefault();
    console.log('submit button event', event);
  });

  $('#normal').click(function(event) {
    console.log('button event', event);
  });

  $('#counting').click(function(event) {
    console.log('clicking a count item');
  });

  var fourth = $('<li>');
  fourth.text('fourth');

  $('#counting').append(fourth);
});
