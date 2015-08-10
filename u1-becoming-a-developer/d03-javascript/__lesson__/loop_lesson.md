# Loops

## Intro _(5m)_

- **What are we going to learn?**

> - Who listens to music here? What's your favorite song? There is a loop button so you could listen to your favorite songs over and over again.
> - I think you all know where I'm going with this. We'll be learning about programming loops.

- **Why is this important?**

> - In some cases we have to do the same operations more than once and it would be inefficient to repeat code.
> - If we think back to arrays wouldn't it great to have a loop that increments a index to access each element without having to write the manual code.

## Objectives
- Learn about for & while loop and understand when to use one over the other
- Understand how loops allows us to reduce code redundancy
- Traverse through arrays with loops

## I do _(10m)_
Let's imagine you go to some party and your objective is to get the food, but there are generic boring people there who want to talk to you. They all greet you the same way and you have no interest in speaking to these people, so you give them all the same generic responses.

```js
console.log("I'm fine, thank you. Nice to see you again.");
console.log("I'm fine, thank you. Nice to see you again.");
console.log("I'm fine, thank you. Nice to see you again.");
console.log("I'm fine, thank you. Nice to see you again.");
console.log("I'm fine, thank you. Nice to see you again.");
```

It get's tiring to either have to write or copy/paste code and look at it.

Here's when loops become very useful. All of this redundancy could be simplified to

```js
for(var i=0; i<5; i++) {
  console.log("I'm fine, thank you. Nice to see you again.");
}
```

What's going on here
```js
var i=0 // that is declaring a counting variable
i<5 // is a condition we apply for the loop to run. If it evaluates to false the loop stops.
i++ // increments the counting variables
```

## We do _(5m)_
Let's say you have a dog name Skippy and he wants to play fetch. However you have a WDI assignment due soon and only have time for five throws. Let's code a loop together that would allow us to play fetch with Skippy 5 times.

```js
for(var i=0; i<5; i++) {
  console.log("throw " + i);
}
```
