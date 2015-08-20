console.log("followship.js loaded");

var makeMiddleEarth = function(){
  
  for (var i=0; i<lands.length; i++){ 
    // Makes the article tag and adds land as a class
    actualTag = $("<article>");
    actualTag.addClass("land");
    actualTag.addClass(lands[i])

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
    hobbit.addClass(hobbits[i])
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
    lITag.addClass(buddies[i])
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
  }
  alert("All buddies moved to the fellowship");

  for(var j=0; j<hobbits.length; j++){
    elloFellow.append(hobbits[j]);
  }
  alert("All hobbits moved to the fellowship");

  setTimeout(theBalrog, 1000);
}

var theBalrog = function() {
  gandalf = $(".Gandalf").text('Gandalf the white');
  gandalf.css('border', '3px solid white');
  setTimeout(boromir, 1000);
}

var boromir = function() {
  alert("Horn of Gondor has been blown");
  boro = $(".Boromir");
  boro.css('text-decoration', 'line-through');
  boro.css('opacity', 0.3);
  setTimeout(itsDangerousToGoAlone, 1000);
}

var itsDangerousToGoAlone = function() {
  fro = $(".Frodo");
  sammy = $(".Samwise");
  modor = $(".Mordor");
  modor.append(fro);
  modor.append(sammy);
  doom = $("<div id='mount-doom'></div>");
  modor.append(doom);
  setTimeout(weWantsIt, 1000);
}

var weWantsIt = function() {
  gol = $("<div id='gollum'>Smeagol</div>");
  modor = $(".Mordor");
  doom = $("#mount-doom");
  familyJewels = $(".magic-imbued-jewelry");
  modor.append(gol);
  gol.append(familyJewels);
  doom.append(gol);
  setTimeout(thereAndBackAgain, 1000);
}

var thereAndBackAgain = function() {
  $("#gollum").remove();
  $("#the-ring").remove();
  $(".Shire").append($(".hobbit")); 
  $(".Mordor").addClass("collapse") 
}


