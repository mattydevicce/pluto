// Round 1
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


// Round 2
function transmogrifier(num1, num2, num3){
  return Math.pow((num1 * num2),num3);
}


// Round 3
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


// Round 4
function digitSum(num) {
  var numString;
  numString = (num).toString();
  total = 0;
  for (i=0; i<numString.length; i++){
    total += parseInt(numString[i])
  }
  return total
}


//Round 5
function wordReverse( word ){
  var newWord=''
  for (i=word.length-1; i>-1; i--){
    newWord += word[i];
  }
  return newWord
}


// Round 6... first one creates an unknown inifinte loop
// function letterReverse( sentence ){
//   var newSentence = '';
//   var wordToBeReversed ='';
//   for (i=0; i<sentence.length; i++){
//     if (sentence[i] === ' '){
//       newSentence += wordReverse(wordToBeReversed);
//       wordToBeReversed = '';
//     }
//   wordToBeReversed += sentence[i];
//   }
//   return newSentence;
// }

// Round 6 that works
function letterReverse( sentence ){
  var wordArray = [];
  var word = '';
  for (i=0; i<sentence.length; i++){
    if (sentence[i] === ' '){
      wordArray.push(word);
      word='';
    } else {
      word += sentence[i];
    }
  }
  var newSentence = '';
  wordArray.push(word)
  console.log(wordArray.length)
  for( j=0; j<wordArray.length; j++){
      newSentence += wordReverse(wordArray[j]);
      newSentence += ' ';
  }
  return newSentence;
}


// Round 7
function longest( wordsInArray ){
  var longJohnSilver = '';
  for (i=0; i<wordsInArray.length; i++){
    if (wordsInArray[i] > longJohnSilver){
      longJohnSilver = wordsInArray[i];
    }
  }
  return longJohnSilver;
}


