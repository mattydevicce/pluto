class WaterBottle

  attr_reader :brand, :capacity

  def initialize(brand, capacity)
    @brand = brand
    @capacity = capacity
    @current_volume = 0
  end
  
  def empty?
    @current_volume == 0
  end

  def fill
    @current_volume = @capacity
  end

  def measure
    @current_volume
  end

  def squirt
    if empty?
      false
    else
      @current_volume -= 4
    end
  end
end