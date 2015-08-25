jQuery(function(){
  var wayNoWay = $("button.way-no-way");
  var wayNoWayClickCounter = 1;
  wayNoWay.on('click',function(){
    wayNoWayClickCounter += 1;
    if (wayNoWayClickCounter % 2 == 0) {
      wayNoWay.text('way');
    } else {
      wayNoWay.text('no way');
    };
  });

  var spanName  = $("span.name");
  var inputName = $("input.input-name")
  spanName.on("click", function() {
    spanName.addClass("hidden");
    inputName.removeClass("hidden")
    inputName.val(spanName.text());
  })

  inputName.keypress(function(event) {
    if ( event.which == 13) {
      inputName.addClass("hidden");
      spanName.removeClass("hidden");
      spanName.text(inputName.val());
    }
  })

  extremeCloseUp = $("img.extreme-closeup");
  extremeCloseUp.mouseup(function(event) {
    var zoomIn = true;
    var zoomLevel = 1;
    refreshIntervalId = setInterval(function(){
      var randomZoomIn = Math.ceil(Math.random()*5+2);
      if (zoomIn) {
        extremeCloseUp.css('transform', 'scale('+ zoomLevel +')');
        zoomLevel += 0.25;
        if (zoomLevel == randomZoomIn) {
          zoomIn = false;
        }
      } else {
        extremeCloseUp.css('transform', 'scale('+ zoomLevel +')');
        zoomLevel -= 0.25;
        if (zoomLevel == 1) {
          clearInterval(refreshIntervalId);
        }
      }
    }, 100 )
  })

  inputPhrase = $("input.input-phrase");
  inputPhrase.keypress(function(event) {
    if ( event.which == 13) { 
      var pTag = $("<p></p>");
      pTag.text(inputPhrase.val());
      pTag.on("click", function(){
        text = pTag.text();
        pTag.text(text + '... NOT');
      })
      pTag.appendTo($("div#phrases"));
      inputPhrase.val('');
    }
  })


  // Tried the bonus real quick but failed since you cant iterate over the $("p")
  var numOfPTags = 0;
  var PTags = $("p");
  PTags.forEach(function(element) {
    var splitElement = element.split(' ');
    splitElement.forEach(function(word) {
      if (word == 'NOT') {
        count += 1;
      }
    })
  })

  if (numOfPTags >= 5) {
    $("div.flash").addClass('show');
  }
  setTimeout(function() {
    $("div.flash").removeClass('show');
  }, 3000);

})