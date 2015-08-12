function c3Intro(){
  alert("Hello, I am C-3P0, human-cyborg relations.");
}

function userName(){
  var uName, uAnswer, correctAnswers, incorrectCorrectAnswers, didNotHear, falseStatement;
  uName = prompt("And your name is?");
  if ( uName === 'Obi-Wan Kenobi' ) {
    alert("Oh, marvelous! Simply marvelous! Say hello to R2-D2; he's been looking all over for you!");
  } else {
    uAnswer = prompt("It is a pleasure to meet you, " + uName + ". I'm terribly sorry for prying, but you don't by any chance go by the alias of Obi-Wan Kenobi, do you?");
    correctAnswers = ['yes', 'YES', 'Yes', 'y', 'Y'];
    incorrectCorrectAnswers = ['no', 'NO', 'No', 'n', 'N'];
    didNotHear = true;
    falseStatement = true;
    for (i=0; i<correctAnswers.length; i++){
      if ( uAnswer === correctAnswers[i] ) {
        alert("Oh, marvelous! Simply marvelous! Say hello to R2-D2; he's been looking all over for you!");
        falseStatement = false;
        didNotHear = false;
      }
    }
    for (j=0; j<incorrectCorrectAnswers.length; j++){
      if ( uAnswer === incorrectCorrectAnswers[j] ) {
        alert("I've really enjoyed speaking with you, " + uName + ", but if you'll please excuse me, I have to help my friend find someone named Obi-Wan Kenobi.");
        didNotHear = false;
      }
    }
    if ( falseStatement ) {
      alert("Well R2, I suppose we'll just have to keep looking. R2-D2: (Agreeable droid noises)")
      if ( didNotHear ) {
        alert("I'm sorry, I didn't hear you correctly. I only respond to 'yes' or 'no'...")
      }
    }
  }
}
userName();

