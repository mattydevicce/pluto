<<<<<<< HEAD
# personality test
# print "Welcome to the personality interview game, what is your name?\nName: "
# user_name = gets.chomp
# print "\nHello #{user_name}, what is your favorite color?\nColor: "
# user_favorite_color = gets.chomp
# print "\n#{user_favorite_color} really brings out your eyes, do you have a favorite cartoon?\nFavorite cartoon: "
# user_favorite_cartoon = gets.chomp
# print "\nWhat? No way, #{user_favorite_cartoon} is my favorite cartoon also. Okay last question, if you could have one super power what would it be?\nSuper power: "
# user_super_power = gets.chomp
# print "\nWell thank you #{user_name}, you sound like you would make a great superhero using #{user_super_power} for good\n"

# name = gets.chomp

# if name== 'Pan'
#   puts 'FOCUS!!!'
# else
#   puts 'FOCUS ON FOCUSING!!!'
# end

# 1.upto(100) do |i|
#   if i%5==0 and i%3==0
#     puts 'fizz buzz'
#   elsif i%5==0
#     puts 'buzz'
#   elsif i%3==0
#     puts 'fizz'
=======
# * Write a command line app that starts with "Welcome to the personality interview game, what is your name?"
# * Returns "Hello Name, what is your favorite color?"
# * Returns "______ really brings out your eyes, do you have a favorite cartoon?"
# * Returns "What? No way, _______ is my favorite cartoon also. Okay last question, if you could have one super power what would it be?"
# * Returns "Well thank you (name), you sound like you would make a great superhero using (power) for good"
#
# puts "Welcome to the Personality Interview Game!!!"
# puts "What is your name?"
# name = gets.chomp
# puts "Hello #{name}, what is your favorite color?"
# color = gets.chomp
# puts "#{color} really brings out your eyes, do you have a favorite cartoon?"
# cartoon = gets.chomp
# puts "What? No way, #{cartoon} is my favorite cartoon also. Okay last question, if you could have one super power what would it be?"
# power = gets.chomp
# puts "Well thank you #{name}, you sound like you would make a great superhero using #{power} for good"



# Control Flow (if else elsif)
#
# if condition
#
# elsif condition
#
# else
#
# end
#
# puts "Enter you name:"
# name = gets.chomp
#
# if name == 'Pan'
#   puts "FOCUS!!!"
# else
#   puts "FOCUS ON FOCUSING!!!"
# end


# * Build a command line application that asks the user for a number between 1 and 100. Take the number and run it through fizz buzz
# * Forgot what fizz buzz is? Here's a refresher.
# 	* If the number is divisible by five print out "Fizz"
# 	* If the number is divisible by three print out "Buzz"
# 	* If the number is divisible by both five and three print out "Fizz Buzz"
# 	* If the number is not divisible by either five or three print out "(num) is not fizzable"

# puts 'Give me a number between 1 and 100:'
# number = gets.chomp.to_i
#
# 1.upto(number) do |i|
#   if i % 5 == 0 and i % 3 == 0
#     puts "FizzBuzz"
#   elsif i % 5 == 0
#     puts "Buzz"
#   elsif i % 3 == 0
#     puts "Fizz"
>>>>>>> 49b3ffdd936a1f38f4c1b0f106888a3f31900217
#   else
#     puts i
#   end
# end
<<<<<<< HEAD
# puts 'for'
# for x in 1..10
=======


# Loop
# for x in 1..5
>>>>>>> 49b3ffdd936a1f38f4c1b0f106888a3f31900217
#   puts x
# end

# # while
# i = 0
<<<<<<< HEAD
# j = 0
# terminate = 10
# puts 'while'
# while i<terminate do
#   i += 1
#   puts i
# end

# #do while
# puts 'do while'
# begin
#   j+=1
#   puts j
# end while j < terminate

# turtles = ['Donny', 'Leo', 'Mikey']
# turtles << 'Raph'
# puts turtles

# people = [["Bobby", "Jaden", "Denis"], ["Red", "Blue", "Green"], ["Limp Bizkit", "3 Doors Down", "Papa Roach"]]

# for yolo in 0..2 do
#   puts "#{people[0][yolo]}'s favorite color is #{people[1][yolo]}, and he loves #{people[2][yolo]}"
# end


# Hash
=======
# terminate = 10
#
# while i < terminate do
#   puts "something #{i}"
#   i += 1
# end
#
# # do while
# begin
#   puts "something #{i}"
#   i += 1
# end while i < terminate

# turtles = ['Donny', 'Leo', 'Mikey'];
# turtles.push('Raph')
# # turtles << 'Raph'
# puts turtles

# # FOR loop
# for pantheman in 1..10
#     puts pantheman
# end

# # While loop
# x = 0
# terminate = 10
# while x < terminate do
#   x +=1
#   puts "#{x}"
# end

# # do while
# i = 1
# terminate = 11
# begin
#   puts "something #{i}"
#   i += 1
# end while i < terminate


# Given the array below print a sentence similar to this "Bobby's favorite color is Red, and he loves Limp Bizkit"
# people = [["Bobby", "Jaden", "Denis"], ["Red", "Blue", "Green"], ["Limp Bizkit", "3 Doors Down", "Papa Roach"]]

# for x in 0...people.length do
#   puts "#{people[0][x]}'s favorite color is #{people[1][x]} and favorite band is #{people[2][x]}."
# end

# Hashes (key-value pairs)
# Way 1
>>>>>>> 49b3ffdd936a1f38f4c1b0f106888a3f31900217
# my_self = {
#   'name' => 'Pan',
#   'gender' => 'male',
#   'hungry' => true
# }
<<<<<<< HEAD

# puts my_self['name']

# my_self = {
#   'not a good way' => 'this way is bad',
#   :name => 'Pan',
#   :gender => 'male',
#   :hungry => true,
#   # this is the best way
#   dood:'falalala'
# }

# tmnt = {
#  Raph: 'Red',
#  Don: 'Purple',
#  Leo: 'Blue',
#  Mich: 'Orange'
# }

# tmnt.each do |x,y|
#   puts "#{x} wears a #{y} bandana"
# end

def method_name(param1, param2)
  
end

=======
# puts my_self['name']

# Way 2
# my_self = {
#   :name => 'Pan',
#   :gender => 'male',
#   :hungry => true
# }
#
# jenn = {
#   :name => 'Jenn',
#   :gender => 'female',
#   :hungry => true
# }
#
# puts my_self[:name]
# puts jenn[:name]

# Way 3
# my_self = {
#   name: 'Pan',
#   gender: 'male',
#   hungry: true
# }
#
# puts my_self[:name]

# Way 4
# my_self = Hash.new
# my_self['fruit'] = 'apple'
# my_self[:fruit] = 'apple'

# Hash Keys
# my_self = {
#   name: 'Pan',
#   gender: 'male',
#   hungry: true
# }
#
# keys = my_self.keys
# puts keys
#
# tmnt = {
#   Raph: 'Red',
#   Don: 'Purple',
#   Leo: 'Blue',
#   Mich:'Orange'
# }

#=> Raph wears a Red bandana

# tmnt.each do |key, value|
#   puts "#{key} wears a #{value} bandana"
# end

# Enumerables
# .each
# .map
# .select
# .times
# .upto
# .downto

# tmnt.each do |turtle|
#   puts "Hello #{turtle}"
# end

# .each
# array = [1,2,3,4,5]

# array.each do |x|
#   x += 10
#   puts x
# end
#
# puts array

# .map
# array = [1,2,3,4,5]
# new_array = array.map{|e| e+=10 }
# puts new_array

# .select
# meals = [
#   {name: 'pasta', ingredient: 'sauce'},
#   {name: 'pasta', ingredient: 'sauce'},
#   {name: 'fried rice', ingredient: 'eggs'}
# ]
#
# saucy_meals = meals.select{|meal| meal[:ingredient]=='sauce'}
# puts saucy_meals
# puts saucy_meals.class

# Functions
def method_name
  num = 100

  #=> last value is the return value
end

# def method_name(param1, param2)
#
#   #=> last value is the return value
# end

puts method_name
# puts method_name()

# method_name(param1, param2)
>>>>>>> 49b3ffdd936a1f38f4c1b0f106888a3f31900217
