var op1, op2, answer, playAgain,calc=true;
while(calc) {
  op1 = Math.ceil(Math.random()*10);
  op2 = Math.ceil(Math.random()*10);  
  answer = prompt("What is the solution to " + op1 + " * " + op2 + "?");
  if (op1 * op2 === parseInt(answer)) {
    alert("correctamundo");
  } else {
    alert("*BEEP* wrong... the answer is " + (op1 * op2));
  }

  playAgain = prompt("Would you like to play again?");
  if (playAgain !=='y'){
    calc=false;
  }
}