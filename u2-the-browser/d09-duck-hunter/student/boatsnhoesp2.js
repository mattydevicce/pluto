var ships = [
  {
    name: 'The Titanic',
    lost: 1912
  },
  {
    name: 'The Santa Maria',
    lost: 1492
  },
  {
    name: 'HMS Bounty',
    lost: 1790
  },
  {
    name: 'Old Ironsides',
    lost: null
  },
  {
    name: 'Potemkin',
    lost: 1923
  },
  {
    name: 'USS Monitor',
    lost: 1862
  },
  {
    name: 'HMS Dreadnought',
    lost: 1923
  },
  {
    name: 'Bismarck',
    lost: 1941
  },
  {
    name: 'HMS Beagle',
    lost: 1870
  },
  {
    name: 'Nuestra Señora de Atocha',
    lost: 1622
  }
]

ships.forEach(function(element){
  console.log(element.name)
})

var nameMapArray = ships.map(function(element,index,array){
  return element.name;
});

var yearMapArray = ships.map(function(element){
  return element.lost;
});


var lostAfter1900 = function(element){
  if (element.lost >= 1900){
    return element;
  }
}
var lostAfter = ships.filter(lostAfter1900)

var lostBefore1900 = function(boat){
  if (boat.lost <= 1900){
    return boat;
  }  
}

var lostBefore = ships.filter(lostBefore1900);

var lostBetween = function(element){
  return (element.lost < 1899 && element.lost > 1800);
}

var lostBetweenDates = ships.filter(lostBetween);
var hms = function(element){
  var hmsChecker = '';
  for(var i=0; i<element['name'].length; i++){
    if (element['name'][i] === ' '){
      hmsChecker = '';
    }
    hmsChecker += element['name'][i];
    if (hmsChecker === 'HMS'){
      return element;
    }
  }
};
var hMSBoats = ships.filter(hms);
console.log(nameMapArray);
console.log(yearMapArray);
console.log(lostAfter);
console.log(lostBefore);
console.log(lostBetweenDates);
console.log(hMSBoats);