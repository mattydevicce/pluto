# Callbacks - Passing Procedures as Arguments

## Function Review
- Functions are procedures/subprograms/subroutines/methods. They allow programmers to to create well-defined code *modules*.
- Functions help programmers split a large problem into small chunks.
- Functions allow a programmer to use a well-defined routine multiple times.
- Functions use arguments to accept necessary **"input"**.
- If required, functions use a ```return``` statement to communicate **"output"** (not the *see it on the screen* type of output). Data that should be returned to the location that invoked the method should be sent via a ```return``` statement


## Review Problem
- Write a Mean function that expects an array of numbers as an argument.
- Add an array of grades to each student in the Classroom object included in the Exercises folder.
- Use the Mean function to output the average grade for each student. You should use descriptive output, i.e. "Student name in soandso class has an average grade of XXX"



##Functions are First-Class Objects
In JavaScript, functions are first-class objects. That means that you can treat them as other objects:

 ```js
var procedure = function outputPoem(){
    alert("Mary Had a Little Lamb");
}
console.log("data type of the procedure variable:", typeof(procedure));
console.log("contents of the procedure variable:", procedure);
console.log("name of the procedure referenced by the procedure variable:", procedure.name);
```

Importantly, you can pass a function as an argument to another function. Check out callback_demo.js

Maddingly, there soooo many different ways to declare a function: http://davidbcalhoun.com/2011/different-ways-of-defining-functions-in-javascript-this-is-madness/

## Arrays and ```for``` loops
A ```for``` loop is an excellent tool for repeating code. Arrays are excellent tools for organizing lists of related data. The two often go hand-in-hand.

Some array operations are so common that JavaScript provides built-in ways of expressing them succinctly:

## The ```foreach``` Array Method

- You can apply an operation to every element in an  array by using the **```foreach```** method.
- The ```foreach``` method takes an *operation* as an argument.
- In other words, the ```foreach``` method requires a *function* as an argument. That function gets applied to every element in the array.

## Other Array Methods that take Callback Functions
These methods are more specific than the ```foreach``` method. Each of the following methods modify data from the original array and return a new array with transformed data .

1) **```filter```**
- The ```filter``` method returns an array filled only with elements from the original array that pass a specific test

2) **```map```**
- The ```map``` method returns an array with the *transformed* results of the original array, according to the operation specified as an argument

### Filtering through Nested Arrays

> **Review** - Filter returns a new array with all elements that passes a test implemented by your provided function
```javascript
someArray.filter(function() {
 if(something) {
  return true;
 }
 return false;
});
```
**Check Understanding** - check understanding.

**You do (15 minutes)** - Individually, filter for a all meals with sauce

**Outcome**
```javascript
// Array Within Array Manipulation
var meals = [
    ['milk', 'cereal'],
    ['meat', 'sauce', 'bread'],
    ['pasta', 'sauce', 'meat']
];

// Obtain all meals with sauce
var saucyMeals = meals.filter(function(thatMeal){
    for(var i=0; i<thatMeal.length; i++){
        if (thatMeal[i] === 'sauce'){
            return true
        }
    }
    return false;
});
```

### Objects within Arrays

> **Code along** - Often we work with many types of objects. If we wanted to group them, how would we do that? (Ask class)
**Review** - JavaScript Objects are key value pairs

> `{name: 'lichard', age: 3}`.

**Show code**
```javascript
// Object Within Array Manipulation
var people = [
    {name: 'lichard', age: 3},
    {name: 'kathew', age: 33},
    {name: 'omily', age: 13}
];
```

> **Review**
```javascript
myArray.map(function(element, index) {
 // do something...
});
```

> **You do (10 minutes)** - update each person object to have a club attribute set to Koalas using map

**Outcome**
```javascript
// Object Within Array Manipulation
var people = [
    {name: 'lichard', age: 3},
    {name: 'kathew', age: 33},
    {name: 'omily', age: 13}
];

// Each is in the koala club! Place that in their attributes
var koalaClub = people.map(function(person){
    person.club = 'Koalas';
    return person;
});
```

> **Check understanding**

<br>

> **I do** - based on what we know about objects we could also store any type of data in an object as well.
As a person I have many hobbies. How do you think we could represent that in an object? Hint hint, remember **inception**.

**Outcome**
```javascript
// Array Within Object Within Array Manipulation
var people =[
    {name: 'lichard', age: 3, hobbies: ['bug picking', 'eating', 'music']},
    {name: 'kathew', age: 33, hobbies: ['fencing', 'dat bass']},
    {name: 'omily', age: 13, hobbies: ['skateboarding', 'music']}
];
```

> **Acivitity (20 minutes)** - In groups of two or three filter through an array of people for people who like music

**Outcome**
```javascript
// Array Within Object Within Array Manipulation
var people =[
    {name: 'lichard', age: 3, hobbies: ['bug picking', 'eating', 'music']},
    {name: 'kathew', age: 33, hobbies: ['fencing', 'dat bass']},
    {name: 'omily', age: 13, hobbies: ['skateboarding', 'music']}
];

// Find all the music fans
var musicFans = people.filter(function(person){
    var hobbies = person.hobbies;
    for(var i=0; i<hobbies.length; i++){
        if (hobbies[i]==='music'){
            return true;
        }
    }
    return false;
});
```

## Other Resources
- http://colintoh.com/blog/5-array-methods-that-you-should-use-today
