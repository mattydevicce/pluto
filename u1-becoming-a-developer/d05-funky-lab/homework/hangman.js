function setWord(currentGuesses, correctLetter, wholeWord){
  var splitWhole, splitCurrent, joinCurrent;
  // Making my own split function since I dont have internet to look it up
  // Splits currentGuesses and wholeWord into arrays to be checked and replaced
  splitWhole = splitt(wholeWord);
  splitCurrent = splitt(currentGuesses);
  console.log(splitCurrent);

  // Goes by each letter in wholeWord and checks to see if correctLetter will
  // match it, then replaces the index in splitCurrent to the letter
  for (var i=0; i<splitwhole.length; i++){
    if (splitWhole[i] === correctLetter){
      splitCurrent[i] = correctLetter;
    }
  }
  // Joins the array to make a string
  joinCurrent = joinn(splitCurrent);
  console.log(joinCurrent);

  return currentGuesses

}

// Initialized a string to be '_ _ _' instead of 'abc'..
function setInitialState(wholeWord){
  var blankAnswer = '';
  for (var i=0; i<wholeWord.length; i++){
    if (wholeWord !== ' '){
      blankAnswer += '_';
    } else {
      blankAnswer += ' ';
    }
    
  }
  return blankAnswer
}

function randomWord(wordsArray){
  randomChoice = Math.ceil(Math.random()*wordsArray.length);
  return wordsArray[randomChoice]
}


function splitt(word){
  var splitArray = [];
  for (var i=0; i<word.length; i++){
    splitArray.push(word[i]);
  }
  return splitArray;
}

function joinn(array){
  var joinArray = '';
  for (var i=0; i<array.length; i++){
    joinArray += array[i];
  }
  return joinArray
}