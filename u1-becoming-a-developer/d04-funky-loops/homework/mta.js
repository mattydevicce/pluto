var getOn, getOff, line1, line2, numberOfStops, numberOfStops2, alternateTime;

nLineStops   = ['Times Square', '34th', '28th-n', '23rd-n', 'Union Square', '8th'];
lLineStops   = ['8th Ave', '6th Ave', 'Union Square', '3rd Ave', '1st Ave'];
sixLineStops = ['Grand Central', '33rd', '28th-six', '23rd-six', 'Union Square', 'Astor Place'];
sShuttle     = ['Times Square', 'Grand Central'];



// Asked what line they want to get on
line1 = prompt("What line would you like to get on?\nPlease enter either N, L or six.");
alert("You chose the " + line1 + "line");
line1 = getLine(line1);
// List of all stops on that line
for (var i = 0; i < line1.length; i++ ) {
  console.log(line1[i]);
}
// Enter what stop you want to get on
getOn = prompt(line1 + "\nWhat stop would you like to get on?");

// Enter what line they want to get off
line2 = prompt("What line would you like to get on?\nPlease enter either N, L or six.");
alert("You chose the " + line2 + "line");
line2 = getLine(line2);

// If statement to see if they have chosen the same line or different.. easiest way to calculate it
if ( line1 === line2 ) {
  getOff = prompt(line1 + "\nWhat stop would like to get off?");
  numberOfStops = Math.abs(line1.indexOf(getOn) - line2.indexOf(getOff));
  alert(numberOfStops + " is how many stops \
you have on your trip");

  tripTime = transferTime(line1, getOn, getOff)+15*numberOfStops;
  alert("The time your trip should take is: " + tripTime + "seconds");
} else {
  // List of all stops on line they want to get off
  for (var i = 0; i < line2.length; i++ ) {
    console.log(line2[i]);
  }
  // User enter stop which you want to get off
  getOff = prompt(line2 + "\nWhat stop would you like to get off?");


  tripTime = transferTime(line1,getOn,'Union Square') + transferTime(line2,'Union Square', getOff) + 240;

  // Calling the alternate route to see which one is a shorter trip
  alternateTime = alternateRoute(line1, line2, getOn, getOff);
  
  if (tripTime < alternateTime){
    // They are using strictly the subways

    // Number of stop going to Union square
    numberOfStops = Math.abs(line1.indexOf(getOn)-line1.indexOf('Union Square')) ;
    numberOfStops2 = Math.abs(line2.indexOf('Union Square') - line2.indexOf(getOff));
    // User is told number of stops on their trip!
    alert("You go on at " + getOn + " on the line.");
    alert("You go off at " + getOff + " on the line.");
    // Need to check if the same line or different.. the calculations will be different
    alert("Ride " + numberOfStops + " stops, then transfer at Union Square:  " + numberOfStops2 + "is how many stops you have left on your trip");   
    alert('Your total trip time is ' + tripTime + " seconds.");
  } else {
    // They are taking the s shuttle now..


    // Number of stops until Times Square or Grand Central
    if (line1 == nLineStops){
      numberOfStops = Math.abs(line1.indexOf(getOn)-line1.indexOf('Times Square'));
      numberOfStops2 = Math.abs(line2.indexOf('Grand Central') - line2.indexOf(getOff));
    } else {
      numberOfStops = Math.abs(line1.indexOf(getOn)-line1.indexOf('Grand Central'));
      numberOfStops2 = Math.abs(line2.indexOf('Times Square') - line2.indexOf(getOff));      
    }
    alert('You are to take the S shuttle since it is faster');
    alert('Ride ' + numberOfStops + ' stops, then hit the S shuttle up, then go ' + numberOfStops2 + ' stops' );

    alert('Your total trip time is ' + alternateTime + " seconds.");
  }
}

// This function gets what line they are riding on since we called it twice... dont wanna repear ourselves
function getLine(line) {
  if ( line.toLowerCase() === 'n') {
    return nLineStops;
  } else if ( line.toLowerCase() === 'l' ) {
    return lLineStops;
  } else if ( line.toLowerCase() === 'six' ) {
    return sixLineStops;
  } else {
    console.log("You chose a wrong line of train.. here is a random line!")
    return randomLine();
  }
}

// Make a function that will index the start and stop of the tansfers
// and take the line, and calculate the time it takes to go from each
// stop blahh
function transferTime(line, start, stop){
  var counter, beginTime, endTime, tripTime;
  tripTime = 0;
  var nLine = [80, 36, 44, 75, 66];
  var lLine = [64, 40, 100, 39];
  var sixLine = [30, 27, 48, 98, 122];
  
  beginTime = line.indexOf(start);
  endTime = line.indexOf(stop);
  // If statement to check if stop is before or after the other
  if ( beginTime - endTime > 0) {
    for(var i = endTime; i<beginTime; i++) {
      if ( line == nLineStops) {
        tripTime += nLine[i]+15;
      } else if ( line == lLineStops) {
        tripTime += lLine[i]+15;
      } else {
        tripTime += sixLine[i]+15;
      }
    }
  } else {
    for(var j = beginTime; j<endTime; j++) {
      if ( line == nLineStops) {
        tripTime += nLine[j]+15;
      } else if ( line == lLineStops) {
        tripTime += lLine[j]+15;
      } else {
        tripTime += sixLine[j]+15;
      }
    }
  }
  return tripTime
}

// Calculating bonus 2: s line transfer time

function alternateRoute(line1, line2, start, stop){
  var beginTime, endTime, alternateTripTime;
  var nLine = [80, 36, 44, 75, 66];
  var sixLine = [30, 27, 48, 98, 122];
  alternateTripTime = 0;
  beginTime = line1.indexOf(start);
  endTime = line2.indexOf(stop);
  // checking which stop is which and looping the time to add to alternatetriptime
  if (line1 == nLineStops){ 
    for (var i=0; i<beginTime; i++){
      alternateTripTime += nLine[i] + 15;
    }
    for (var j=0; j<endTime; j++){
      alternateTripTime += sixLine[j] + 15;
    }
  } else {
    for (var i=0; i<endTime; i++){
      alternateTripTime += nLine[i] + 15;
    }
    for (var j=0; j<beginTime; j++){
      alternateTripTime += sixLine[j] + 15;
    }
  }
  // Need to add the s line trip plus the transfer times.
  // Need to check if they are moving onto other stops or not

  if (beginTime > 0){
    alternateTripTime += 130;
  }
  if (endTime > 0){
    alternateTripTime += 205;
  }
  return (alternateTripTime+115);
}
// Added this for fun, do not need really
function randomLine(){
  var randomLine = Math.random();
  if ( randomLine < 0.33) {
    return nLineStops;
  } else if ( 0.33 <= randomLine && randomLine < 0.66 ) {
    return lLineStops;
  } else {
    return sixLineStops;
  }
}