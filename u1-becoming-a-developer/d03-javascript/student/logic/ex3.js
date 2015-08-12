var absence;



if (parseInt(prompt("Enter your grade.")) < 70 ||  (absence = parseInt(prompt("How many absences do you have?"))) > 4) {
  alert("You are failing!");
} else if (absence > 2|| prompt("Enter your tardies") > 4 ) {
  alert("Chronically late!")
  } else {
  alert("Woohoo you are passing!");
}
