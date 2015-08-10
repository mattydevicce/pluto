#Let's Math!
*(codename: Look Ma' I'm mathing!)*

![pemdas](http://www.coolmath.com/sites/cmat/files/images/order-of-operations-05-06.gif#pemdas)

##Introduction
Today we're going to jump start the day with some basic math!<br> *(cue cheering sound)* <br> While this may seem trivial to some, a basic understanding of mathematics is incredibly important in order to be a successful developer. Either solve the following equations or using basic math operators `(,),^,*,/,+,-,=,>,<` make each of the following statements true.<br><br> **After solving each by hand, take a second pass and check all of your answers using JS!**

-Give them an example
-Do what you can, skip any questions if necessary
-give them 10 minutes to do the first part then review before moving onto the second part

1.  `5 + 6  * 10 = 110`
<br> A : `( 5 + 6 ) * 10 = 110` , JS: `var expression = (5 + 6 ) * 10`

1. `2 ^ 2 + 3  =  32`
<br> A : `2 ^ ( 2 + 3 )` , JS: `var expression = Math.pow(2 , 2+3)`

1. `15 - 3 ^ 3 - 1 = 144`
<br> A : `(15 - 3) ^ (3 - 1)`, JS: `var expression = Math.pow(15 - 3, 3 - 1)`

1. `( ( 20 + 5 * 4 / 2 ) / 3 ) ^ 2 = __ `
<br> A : `(( 20 + 5 * 4 / 2) / 3 ) ^ 2 = 100`  JS: `var expression = Math.pow((20 + 4 * 5 / 2)/3 , 2 )`

1. `(15 + 10) - (12 + 5 - 7 + 15) __  15 + (10 - 12) + 5 - (7 + 15) `
<br> A : `(15 + 10) - (12 + 5 - 7 + 15)     15 + (10 - 12) + 5 - (7 + 15) `

1. `( 5 ^ 3 + 3 / 2 ^ 3 ) ^ (1/2) = __ `
<br> A : `( 5 ^ 3 + 3 / 2 ^ 3 ) ^ (1/2) = 4 ` JS: `var expression = Math.pow( Math.pow(5,3) + 3 / Math.pow(2,3)),1/2)`

####Using JavaScript Math object, how would you solve each of these problems?

-give an example of using the Math object before moving on here

1. Round 18.6 to the nearest integer
<br> A : `Math.round(18.6)`

1. Round 10.75 down to 10
<br> A : `Math.floor(10.75)`

1. Round 5.25 up to 6
<br> A : `Math.ceil(5.25)`

1. Find the square root of 225
<br> A : `Math.sqrt(225)`

1. Using the method `Math.random()` how would you find a random integer between 1 and 10? *Hint: make sure you know what Math.random() returns*
<br> A : `Math.ceil(Math.random()) * 10`

1. Using the method `Math.random()` how would you find a random integer between 75 and 100?
<br> A : `75 + Math.ceil(Math.random() * 25)`

1. Given a radius of 4, how would you find the following properties of a circle?
<br> Find the circumference
<br> A : `Math.PI * (4 * 2)`
<br> Find the area
<br> A : `Math.PI * Math.pow(4,2)`
