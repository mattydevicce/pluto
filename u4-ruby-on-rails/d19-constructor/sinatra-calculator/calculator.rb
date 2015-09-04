class Calculator

	# Thanks big bob
	def self.add(x, y)
    sum = (x.to_f + y.to_f).to_s
  end

  def self.subtract(x,y)
    sum = (x.to_f - y.to_f).to_s
  end

  def self.multiply(x,y)
    sum = (x.to_f * y.to_f).to_s
  end

  def self.divide(x,y)
    sum = (x.to_f / y.to_f).to_s
  end

  def self.sqrt(x)
    sum = (Math.sqrt(x.to_f)).to_s
  end
end
