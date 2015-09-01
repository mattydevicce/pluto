$(function(){
  var sec  = 0;
  var min  = 0;
  var hour = 0;
  function clock(sec,min,hour) {
    minuteHand = $("#minute-hand");
    secondHand = $("#second-hand");
    hourHand   = $("#hour-hand");

    minuteHand.css('transform', 'rotate(' + min + 'deg)');
    secondHand.css('transform', 'rotate(' + sec + 'deg)');
    hourHand.css('transform', 'rotate(' + hour + 'deg)');
  }

  $("body").on("click", function() {
    setInterval(function() {
      sec += 6;
      min += 6/60;
      hour += 12/360;
      clock(sec,min,hour);
    }, 1000);
  });

})