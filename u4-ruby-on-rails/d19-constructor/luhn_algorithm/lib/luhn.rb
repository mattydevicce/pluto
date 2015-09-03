# Write your Luhn class here
class Luhn

  def self.valid?(number)

    number = number.to_s.split('')
    j = 2
    length = number.length
    begin
      number[-j] = number[-j].to_i*2
      number[-j].to_s
      j += 2
    end until j > length
    number = number.join('')
    number = number.split('')
    total = 0
    number.each do |x|
      total += x.to_i
    end
    total % 10 == 0
  end
end # End Luhn