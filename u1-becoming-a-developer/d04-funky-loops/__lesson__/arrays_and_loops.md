## Loop Review
We learned about three types of loops yesterday: `for`, `while`, `do while`.

To get to you about the different types of loops, here is what I learned.
- `for` loops are good when you know the exact times you want to loop
- `while` loops are good for when you have to loop an indefinite amount of time. For example, Let's say we could only read one line of text of a book and want to store the text. A `while` loop would be helpful, since we don't know how many lines the book has.
- `do while` loops are good for when you want to execute code at least once. For example, user prompts.

### You do _(40m)_
1. Write a `for` and `while` loop to print names that start with a vowel in the array below.
  ```js
  var names = ['adam', 'bobby', 'kyle', 'jaden', 'catherine', 'emily', 'joey', 'elijah', 'denis'];
  ```

2. Write code to generate a multiplication game
  ```js
  do {
    var play = prompt('Play multiplication? (y/n)');
    var val1 = Math.floor(Math.random() * 6) + 1;
    var val2 = Math.floor(Math.random() * 6) + 1;
    
    var input = parseInt(prompt('What is ' + val1 + ' * ' + val2 + ' ?'));
    
    if(input === (val1 * val2)) {
      alert('Correct!');
    } else {
      alert('Wrong!');
    }
  } while(play !== 'n');
  ```

## Arrays & Loops

### I do _(5m)_
We spoke earlier that loops works with really well with arrays as well. Let's see how so, but first let's review
```js
var names = ['Maria', 'Justin', 'Jason', 'Paul'];
var lotteryNumbers = [7, 2, 45, 15, 9, 66];
var booleans = [true, false, true, false];
var blob = [1, 'two', 3, false, 'four', true];
```

Now let's say I want to print all the names in the `names` array. Taking what we learned how can we do this using loops.

Oh wait how do we know the length of the array? Similar to a String there is a `length` property. Hmmm...that's interesting. Why does a String have a `length` property like an array. A String is an array of Characters.


### We do _(5m)_
Ok now we know what we need to start looping through the array and printing all the names in the `names` array.

Let's use a `for` loop.
```js
for(var i = 0; i < names.length; i++) {
  console.log(names[i]);
};
```

Now with a `while` loop.
```js
var i = 0;
while(i < names.length) {
  console.log(names[i]);
  i++;
};
```
Why isn't a `do while` loop appropriate?
> runs a least once, but it could be problematic if the array doesn't exist

### You do _(20m)_
Now can you can use a `for` and `while` loop for the `blob` array.

### I do _(10m)_
Review solution

### You do _(15m)_
Now that we have combined loops with arrays, I'd like to go over an example that is a bit more appropriate for `while` loops. To review `while` loops are great for going over things for an indefinite amount of time that will eventually end.

Given this array write a `while` loop that terminates when you detect an element with a value of `42`.
```js
var blob = [1, 'two', 3, false, 42 ,'four', true];
```

### I do _(10m)_
Review solution

### You do _(10m)_
Create a playlist of songs that you want to play on repeat.

### I do _(5m)_
Review
