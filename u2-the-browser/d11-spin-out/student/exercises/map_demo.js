/*map_demo.js
The examples in this file demonstrate different ways to apply the same
concatentation procedure to every element in an array of objects
*/


/////////////////////////for loop version////////////////////////////
/*
Iterate through every element in oldArr1 by using a for loop. Perform the concatenation at every spot in teh array
*/
var oldArr1 = [{
    first_name: "George",
    last_name: "Bush"
}, {
    first_name: "Hillary",
    last_name: "Clinton"
}, {
    first_name: "Vladimir",
    last_name: "Putin"
}];

var newArr = [];

// Add code

console.log("----------Concatenation with a for loop:------------");
console.log(newArr);


/////////////////////////.map() version 1////////////////////////////
/*In this example we declare an anonymous function and pass it as a parameter to the map method. We put the entire function definition in the ()'s of the map method. That defines a procedure to be applied to every element of oldArr2

*/

var oldArr2 = [{
    first_name: "George",
    last_name: "Bush"
}, {
    first_name: "Hillary",
    last_name: "Clinton"
}, {
    first_name: "Vladimir",
    last_name: "Putin"
}];

var newStuff = [];

console.log("----------Concatenation with an anonymous function:------------");
console.log(newStuff);


/////////////////////////.map() version 2////////////////////////////
/*In this example we declare a "named" function and pass it as a parameter to the map method. Notice that we don't invoke the method (i.e. no ()'s). That happens behind the scenes. The documentation for the map method mentions that item and index are the expected first and second arguments
*/

var oldArr3 = [{
    first_name: "George",
    last_name: "Bush"
}, {
    first_name: "Hillary",
    last_name: "Clinton"
}, {
    first_name: "Vladimir",
    last_name: "Putin"
}];

var newStuff2 = [];

// Add code

console.log("----------Concatenation with a named function:------------");
console.log(newStuff2);
