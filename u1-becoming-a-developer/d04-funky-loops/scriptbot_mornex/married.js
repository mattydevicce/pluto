var script = "Opening theme and titles.\n";


var whinnyPeg = prompt("Is Peggy whining about something?");
if (whinnyPeg == 'yes'){
  script += "Peggy starts to whine.\n";
  script += "Al is mean to Peggy\n";
} else {
  script += "The kids start to whine.\n";
  script += "Al is mean to them.\n";
}
script += "Roll credits.\n";

console.log("Here is the script");
console.log(script);