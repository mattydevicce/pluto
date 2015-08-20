// Hey Pluto!
// --------------
// Ready for round 2?

jQuery(function() {
  // This is just for fun... I couldn't help myself ;D
  var game_start = new Audio('/audio/start-round.mp3');
  game_start.play();
  var body = $('body');

  // 6. Defines a createDuck function that returns a duck
  function createDuck() {
    // 1. Creates a <div> with the class "duck" named "duck"
    var duck = $('<div class="duck"></div>');
    body.append(duck);

    // 2. Toggles the "flap" class on the duck every 250 ms (1/4 second)
    setInterval(function() {
      duck.toggleClass('flap');
    }, 250)

    // 8a. Moves the newly created duck to a random location
    duck.css("top", Math.random() * window.innerHeight);
    duck.css("left", Math.random() * window.innerWidth);

    // 8b. Moves the duck to a new location after 1 second
    // 9. Ducks keep moving by using setInterval instead of setTimeout
    setInterval(function() {
      duck.css("top", Math.random() * window.innerHeight);
      duck.css("left", Math.random() * window.innerWidth);
    }, 2000)

    duck.on("click", function() {
      duck.toggleClass("shot");
      setTimeout(function() {
        duck.remove()
        checkForWinner();
      }, 1000)
    })

    return duck;
  }

  // 7. Creates 5 ducks
  for(var i=0; i<2; i++) {
    createDuck();
  }

  function checkForWinner() {
    if (($(".duck")).length==0){
      alert("You win!!")
    };
  };

  function miniGun(xCoord, yCoord) {
    if (!mosueStillDown) { return };
    if (mosueStillDown) {
      var bulletHole = $("<image src='/images/Bullet-Hole-20.png' class='minigun'>");
      bulletHole.css("top", yCoord);
      bulletHole.css("left", xCoord);
      body.append(bulletHole);
      setTimeout(function(){
        bulletHole.remove();
      }, 1000);
    }
  }

  var mosueStillDown = false;

  $('body').on('mouseover', function(e) {
    mosueStillDown = true;
    var pageX = e.pageX;
    var pageY = e.pageY
    miniGun(pageX, pageY);
  });
  $('body').on('mouseup', function(e) {
    mosueStillDown = false;
  });




})
