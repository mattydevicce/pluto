def validi(number)

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
  
  if total % 10 == 0
    return be_truthy
  else
    return be_falsy
  end
end

validi(123149124)