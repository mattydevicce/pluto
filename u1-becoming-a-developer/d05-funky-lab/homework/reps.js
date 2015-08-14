function fizzbuzzer(number){
  if ( number % 3 === 0 && number % 5 == 0 ){
    return 'FizzBuzz';
  } else if ( number % 3 == 0 ){
    return "Fizz";
  } else if ( number % 5 == 0 ){
    return "Buzz";
  } else {
    return "McClane";
  }
}

function transmogrifier(num1, num2, num3){
  return Math.pow((num1 * num2),num3);
}

function toonify(accent, sentence){
  var newsentence='';
  if ( accent === 'daffy' ){
    for (i = 0; i<sentence.length; i++){
      if ( sentence[i] == 's'){
        newsentence+='th';
      } else {
        newsentence+=sentence[i];
      }
    }
  } else if ( accent === 'elmer' ){
    for (i = 0; i<sentence.length; i++){
      if ( sentence[i] == 'r'){
        newsentence+='w';
      } else {
        newsentence+=sentence[i];
      }
    }
  } else {
    return sentence;
  }
  return newsentence
}

function digitSum(num) {
  var numString;
  numString = (num).toString();
  total = 0;
  for (i=0; i<numString.length; i++){
    total += parseInt(numString[i])
  }
  return total
}

function wordReverse( word ){
  newWord=''
  console.log(word)
  for (i=0; i=word.length; i++){
    console.log(word[i])
  }
  return newWord
}

wordReverse('abcd')