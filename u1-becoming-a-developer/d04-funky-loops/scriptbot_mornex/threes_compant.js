var script = "Opening theme and credits.\n";

var feature = prompt("Who does this week feature? Chrissy or Janet?\n");

if (feature == "Chrissy") {
  script += "Chrissy has a problem.\n";
  script += "There is a bawdy situation involving Jack.\n";

  var muckJack = prompt("Does Jack muck it all up? Yes/no");
  if (muckJack == 'no') {
    script += "The problem solves itself.\n";
  } else {
    script += "Janet solves the problem and grows as a person.\n";
  }
} else {
  script += "Janet has a problem.\n";
  script += "Jack acts foolishly\n";
  script += "Janet solves the problem and grows as a person.\n";
} 

script += "Mr. Roper says something that is really uncomfortable.\n";
script += "Roll credits.";

console.log("Here is the script");
console.log(script);