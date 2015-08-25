// parallax code goes here

jQuery(function() {
  $(window).on("scroll", function(event) {
    var scrollValue = $(window).scrollTop();
    $(".bg").css('top', -1*scrollValue/3);
  })

})