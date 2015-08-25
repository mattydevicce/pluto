// 1.
var numArray = []
for( var i=0; i<20; i++) {
  numArray.push(i+1);
}

var evenOrOdd = numArray.forEach(function(element) {
  if ( element % 2 ==0 ) {
    console.log(element, "is even");
  } else {
    console.log(element, "is odd");
  }
})

// 2.

var sampleBalances  = [100, 25, 3000, 45, 36];
var newBalance = sampleBalances.map(function(element) {
  return element - 14;
})

console.log(newBalance);

// 3.

var range = function(firstInt, lastInt) {
  var rangeArray = [];
  for (var i=firstInt; i<=lastInt; i++) {
    rangeArray.push(i);
  }
  return rangeArray;
}

console.log(range(0,9));

//  4.

var lengths = function(arrayOfStrings) {
  var lengthOfStringArray = [];
  arrayOfStrings.forEach(function(element) {
    lengthOfStringArray.push(element.length);
  })
  return lengthOfStringArray;
}

console.log(lengths(["hello", "what", "is", "up", "dude"]));

//  5.

var names = ['Lichard', 'Kathew', 'Omily'];
var greatNames = names.map(function(element) {
  return element + ' the great';
})

console.log(greatNames);

// 6.

var meals = [
    ['milk', 'cereal'],
    ['meat', 'sauce', 'bread'],
    ['pasta', 'sauce', 'meat']
];

var saucyMeals = meals.filter(function(element) {
  var saucyy = element.map(function(ingredient) {
    if (ingredient == 'sauce') {
      return element;
    }
  return saucyy
  })
})

console.log(saucyMeals);


//  7.

var numbers = [1, 4, 9];

var squareRoots = numbers.map(function(element) {
  return Math.sqrt(element);
})

console.log(squareRoots);


// 8.


var createSquareGrid = function(length) {
  
  var wholeSquare = [];
  var number = 1;
  for(var i=0; i<length; i++) {
    var row = [];
    for(var j=0; j<length; j++) {
      row.push(number);
      number += 1;
    }
    wholeSquare.push(row);
  }
  return wholeSquare;
};

console.log(createSquareGrid(3));


// 9.

var consoleLogEach = function(array) {
  array.forEach(function(element) {
    console.log(element);
  });
  return "Look up ^^"
};

console.log(consoleLogEach(['pasta', 'sauce', 'meat']));


//  10.

var countTheNumber = function(array, count) {
  var funkyFresh = array.filter(function(element) {
    return element == count;
  })
  return funkyFresh.length
}


// Should log 5
console.log(countTheNumber([1,2,3,4,4,5,6,3,2,4,4,5,4],4))


 11.

var pluck = function(arrayOfObjects, property) {
  var filteredArray = arrayOfObjects.filter(function(element) {
    for(key in element) {
      if (key == property){
        return element[key];
      }
    }
  })
};
var pumpkinsRecords = [
  {title: "Gish", year: 1991, albumsSold: 534000},
  {title: "Siamese Dream", year: 1993, albumsSold: 1000037},
  {title: "Mellon Collie and the Infinite Sadness", year: 1995, albumsSold: 1000500},
  {title: "Adore", year: 1998, albumsSold: 300100},
  {title: "Machina", year: 2000, albumsSold: 200000},
  {title: "Machina II", year: 2000, albumsSold: 50000},
  {title: "Zietgiest", year: 2007, albumsSold: 250}
];
console.log(pluck(pumpkinsRecords, 'title'));

// 12.

// String.fromCharCode(unicodeValue)
var maxx = function(array) {
  var max = array[0] || array[0].charCodeAt(0);
  array.forEach(function(element,index) {
    if ( typeof element == "string") {
      if ( element.charCodeAt(0) > max ){
        max = element.charCodeAt(0);
      }
    } else {
      if ( element > max ) {
        max = element;
      }
    }
  })
  return max || String.fromCharCode(max);
}
var minMaxTestArray1 = [9, 10, 4, 3, 17, 13, 0, 2];
var minMaxTestArray2 = ['a', 'z', 'Z', 'c', 'e', 'E', 'f'];
console.log(maxx(minMaxTestArray1));
console.log(maxx(minMaxTestArray2));

// 13.
var minn = function(array) {
  var min = array[0] || array[0].charCodeAt(0);
  array.forEach(function(element,index) {
    if ( typeof element == "string") {
      if ( element.charCodeAt(0) < min ){
        min = element.charCodeAt(0);
      }
    } else {
      if ( element < min ) {
        min = element;
      }
    }
  })
  return min || String.fromCharCode(min);
}
console.log(minn(minMaxTestArray1));
console.log(minn(minMaxTestArray2));

// 14.