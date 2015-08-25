// ** TASK ** //
// You are an Archer that is extremely precise and never miss.
// Not even in the bubbly distorted world of JavaScript.

// Add click event handlers to each bullseye ring that will alert when you hit
// your desired target on the bullseye. Since you are in JavaScript
// world your shot could bubble to other rings in the bullseye. Remember you
// have a reputation to uphold, so make sure your shots do not bubble to other rings.

$(function() {
  // Leave this event listener to ensure that when you hit ring #1 it does not\
  // buble up to the body
  $('body').click(function() {
    alert('You hit <body>');
  });

  // Fire your code away
  $("#d3").click(function(event) {
    event.stopPropagation();
    alert("clicked on " + $(event.currentTarget).attr('id'));
    highlight($("#d3"))
  })

  $("#d2").click(function(event) {
    event.stopPropagation();
    alert("You hit a 2");
    highlight($("#d2"))
  });
  $("#d1").click(function(event) {
    event.stopPropagation();
    alert("You hit a 1.. ");
    highlight($("#d1"))    
  });

  function highlight(ring) {
    var originalColor = ring.css('background-color');
    ring.css('background-color', 'yellow');
    setTimeout(function() {
      ring.css('background-color', originalColor)
    }, 2000)
    ring.stopPropagation();
  }

});
