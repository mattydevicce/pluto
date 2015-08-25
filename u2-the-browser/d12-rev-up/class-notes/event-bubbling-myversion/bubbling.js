$(function() {
<<<<<<< HEAD


  $("#level2").click(function(event) {
    alert("clicked on " + $(event.currentTarget).attr('id'));
  })
  $("#level1").click(function(event) {
    alert("clicked on " + $(event.currentTarget).attr('id'));
  })
  $("body").click(function(event) {
    alert("clicked on body");
  })


=======
  $('#level3').click(function(event) {
    alert('Clicked on ' + $(event.currentTarget).attr('id'));
  });

  $('#level2').click(function(event) {
    event.stopPropagation();
    alert('Clicked on ' + $(event.currentTarget).attr('id'));
  });

  $('#level1').click(function(event) {
    alert('Clicked on ' + $(event.currentTarget).attr('id'));
  });

  $('body').click(function(event){
    alert('Clicked on <body>');
  });
>>>>>>> 3bd9de8d7cfc73ca3bf6ae45a5d8331f39106552
});
