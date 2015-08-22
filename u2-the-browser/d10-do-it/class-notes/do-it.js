jQuery(function() {
  
  inputTask = $("#task"); 
  $("#taskButton").on("click", function(event) {
    event.preventDefault();
    if (!inputTask.val()) {
      return
    };
    li = $("<li></li>");
    li.text(" " + inputTask.val());
    check = $("<input type='checkbox'/>");
    li.prepend(check);
    $("#task-list").prepend(li);
    $("#task").val('');

    $(check).on('click', function() {
      li.toggleClass("did-it");
    })
  })


  inputTask.keydown(function(event) {
    if (event.which == 49){   
      event.preventDefault();
      $("#taskButton").click();
    }
  })  
})