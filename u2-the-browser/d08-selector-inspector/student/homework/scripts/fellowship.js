console.log("followship.js loaded");

var makeMiddleEarth = function(){
  
  for (var i=0; i<lands.length; i++){ 
    // Makes the article tag and adds land as a class
    actualTag = $("<article>");
    actualTag.addClass("land");

    // Makes an h1 tag with the name of the land in it
    hone = $("<h1>");
    hone.text(lands[i]);
    // Appens the h1 tag to article tag and then
    // appends article tag to sections tag

    actualTag.append(hone);
    $("#middle-earth").append(actualTag)    
  }  
  setTimeout(makeHobbits, 1000);

}
setTimeout(makeMiddleEarth, 1000)


var makeHobbits = function(){
  hobbitUL = $("<ul>");
  hobbitUL.attr("id","hobbitUL");
  for(var i=0; i<hobbits.length; i++){
    hobbit = $("<li>");
    hobbit.addClass("hobbit");
    hobbit.text(hobbits[i]);
    hobbitUL.append(hobbit);
  }
  $("article:first-child").append(hobbitUL);
  keepItSecretKeepItSafe();

}
function keepItSecretKeepItSafe() {
  theRing = $("<div>");
  theRing.attr("id", "the-ring");
  theRing.addClass("magic-imbued-jewelry");
  $("li.hobbit:first-child").append(theRing);
  $("#the-ring").click(function(){
    nazgulScreech();
  });
  setTimeout(makeBuddies,1000);
}

var makeBuddies = function(){
  asideTag = $("<aside>");
  uLTag = $("<ul>");
  for(var i=0; i<buddies.length; i++){
    lITag = $("<li>");
    lITag.addClass("buddy");
    lITag.text(buddies[i]);
    uLTag.append(lITag);
  }
  asideTag.append(uLTag);
  $("article:nth-child(2)").append(asideTag);
  setTimeout(beautifulStranger, 1000);
}

var beautifulStranger = function() {
  strider = $(".buddy:nth-child(4)");
  strider.text("Aragorn");
  strider.css("color","green");
  setTimeout(leaveTheShire, 1000);
}

var leaveTheShire = function(){
  hobbitSquad = $("#hobbitUL");
  $("article:nth-child(2)").append(hobbitSquad);
  setTimeout(forgeTheFellowShip, 1000);
}

var forgeTheFellowShip = function(){
  elloFellow = $("<div>");
  elloFellow.attr('id','the-fellowship');
  $("article:nth-child(2)").append(elloFellow);

  buddies = $(".buddy");
  hobbits = $(".hobbit");

  for(var i=0; i<buddies.length; i++){
    elloFellow.append(buddies[i]);
    alert("A buddy moved to the fellowship");
  }

  for(var j=0; j<hobbits.length; j++){
    elloFellow.append(hobbits[j]);
    alert("A hobbit moved to the fellowship");
  }
}






