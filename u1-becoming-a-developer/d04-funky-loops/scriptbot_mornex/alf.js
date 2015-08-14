var script = "Opening theme and titles.\n";
script += "ALF has a conversation with his family, and hatches a plan.\n";

var humanAlf = prompt("Does ALF pretend to be human? Yes or no");

if (humanAlf == 'yes') {
  script += "ALF puts on a trench coat and wanders around.\n";
  script += "ALF narrowly avoids being discovered.\n";
} else {
  script += "ALF makes a new friend.\n";
}

var catAlf = prompt("Does ALF try to eat the cat? Yes or no");

while (catAlf == 'yes'){
  script += "ALF tries to eat the cat. His family catches him.\n";
  catAlf = prompt("Does ALF try to eat the cat? Yes or no");  
}

script += "ALF learns a lesson about trust, and everyone laughs.\n";
script += "Roll credits.";

console.log("Here is the script");
console.log(script);
