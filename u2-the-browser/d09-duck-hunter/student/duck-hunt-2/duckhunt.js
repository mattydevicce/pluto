// Hey Pluto!
// --------------
// Ready for round 2?

jQuery(function() {

  // 5. ------ Here we go! ------

  // 6. Things are getting a bit messy. Let's create
  //    a "function" called createDuck() that does everything in 1-4
  //    and "returns" the duck object

  var body = $('body');
  setTimeout(function() {
    var ready = $("<div class='ready'>Ready</div>")
    body.append(ready);
  }, 1000);
  setTimeout(function(){
    body.remove('.ready');
    var set = $("<div class='set'>Set</div>")
    body.append(set);  
  }, 2000);

  setTimeout(function(){
    body.remove('.set');
    var go = $("<div class='go'>GO!</div>");
    body.append(go);
  }, 3000);
  function createDuck() {
    var duck = $('<div class="duck"></div>');

    setInterval(function() {
      duck.toggleClass('flap');
    }, 250)

    duck.css("top", 0);
    duck.css("left", 0);

    setInterval(function() {
      duck.css("left", (Math.random()*window.innerWidth));
      duck.css("top", (Math.random()*window.innerHeight));
    }, 1000)

    return duck
  }

  // 7. Now, let's create lots of ducks!  Use a "for" loop to create 5 ducks
  //    using our fancy new createDuck() function
  for (var i=0; i<5; i++){
    (body).append(createDuck());
  }
  // 8a. Uh oh, our ducks are overlapping.  Modify createDuck so each time
  //    it creates a duck, it appears in a random location
  // 8b. The ducks should also move to a random location after 1 second
  // HINT: Use Math.random() * window.innerWidth    for "left"
  //       And Math.random() * window.innerHeight   for "top"

  // 9. Our ducks are going to be easy targets if they only move once.
  //    Modify createDuck() so the ducks keep moving around

  // 10. Well Done!

})
