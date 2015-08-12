function gunfight() {
  var calc;
  for (i=0;i<20;i++){
    calc = Math.random();
    alert('Gunfight ensues');
    alert('(zap)');
    if (calc < 0.20) {
      alert('Holy Moly You killed IG-88A!');
      break; 
    } else {
      return 'fail'
    }
  }
}

function encounter() {
  var success;
  alert("You are mine at last, Solo!");
  success = gunfight();
  if (success === 'fail') {
    alert('Wow what are the chances you missed that many times!');
    alert('Jabba the Hutt will pay handsomely...');
  }
}

function ig_88a() {
  var name;
  name = prompt("Freeze! Who are you?").toString();
  if (name.toLowerCase() === 'han solo') {
    encounter();
  } else if (name === '(zap)'){
    gunfight();
  } else {
    alert("You must die! (zap zap kaboom)");
    ig_88a();
  }
}
ig_88a();