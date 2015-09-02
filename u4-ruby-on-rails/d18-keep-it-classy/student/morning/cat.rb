class Cat
  def initialize(options={})
    @cat = options[:type]
  end

  def speak
    if @cat == 'persian'
      puts 'purr'
    else
      puts 'meyowza'
    end
  end
end

my_kitty = Cat.new({type:'persian'})
my_kitty.speak

my_other_kitty = Cat.new({type:'orange'})
my_other_kitty.speak

my_other_other_kitty = Cat.new
my_other_other_kitty.speak