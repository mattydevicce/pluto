function r2d2() {
  alert("```(beep-boop whrrrrrr bleep) Welcome to the R2D2 calculator!```");
}

function factorial (x){
  if (x==1){
    return(x);
  } else {
    return x * factorial((x-1));
  }
}
function r2Calculator(){
  var operator, operand1, operand2, solution;
  while ( operator !== 'q') {
    
    operator = prompt("Please enter which operator you would like to use ('+', '-', '*', '/', '**' \
factorial). Enter 'q' to exit.");
    if (operator === 'q'){
      break;
    } else if (operator === 'factorial') {
      operand1 = prompt("Please enter the number you want the factorial of.");
    } else {
      operand1 = prompt("Please enter the first operand.");
      operand2 = prompt("Please enter the second operand.");
    }

    if (operator === '+') {
      solution = operand1 + operand2;
      alert("The solution to " + operand1 + operator + operand2 + " = " + solution);
    } else if (operator === '-') {
      solution = operand1 - operand2;
      alert("The solution to " + operand1 + operator + operand2 + " = " + solution);
    } else if (operator === '*') {
      solution = operand2 * operand1;
      alert("The solution to " + operand1 + operator + operand2 + " = " + solution);
    } else if (operator === '/') {
      solution = operand1 / operand2;
      alert("The solution to " + operand1 + operator + operand2 + " = " + solution);
    } else if (opertor === '**') {
      solution = Math.pow(operand1, operand2);
      alert("The solution to " + operand1 + operator + operand2 + " = " + solution);
    } else if (operator === 'factorial'){
      factorial(operand1);
    } else {
      alert('(whheeaaarrrrr! beee-ooohhh) You did not enter a viable operator!')
    }
  }
}

r2d2();
r2Calculator();
