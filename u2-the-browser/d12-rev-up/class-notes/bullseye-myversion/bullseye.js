// ** TASK ** //
// You are an Archer that is extremely precise and never miss.
// Not even in the bubbly distorted world of JavaScript.

// Add click event handlers to each bullseye ring that will alert when you hit
// your desired target on the bullseye. Since you are in JavaScript
// world your shot could bubble to other rings in the bullseye. Remember you
// have a reputation to uphold, so make sure your shots do not bubble to other rings.


// ** BONUS ** //
// Write a function to highlight the ring you hit with the color yellow.

$(function() {
  // Leave this event listener to ensure that when you hit ring #1 it does not
  // bubble up to the body
  var highlight = function(element) {
    $(element).css('background-color', 'yellow');
    alert($(element).attr('id'));
    $(element).css('background-color', '');
  };

  $('body').click(function(event) {
    event.stopPropagation();
    highlight(event.currentTarget);
  });

  // Fire your code away
<<<<<<< HEAD
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

=======
  $('#t3').click(function(event) {
    event.stopPropagation();
    highlight(event.currentTarget);
  });

  $('#t2').click(function(event) {
    event.stopPropagation();
    highlight(event.currentTarget);
  });

  $('#t1').click(function(event) {
    event.stopPropagation();
    highlight(event.currentTarget);
  });

>>>>>>> 3bd9de8d7cfc73ca3bf6ae45a5d8331f39106552
});
