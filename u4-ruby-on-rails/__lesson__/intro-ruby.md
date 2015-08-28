# Humble Ruby Beginnings

### Learning Objectives

Students will be able to:

* articulate the difference between JavaScript and Ruby
* apply programming concepts that they learned with JavaScript to Ruby
* translate JavaScript String, Boolean, Int, Float, Conditional, Array, Hash, Loops, Symbol
* use Ruby Enumerables (.times, .each, .upto, .downto, .map)


## Intro _(5m)_
I worked for startup and established companies. For each of the companies I program based on the stack that the company was using. This included Java, C/C++, C#, Ruby, Python, JavaScript, and PHP. Going into the job I definitely did not know some of the languages before hand. In school I only studied C++ and Java. The other languages, I had to pick up myself on the job and start getting things done. I was able to do this because I applied the programming fundamentals that I learned from C++ and Java.

Today we are going to learn Ruby by applying programming fundamentals that we acquired from developing in JavaScript. Ruby and JavaScript are not going to be identical, otherwise there we wouldn't need different languages, but they are both built upon the same principles.


## Why JavaScript Discussion _(5m)_
Before we get into Ruby, let's discuss why we even want to learn JavaScript.
* It's the defacto language of the web
* It could be used for both the client and server
* There is a huge community around it
* There are many tools built for it
* Good signals from the dev community. Every browser implemented it, although differently many different ideas emerged and competed. That allows the best ideas to bubble up (ha bubble up). JavaScript also has the most amount of people working on it.

## Why learn Ruby then _(5m)_
JavaScript sounds pretty good, so why learn Ruby then?
* Beginner friendly
* Like JavaScript there is a large community and tools built for it
* The language is designed to give developer a way to humanly express commands to computers. Some would say that allows developers to think clearer and creatively.
* The syntactly sweet, so developer could be more productive and more easily collaborate with each other.
* Has functionality of a classical Object Oriented Language, such as Java without the complexity
* There is also a very popular framework called Ruby on Rails, which as you could imagine is built on Ruby. This framework increases productivity and workflow.

## Install pry _(5m)_
If pry is not already install have everyone do it

```ruby
gem install pry
```

## Data types and Variables _(10m)_

**Students:** Code Along / Follow Lecture

**Instructor:** Code Along / Give Lecture

* Similarities and differences in JS
* Write on the board: What data types did you guys have in JS
	* Booleans
	* Numbers
	* Strings
	* Arrays
	* Objects
* Ruby
	* Booleans - true and false
	* Integer - 12 (a whole number)
	* Floats - 9.45 (decimal)
	* Strings - "You Are Beautiful"
	* Arrays - ['x', 'y', 'z']
	* Hashes - {key: value, key2: value2} (Objects with key value pairs)
* Variables
	* How do we declare variables?
	* Notice we also don't need semi colons
	* Local Variable
		* Local to a method
	* Instance Variable
		* `@varname`
	* Constant

		```
		SOME_CONSTANT = "donuts" # "donuts"

		def some_method
		  SOME_CONSTANT
		end

		SOME_CONSTANT # => "donuts"
		some_method # => "donuts"

		SOME_CONSTANT = "awesome" # warning: already initialized constant
		```
* String Interpolation
	* JS - first + " " + last
	* Ruby - "#{first} #{last}"

***Students Do***

* "My favorite color is _______"
* "My favorite ninja turtle is _______ and his weapon is ______"
* "______ is a great movie star. My favorite movie of theirs is ________"


## Part Three: Control Flow
***15 minutes***

**Students:** Code Along / Follow Lecture

**Instructor:** Code Along / Give Lecture

* Enough pry for now, lets go into our classwork folder and make a new file to play around with.
	* Anybody know what the type of the file should be?
	* Make a `test.rb` file and open it up
* Talk about `put`, `print`, `gets`
	* puts: gives you a new line after the string
	* print: prints out the string without a new line afterwards
	* gets: gets input from a user

```
puts "Hey You"
me = gets.chomp
puts me
```

**Students Do**

* Write a command line app that starts with "Welcome to the personality interview game, what is your name?"
* Returns "Hello Name, what is your favorite color?"
* Returns "______ really brings out your eyes, do you have a favorite cartoon?"
* Returns "What? No way, _______ is my favorite cartoon also. Okay last question, if you could have one super power what would it be?"
* Returns "Well thank you (name), you sound like you would make a great superhero using (power) for good"

* Lets cover some if/else statements
	* Logically the if else statement works exactly as in JS
	* BUT as I mentioned earlier Ruby is a development language trying to mirror english
	* So lets take a look at the syntax

```
name = "Jason"

if name == "Jason"
	puts "You are so handsome"
else
	puts "You wish you were Jason"
end
```
* Booleans and if/elsifs
* We know that the boolean operators are the same in JS
	* Write out the booleans on the board

```
a = 10
b = 20

if a == b
	puts "They are equal"
elsif a == 10 && b == 20
	puts "Nice math"
else
	puts "do you even math bro"
end
```

**Student Do**

* Build a command line application that asks the user for a number between 1 and 100. Take the number and run it through fizz buzz
* Forgot what fizz buzz is? Here's a refresher.
	* If the number is divisible by five print out "Fizz"
	* If the number is divisible by three print out "Buzz"
	* If the number is divisible by both five and three print out "Fizz Buzz"
	* If the number is not divisible by either five or three print out "(num) is not fizzable"

###### Answer for Fizz Buzz

```
    1.upto(100) do |i|
      if i % 5 == 0 and i % 3 == 0
        puts "FizzBuzz"
      elsif i % 5 == 0
        puts "Buzz"
      elsif i % 3 == 0
        puts "Fizz"
      else
        puts i
      end
    end
```

## Part Four: Loops / Arrays / Hashes
***15 minutes***

**Students:** Code Along / Follow Lecture

**Instructor:** Code Along / Give Lecture

* For Loops
	* using ".." gives you up to and including the last number
	* using "..." gives you up to BUT NOT including the last number
```
for x in 1..5
	puts x
end
```
* While Loops
	* Mention incrementation and decrementation are more strict

```
x = 0
while x < 10
	puts x
	x += 1
end
```
* Arrays are the same in Ruby and JS
	* Many similar methods
	* Index is the same as JS
	* Arrays nested into Arrays are the same
	* .push is different

```
turtles = ["Donny", "Leo", "Mikey"]

turtles << "Raph"

puts turtles
```

**Students Do**

* Write a command line app that takes in a variable with arrays nested as values inside another array. Print out sentences for each of them.

```
people = [["Jason", "Maria", "Justin"], ["Red", "Blue", "Green"], ["Limp Bizkit", "3 Doors Down", "Papa Roach"]]

The sentence will look like "Jason's favorite color is Red, and he loves Limp Bizkit"
```
***

* Hashes are like the Objects in JS.
	* They are written in snake case (my_hash)
	* They can be written in several ways

```
my_self = {
	"name" => "Jason",
	"age" => 27,
	"color" => "red",
	"hungry" => true
}

OR

my_self = {
	:name => "Jason",
	:age => 27,
	:color => "red",
	:hungry => true
}

OR

my_self = {
	name: "Jason",
	age: 27,
	color: "red",
	hungry: true
}
```
**Quick Sidenote**

* Symbols are names in ruby. They are defined using ":"
	* Following the ":" must be a letter or an underscore.
	* Do not put any spaces in the name of your symbols
* See the above example about hashes keys being declared as symbols instead of quotes
* Symbols are unique, there can be only one. This is why they are ideal for hashes
* ".to_s" method turns a value to a string
* ".to_sym" OR ".intern" method turns a value to a symbol

**Other hash things**

* You can use "Hash.new" to make a new hash. Make sure Hash is capitalized

```
pets = Hash.new
```
* You can also create a hash with predetermined data

```
puts Hash["a", 100, "b", 50]
```
* Add keys/values to hash: same shit as JS

```
food["fruit"] = "apple"
food["meat"] = "bacon"
```

**Student Do**

* Build a command line application that will loop through the tmnt hash below and create two new arrays. One called "turtleName" and one called "turtleColor". Print these arrays
* Lets take it a step further. Print out a sentence such as "Raphael wears a Red bandana"

```
tmnt = {
  "Raphael" => "Red",
  "Donnatello" => "Purple",
  "Leonardo" => "Blue",
  "Michealangelo" => "Orange"
}
```
***

##### Answer

```
tmnt.keys
```

***

## Part Five: Enumerables
***15 minutes***

**Students:** Code Along / Follow Lecture

**Instructor:** Code Along / Give Lecture

* Was that annoying to write? Ruby gives us a lot of methods which will reduce the need for loops
* Enumerables: .times, .each, .upto, .downto, .map(the big one)

* Lets talk about the .each method really quick
* .each is similar to the forEach method in JS however you can put two parameters inside of the each method when dealing with hashes.
	* The syntax is `object.each{|item| do something}
	* It's not required to have two parameters
	* What happens when you only put one argument in?
	* What happens when you put two arguments in?

```
tomCruz = {
  "Pilot" => "Top Gun",
  "Racer" => "Days of Thunder",
  "Spy" => "Mission Impossible",
  "Sports Agent" => "Jerry Maguire"
}

tmnt.each do |x|
 	puts "Hello #{x}"
end

tomCruz.each do |key, value|
	puts "Tom Cruize was a #{key} in the movie #{value}"
end
```
**Side Note**

* Jumping very quickly back to arrays, the .each method works similarly with arrays as the forEach in JS

```
array = [1,2,3,4,5]

array.each do |x|
  x += 10
  puts "#{x}"
end
//11 12 13 14 15
```


**Student Do**

* Comment out your current code for the previous exercise. Do the same thing using the .each method.
* A Hash of Hashes
	* Create a hash where the keys are names of family, friends, classmates, and the like.
	* The values are hashes with keys for
		* codeName
		* superPower
		* weapon
	* Print out a paragraph for each person
		* "(key)s secret identity is _____. They use their power of ______ to deliver justice to wrong doers everywhere. The weapon of choice is ______ and it strikes fears in the heart of their enemies."

***


* Other enumerables
* .times
* The times method: iterate something a specific number of times
	* number.times{do this}

	```
	10.times{puts "I Am Beautiful"}
	```
* Other ways of looping: `.upto`, `.downto`, `.each`, `.collect`

	```
	"L".upto("P"){|letter| puts letter}

	90.downto(72){|num| puts num}

	arr.collect {|x| x+10} //does not mutate original array
	```

* now lets move to the `.map` method

```
arr.map { |a| 2*a }   #=> [2, 4, 6, 8, 10]
arr                   #=> [1, 2, 3, 4, 5]
arr.map! { |a| a**2 } #=> [1, 4, 9, 16, 25]
arr                   #=> [1, 4, 9, 16, 25]
```
* The map method will return a new array with the new values. The original array is not changed
* if we use the map! it will mutate the original array
