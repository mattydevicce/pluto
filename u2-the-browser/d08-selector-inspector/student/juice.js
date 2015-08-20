numbersOfJuice = 99.5;
lyrics = $("<p>");
lyrics.html((numbersOfJuice-0.5) + ' bottles of juice on the wall <br/>' + (numbersOfJuice-0.5) + " bottles of juice <br/> take one down and pass it around<br/>" + ((numbersOfJuice-0.5)-1) + " bottles of juice on the wall" );


$('body').append(lyrics);

function toggleLyrics(){
  if (numbersOfJuice-2 === 0){
    clearInterval(refreshIntervalId);
  }
  $(lyrics).toggle();
  lyrics.html((numbersOfJuice-1) + ' bottles of juice on the wall <br/>' + (numbersOfJuice-1) + " bottles of juice <br/> take one down and pass it around<br/>" + (numbersOfJuice-2) + " bottles of juice on the wall" );
  numbersOfJuice -= (0.5);

}


var refreshIntervalId = setInterval(toggleLyrics, 20);
