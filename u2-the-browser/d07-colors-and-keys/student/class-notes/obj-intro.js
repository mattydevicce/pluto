<<<<<<< HEAD
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
=======
// Need better solution
// var car = ['Tesla', 'sport', '4-wheel drive'];
// var brand = car[0];
// var style = car[1];

// var car = {
//   brand: 'Tesla',
//   class: 'sport',
//   color: 'silver',
//   horsepower: 435,
//   cost: 80000,
//   isElectric: true
// };

// Key  : Value
// Brand: Tesla
// Model: Model S
// Class: sport
// Color: silver
// Horse Power: 999
// Cost: 80000

var tesla = {
              brand: 'Tesla',
              model: 'Model S',
              class: 'sport',
              color: 'silver',
              horsepower: 435,
              cost: 80000,
              isElectric: true,
              mileage: 0,
              drive: function() {
                console.log('drive');
              },
              brake: function() {
                console.log('brake');
              }
            };

var bmw = {
  brand: 'BMW',
  model: 'M5',
  class: 'sport',
  color: 'blue',
  horsepower: 999,
  cost: 90000,
  isElectric: false,
  mileage: 0,
  drive: function() {
    console.log('drive');
  },
  brake: function() {
    console.log('brake');
  }
};

var ford = {
  brand: 'Ford',
  model: 'Mustang',
  class: 'sport',
  color: 'red w/ white stripe & blue stars',
  horsepower: 1000,
  cost: 50000,
  isElectric: false,
  mileage: 0,
  drive: function() {
    this.mileage++;
    this.cost-= 1;
    console.log('drive');
  },
  brake: function() {
    console.log('brake');
  },
  incidents: [
    { date: new Date(2012, 12, 28), description: 'drunk driving'},
    { date: new Date(2013, 12, 28), description: 'arrested for DUI'},
  ]
};
>>>>>>> fa262b3633b5f821f0bd15d4dad84ea2fa712077
