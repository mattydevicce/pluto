# Intro to Functions and Scope

##### LEARNING OBJECTIVES
- Define a function
- Understand scope
- Using JavaScript closures

##### Vocabulary
- **scope** - the set of variables you have access to and where
- **argument** - the data passed in when a function is invoked
- **parameter** - a variable part of the method signature, the place holder

---

## STEP 1: Why we create functions

- Creating Abstraction
- Hiding Details
- Isolating Logical Pieces
- Documentation / Naming

## STEP 2: Defining Functions

```
function speak() {
  alert("WOOF!")
}
```

How do we get data into our function?  Well, there are two different ways I want to discuss today.

```
function sayMyName(name) {
  alert("Your name is "+name);
}
```

**ACTIVITY:** See if you can write this function (5 minutes):

```
function findTheNeedle(haystack) {
  // .. Loop through haystack to find the string "needle" and alert "Found it!"
}
```

Test your function like this: `findTheNeedle(["straw", "hay", "dirt", "needle", "rock"])`

---

Does anybody have a solution they'd like to share?

---

Our functions can accept multiple arguments.  Let's modify our code so we can search for anything (not just "needles")

```
function findAnything(haystack, thingToFind) {
  // .. Modify your code above and so you can search for anything. Then see if you can find the "rock" in the haystack.
}
```

One of the BIGGEST things you need to remember is that EVERYTHING returns

```
function doubleDouble(arrayToDouble) {
  // Write a function that doubles each element in the array
}
```

```
function toilAndTrouble() {

}
```

`doubleDouble(toilAndTrouble())`

---

###### SOLUTION
```
function findAnything(haystack, thingToFind) {
  for(var i=0; i<haystack.length; i++) {
    if (haystack[i] == thing_to_find) {
      alert("Found the "+thingToFind)
    }
  }
}
```

## STEP 3:
