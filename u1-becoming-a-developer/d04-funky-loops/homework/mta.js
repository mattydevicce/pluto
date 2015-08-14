var getOn, getOff, line1, line2;

nLineStops   = ['Times Square', '34th', '28th-n', '23rd-n', 'Union Square', '8th'];
lLineStops   = ['8th Ave', '6th Ave', 'Union Square', '3rd Ave', '1st Ave'];
sixLineStops = ['Grand Central', '33rd', '28th-six', '23rd-six', 'Union Square', 'Astor Place'];

// Asked what line they want to get on
line1 = prompt("What line would you like to get on?\nPlease enter either N, L or six.");
console.log("You chose the " + line1 + "line");
line1 = getLine(line1);
// List of all stops on that line
for (var i = 0; i < line1.length; i++ ) {
  console.log(line1[i]);
}
// Enter what stop you want to get on
getOn = prompt("What stop would you like to get on?");

// Enter what line they want to get off
line2 = prompt("What line would you like to get on?\nPlease enter either N, L or six.");
console.log("You chose the " + line2 + "line");
line2 = getLine(line2);

// If statement to see if they have chosen the same line or different.. easiest way to calculate it
if ( line1 === line2 ) {
  getOff = prompt("What stop would like to get off?");
  console.log(Math.abs(line1.indexOf(getOn) - line2.indexOf(getOff)) + " is how many stops \
you have on your trip");

  tripTime = transferTime(line1, getOn, getOff);
  console.log("The time your trip should take is: " + tripTime + "seconds");
} else {
  // List of all stops on line they want to get off
  for (var i = 0; i < line2.length; i++ ) {
    console.log(line2[i]);
  }
  // User enter stop which you want to get off
  getOff = prompt("What stop would you like to get off?");
  // User is told number of stops on their trip!
  console.log("You go on at " + getOn + " on the line: " + line1);
  console.log("You go off at " + getOff + " on the line: " + line2);
  // Need to check if the same line or different.. the calculations will be different
  console.log(Math.abs(line1.indexOf(getOn)-line1.indexOf('Union Square')) + " stops, then \
transfer at Union Square:  " + Math.abs(line2.indexOf('Union Square') - line2.indexOf(getOff))+ "\
 is how many stops you have left on your trip");

  tripTime = transferTime(line1,getOn,'Union Square') + transferTime(line2,'Union Square', getOff);

  console.log('Your total trip time is ' + tripTime + " seconds.");
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
  var counter, beginTime, endTime;
  tripTime = 0;
  var nLine = [80, 36, 44, 75, 66];
  var lLine = [64, 40, 100, 39];
  var sixLine = [30, 27, 48, 98, 122];
  
  beginTime = line.indexOf(start); //5
  endTime = line.indexOf(stop);    //4
  // If statement to check if stop is before or after the other
  if ( beginTime - endTime > 0) {
    for( i = endTime; i<beginTime; i++) {
      if ( line == nLineStops) {
        tripTime += nLine[i];
      } else if ( line == lLineStops) {
        tripTime += lLine[i];
      } else {
        tripTime += sixLine[i];
      }
    }
  } else {
    for( i = beginTime; i<endTime; i++) {
      if ( line == nLineStops) {
        tripTime += nLine[i];
      } else if ( line == lLineStops) {
        tripTime += lLine[i];
      } else {
        tripTime += sixLine[i];
      }
    }
  }
  return tripTime;
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