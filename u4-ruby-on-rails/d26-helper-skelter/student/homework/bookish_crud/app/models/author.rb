class Author < ActiveRecord::Base
  has_many :books


  def alive?
    died_on.nil?
  end
end
