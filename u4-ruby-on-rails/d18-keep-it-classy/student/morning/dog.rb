module Animals
  class Dog
    def initialize(options={})
      @breed  = options[:breed]
      @ears   = options[:ears]
      @energy = options[:energy]
      @size   = options[:size]
      @coat   = options[:coat]
    end

    def self.random
      Dog.new({
        ears: [:drop_ear, :bat, :blunt].sample,
        energy: [:high, :medium, :low].sample,
        size: [:small, :medium, :large].sample,
        coat: [:single, :double, :hair].sample
        })
    end
    # or if we want to set all getters

    # attr_reader :breed, :ears, :energy, :size, :coat
    # attr_writer :breed, :ears, :energy, :size, :coat

    # or to combine them both
    attr_accessor :breed, :ears, :energy, :size, :coat 

    # def breed
    #   @breed
    # end

    # def breed=(new_breed)
    #   @breed = new_breed
    # end

    # def ear
    #   @ear
    # end

    # def ear=(new_ear)
    #   @ear = new_ear
    # end

    # def energy
    #   @energy
    # end

    # def energy=(new_energy)
    #   @energy = new_energy
    # end

    # def size
    #   @size
    # end

    # def size=(new_size)
    #   @size = new_size
    # end

    # def coat
    #   @coat
    # end

    # def coat=(new_coat)
    #   @coat = new_coat
    # end
  end
end