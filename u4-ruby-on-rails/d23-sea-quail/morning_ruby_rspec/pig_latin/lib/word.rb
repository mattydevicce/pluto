class Word < String

  def initialize(word)
    @word = word.to_s
  end
  def to_pig
    if @word.start_with?('a', 'e', 'i', 'o', 'u')
      @word += 'way'
    else
      first_letter = @word.slice!(0)
      if @word.start_with?('a', 'e', 'i', 'o')      
        @word += first_letter + 'ay'
      else
        second_letter = @word.slice!(0)
        if @word.start_with?('u')
          third_letter = @word.slice!(0)
          @word += first_letter + second_letter + third_letter +'ay'
        else
          @word += first_letter + second_letter + 'ay'
        end
      end        
    end
  end
end