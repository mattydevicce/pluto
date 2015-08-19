// ** Iterators ** //
// Knows the starting point, its current position, and the next position
// Very similar to loops, but has less setup (i.e. declaring var i=0, i<length, i++)
// For objects, attributes cannot be accessed through the index, so we need an iterator

// ** FOR EACH ** //
var meals = ['American', 'Italian', 'Chinese',
              'Thai', 'Indian', 'Japanese'];

// iterates through each element in the meals array and prints the value
meals.forEach(function(meal) {
   console.log(meal);
});

// ** FOR IN ** //
// Didn't have a chance to go over this in class.
// This is an Iterator (not a for loop) that can be used to access every Object key

var person = {
  name: 'BigBoss',
  gender: 'male'
};

for(attribute in person) {
  console.log('key', attribute); // attribute variable is the key, which is a string
  console.log('value', person[attribute]); // the attribute(key) can be used to access the person object via bracket notation
}


// ** MAP ** //
var meals = [
  { type: 'American', fastFood: true },
  { type: 'Italian', fastFood: true },
  { type: 'Thai', fastFood: true }
];

// adds `price` attribute to meals
// map will return an array with the update
// it will also modify meals (original array of objects)
var newMeals = meals.map(function(meal) {
    meal.price = 100;
    return meal;
});
console.log(meals, newMeals); // bot

// ** FILTER ** //
// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// Objective: want to return array elements that have sauce

var mealIngredients = [
  ['milk', 'cereal'],
  ['meat', 'sauce', 'bread'],
  ['pasta', 'sauce', 'meat']
];

// Approach #1 - define validator function separately
var validator = function(mealIngredient) {
  for(var i=0; i<mealIngredient.length; i++) {
    if(mealIngredient[i] === 'sauce') {
      return true;
    }
  }
  return false;
}

var saucyMeals1 = mealIngredients.filter(validator);
console.log(saucyMeals1);

// Approach #2 - define validator as anonymous function
var saucyMeals2 = mealIngredients.filter(function(mealIngredient) {
  for(var i=0; i<mealIngredient.length; i++) {
    if(mealIngredient[i] === 'sauce') {
      return true;
    }
  }
  return false;
});
console.log(saucyMeals2);
