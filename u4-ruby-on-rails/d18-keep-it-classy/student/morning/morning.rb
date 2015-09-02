# Correct the following code to print out Taylor's face.

################################################################################
# Part 1
################################################################################

# Step 1
# Require the file taylors.rb
require "./taylors.rb"
# Require the file boneyard/exes.rb
require "./boneyard/exes.rb"
# Step 2
# Methods

def sing(lyric)
  "♬#{lyric}♬"
end

def mmm_mmm(lyric)
  "#{lyric}, mmm-mmm"
end


def back_up(lyric, number_of_words)
  split_lyric = lyric.split(' ')
  "#{lyric} (#{split_lyric[-number_of_words..split_lyric.length].join(' ')})"
end

# Step 3
# Create the additional methods

# repeat
def repeat(lyric)
  split_lyric = lyric.split(' ')
  repeat_word = split_lyric[-1]
  split_lyric.join
  end_of_lyrics = ''
  4.times do
    end_of_lyrics += ", #{repeat_word}"
  end
  "#{split_lyric.join(' ')}#{end_of_lyrics}"
end

# double
def double(lyric)
  "#{lyric}, #{lyric}"
end

# stutter
def stutter(stutter_lyric)
  split_stutter = stutter_lyric.split(' ')
  first_word = split_stutter[0]
  the_actual_stutter = ''
  2.times do
    the_actual_stutter += "#{first_word}, "
  end
  "#{the_actual_stutter}#{split_stutter.join(' ')}"
end

$stdout.puts(TAYLORS[0][:head])

exit unless sing("I stay out too late") == "♬I stay out too late♬"
exit unless sing("Got nothing in my brain").include?("♬Got nothing in my brain♬")
exit unless mmm_mmm("That's what people say") == ("That's what people say, mmm-mmm")

$stdout.puts(TAYLORS[0][:face])

exit unless back_up("I'm dancing on my own", 4) == "I'm dancing on my own (dancing on my own)"
exit unless back_up("I make the moves up as I go", 5).include?("(moves up as I go)")
exit unless mmm_mmm("And that's what they don't see") == "And that's what they don't see, mmm-mmm"
exit unless mmm_mmm("That's what they don't see").include?(", mmm-mmm")

$stdout.puts(TAYLORS[0][:mouth])

exit unless repeat("'Cause the players gonna play") == ("'Cause the players gonna play, play, play, play, play")
exit unless repeat("And the haters gonna hate").include?("hate, hate, hate, hate, hate")
exit unless repeat("Baby, I'm just gonna shake").include?("shake, shake, shake, shake, shake")
exit unless double("I shake it off") == "I shake it off, I shake it off"

# Puts Taylor's neck
$stdout.puts(TAYLORS[0][:neck])
exit unless repeat("Baby, I'm just gonna shake").include?("shake, shake, shake, shake, shake")
exit unless repeat("Heart-breakers gonna break").include?("break, break, break, break, break")


exit unless repeat("And the fakers gonna fake").include?("fake, fake, fake, fake, fake")
exit unless double("I shake it off") == "I shake it off, I shake it off"

# Puts Taylor's shoulders
$stdout.puts(TAYLORS[0][:shoulder])
exit unless stutter("I shake it off, I shake it off") == ("I, I, I shake it off, I shake it off")
puts 'ends'