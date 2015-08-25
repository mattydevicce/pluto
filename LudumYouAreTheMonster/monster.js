jQuery(function(){
  // Making my triangle
  pointer = $(".pointer");
  var startDegree = 0;
  function spin(currentNumberOfSpins) {
    // Going to make my triangle spin in a cirlce
    var randomDegree = Math.round(Math.random()*360);
    // I set the spin to go faster so randomdegree needs to be divisible by 4
    // and this if statement fixes the random degree so the interval will end
    if (randomDegree % 4 != 0) {
      randomDegree -= (randomDegree % 4);
    }
    var randomNumberOfSpins = Math.ceil(Math.random()*5 + 2);
    refreshIntervalId = setInterval(function() {
      if (startDegree == randomDegree && currentNumberOfSpins == randomNumberOfSpins) {
        clearInterval(refreshIntervalId);
      } else {
        if (startDegree > 360) {
          startDegree = 0;
          pointer.css('transform', 'rotate(' + startDegree + 'deg)')
          currentNumberOfSpins += 1;
        } else {
          startDegree += 4;
          pointer.css('transform', 'rotate(' + startDegree + 'deg)');
        }
      }
    }, 1)
  }
  

  // Make rules
  var ruleText   = $(".rule-text");
  var ruleList   = $(".rule-list");
  var ruleButton = $(".rule-button");
  ruleButton.on("click", function(ruleMakeEvent) {
    ruleMakeEvent.preventDefault();
    if (ruleText.val() == '') {
      return
    }
    var makeRule = $("<li class='rule-single'></li>");
    makeRule.text(ruleText.val() + '  ');
    
    // Making a checkbox to add to use a rule

    var useRule = $("<input type='checkbox' class='rule-in-use' checked> Use rule </input>");
    useRule
    makeRule.append(useRule);

    // Making a button so you can delete rules
    var deleteButton = $("<button class='delete-button'>Delete</button>");
    makeRule.append(deleteButton);
    ruleText.val('');
    ruleList.append(makeRule)
    deleteButton.on("click", function(deleteEvent) {
      deleteEvent.preventDefault();
      makeRule.remove();
    });
  
    // Lets split the circle up
    var circle        = $(".circle");
    var numberOfRules = $(".rule-single").length;
    var makeASection = $("<div class='sect'></div>");
    if (numberOfRules == 1){
      circle.prepend(makeASection);
    } else if (numberOfRules == 2) {
      $(".sect:first-child").css('border-top','300px solid transparent')
    } 

  });

  $(".spin").on("click", function() {
    spin(0);
  });
})