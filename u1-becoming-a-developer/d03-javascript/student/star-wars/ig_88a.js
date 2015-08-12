function ig88aDestroyerOfAll() {
  var duelist, escapeChance;
  while(true) {
    duelist = prompt('Freeze! Who are you?').toString();
    if (duelist.toLowerCase() !== 'han solo') {
      alert("You must  die! (zap zap kaboom)")
    } else if (duelist === '(zap)') {
      alert("Gunfight ensues!");
      for(i=0; i<20; i++){
        alert('(zap)');
      } 
      alert("You have narrowly escaped the wrath of IG-88A");
    } else if (duelist === 'Han Solo') {
      alert("You are mine at last, Solo!");
      for(i=0; i<20; i++){
        alert('(zap)');
      }
      escapeChance = Math.random();
      if (escapeChance < 0.5) {
        alert("I'll get you next time, Solo");
      } else {
        alert('Solo is caught! Jabba the Hutt will pay handsomely...');
        break;
      }
    }
  }
}


ig88aDestroyerOfAll();