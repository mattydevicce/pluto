jQuery(function() {

  var rect7 = $("#rect7");
  var counter = 2
  setInterval(function() {
    if ( counter%2===0){
      rect7.css('fill', 'blue');
      counter += 1;
    } else {
      rect7.css('fill', 'red');  
      counter += 1;
    }
  }, 1000)

})