// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(function() {
  $("button").click(function(event){
    candidateId = event.currentTarget.dataset.id
    $.ajax({
      url: '/candidates/vote',
      method: 'POST',
      data: {id: candidateId},
      success: function(data, status, xhr) {
        $('.votes').text(data['votes'])
        console.log('Very Nice!', data);
        
      },
      error: function(xhr, status, error) {
        console.log("Yikes!", error);
      }
    });
  })

});