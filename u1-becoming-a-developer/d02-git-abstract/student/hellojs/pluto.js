<<<<<<< HEAD
var message, name;
name = prompt("What is your name?");
alert("Hello "+name);
message = name + " take out the trash";
alert(message.toUpperCase());


bags = parseInt(prompt("How many bags of trash are there?"));
alert("It should take you " + (bags * 5) + " minutes.");
=======
var message, name, bags, minutes;

// 1. PROMPT for user's name
name = prompt("What is your name?");

// 2. ALERT "TAKE OUT THE TRASH, [NAME]"
alert(("take out the trash, "+name).toUpperCase())

bags = parseInt(prompt("How many bags of trash are there?"));

// Alert "It should take you [MINUTES] minutes", where
// [MINUTES] is the number of bags multiplied by 5
minutes = bags * 5;

alert("It should take you "+minutes+" minutes");
>>>>>>> fa262b3633b5f821f0bd15d4dad84ea2fa712077
