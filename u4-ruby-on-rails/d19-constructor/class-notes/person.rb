class Person
  def initialize(first_name, last_name, age)
    @first_name = first_name
    @last_name = last_name
    @age = age
  end

  def full_name
    @first_name + ' ' + @last_name
    "#{@first_name} #{@last_name}"
  end

  def greeting
    "Hello #{full_name}"
  end
end
