Delivery Tips:

* Think about how long you're talking
* Move quicker sooner, slower later
* Cold Call more often
* Revisit LOs
* Defer questions when appropriate

# Constructors and Prototypes

## Learning Objectives

- Define a constructor function in JavaScript
- Use a constructor to create multiple objects
- Use a constructor's prototype to store common functionality

## Outline

# Before

- Made multiple object literals, each with their own attributes and behaviors

### What was wrong with this?

- MOIST...ew

## Constructors

- A constructor is a function in javascript that is used to crate multiple objects that possess unique attributes, but with the same behaviors

**I Do**

```
var Person = function(firstName, lastName, age) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.fullName = function() {
		return this.firstName + ' ' + this.lastName;
	};
};
```

```
var dennis = new Person('Dennis', 'Liaw', 9001);
dennis.fullName();
dennis.age;

var bobby = new Person('Bobby', 'King', 50);
bobby.fullName();
bobby.age;
```

#### Conventions
- capitalize the function (will work without it but CONVENTION)
- to make an object we use a keyword `new`

**You do** 10 minutes

* Using the dog example from the Ruby classes example, define a constructor for a dog
* Create 3 different dogs and make sure that they have different attributes and add a bark function to each dog.

**REVIEW 10 minutes SEND ME YOUR MINION**

# BREAK

We have a problem. When we run our constructor function, we are creating new instances of the objects. Each object gets its own set of attributes, and its own set of behaviors. This means every time we make an object, it will create a new copy of every behavior function we define.

If we make 10 minions, we make ten minion objects, and ten revert functions, and ten mutate functions.

What if we make 10000 dogs. That's 10000 copies of the same function stored in memory. This is memory intensive.

**Note**
Keep in mind that Ruby will not have this behavior because it is not prototype-based programming language.

## Prototype-Based Programming
  * A style of Object Oriented Programming
  * It clones objects to reuse or inherit behaviors
  * Each clone can share attributes and methods through their prototype

### How can we fix this?

## Prototypes

#### First we do

```js
// This creates a Person prototype
var Person = function(firstName, lastName, age) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
}

// This adds a Person fullName function to the prototype, so the function is not redeclared each time an instance of a Person is created
Person.prototype.fullName = function() {
	return this.firstName + ' ' + this.lastName;
};

Person.prototype.introduce = function() {
	return 'Hi my name is ' + this.fullName() + '!';
};

```

#### Now let's discuss

**DRAW ON BOARD**

- the prototype gives us the ability to store common attributes and behaviors for all objects created from a constructor.
- It stores one copy, that all objects can use.

**String.prototype**
For example, every String object has access to several methods and attributes defined in the prototype
```js
'String 1'.length
'String 1'.split(' ');
```

### How does it work?

- when an object calls a method, first it checks itself and sees if that behavior has been defined for it. If it does not find it, it will look at its prototype to see if it has been defined there and it'll keep looking down the prototype chain until there are no more prototypes or when `null` is returned.

- When an object is made, a connection is made to the prototype

**You do** 5 minutes

refactor your do constructor to use a prototype
- add a bark function that returns the dogs type and bark noise

# BREAK

## Benefits

- define a function once, that multiple objects have access to
- can add functionality at any point in your program and be assured that any previously created objects will have that functionality

**You do** 20 minutes

Make a `Car` constructor and a `lot` object literal.

- `Car` has make, model, rimDiameter
	- info method -> return the make, model and rim diameter
	- upgradeRims -> rimDiameter + 10
- `lot` is an object literal, with an array of cars
	- behavior: addCar -> accept a car object and add
	- behavior: listAllCars -> iterate over the array of cars logging the response of calling the car objects info method

** GET STUDENT TO COME UP AND TYPE RESPONSES**

**DOES THIS MEAN WE SHOULD CHANGE AND ADD PROPERTIES TO JAVASCRIPT STRING, NUMBER, ARRAY AND OBJECT CLASSES** NO!

# Lesson Plan - Review Notes

Are learning objectives present and complete?
What is the ratio of talking vs. doing? (60/40, TT/ST-wg vs ST-sg / individual)
What is the level of engagement?
Are exercise plans present?
Any pitfalls with the exercises?
