var blob = [1, 'two', 3, false, 42, 'four', true];
var numbers = [];

for (var i=0; i<blob.length; i++){

  if (typeof( blob[i]) !== 'number'){
    blob.splice(i,1);
  }
}
console.log(blob);