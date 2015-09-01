def example(x)
  5.times do |n|
   yield(n)
   answer=n*x
   puts "You are in the method test:#{answer}"
  end
end

example(10) {|i| puts "You are in the anonymous method (i.e. the block) #{i}"}
