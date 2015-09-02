# setting a contant to secret number
SECRET_NUMBER = 7

# saying that your guess is false probably until your guess is correct then 
# you will change it to true
guessed = false


# displaying a string
puts('I\'m thinking of a number between 1 and 10. Can you guess it?')


# while guessed is false run this loop
while !guessed

  # a variable gets set to an input of users choice... chompts out the return
  guess = gets.chomp.to_i

  # if the guess equals
  if SECRET_NUMBER == guess
    # if the above thing is true, stop the while loop by making the condition false
    guessed = true
  # else do this if the sectret number equal your guess
  else
    # prints out your guess then ? and to try again
    puts("#{guess}? Try again!")
  # end the if statement
  end
# end the while
end

# prints out great job once you finally guess the number
$stdout.puts('Great job!')