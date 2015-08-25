$(function() {


  $("#level2").click(function(event) {
    alert("clicked on " + $(event.currentTarget).attr('id'));
  })
  $("#level1").click(function(event) {
    alert("clicked on " + $(event.currentTarget).attr('id'));
  })
  $("body").click(function(event) {
    alert("clicked on body");
  })


});
