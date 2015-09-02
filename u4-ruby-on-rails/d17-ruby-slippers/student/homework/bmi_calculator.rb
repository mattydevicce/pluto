print "What is your weight in pounds?\nWeight: "
weight_in_pounds = gets.chomp
print "What is your height in inches?\nHeight: "
height_in_inches = gets.chomp
def bmi_algo(weight,height)
  weight = weight.to_i*703
  height = height.to_i**2
  weight/height
end
bmi = bmi_algo(weight_in_pounds,height_in_inches)
puts "You have a BMI of #{bmi}"