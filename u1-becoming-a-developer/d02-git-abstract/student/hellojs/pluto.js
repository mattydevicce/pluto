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
