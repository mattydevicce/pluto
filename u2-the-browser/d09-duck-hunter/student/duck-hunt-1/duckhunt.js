// Hey Pluto!
// --------------
// Let's have some fun!

// This is a jQuery "ready" closure:
jQuery(function() {
  // - Unlike a normal closure, we don't have to call it
  // - jQuery will call it when the page is loaded

  // I'll do some of the work for you, first I will grab the <body></body>
  
  var body = $('body');
  function makeDuck(){
    // 1. Can you create a <div> with the class "duck" and name it "duck"

    var duck = $("<div></div>");
    duck.addClass("duck");

    body.append(duck);
   
    // 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)
   
    setInterval(function() {
      duck.toggleClass("flap");
    }, 250);
    
    // 3. Fantastic!  Now, let's move the duck using CSS "top" and "left"
    
    duck.css('top', randomPosition());
    duck.css('left', 10);
   
    // 4. Try making the duck move to a different location after 1 second
   
    var moveRight = 10;
    var moveDown = 10;
    setInterval(function() {
      moveRight += 10;
      moveDown += 10;
      duck.css('top', moveRight);
      duck.css('left', moveDown);
    }, 100) 

    // 5. Congratulations!


    function randomPosition() {
      // Making a random starting point on the y axis
      moveDown = Math.ceil(Math.random()*30)
      return moveDown
    }
  }
  setInterval(makeDuck(),100);
})
