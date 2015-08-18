// var car = { 
//   brand: 'Tesla',
//   class: 'sports',
//   cost: 80000
// }


var cars = [{ brand: 'Tesla', class: 'sport', cost: 80000},
            { brand: 'BMW' , class: 'sport', cost: 90000},
            { brand: 'Ford', class: 'sport', cost: 10}];
for(var i=0; i<cars.length; i++){
  ke = Object.keys(cars[i]);
  for (var j=0; j<ke.length; j++){
    console.log(ke[j] + ': ' + cars[i][ke[j]]);
  }
}