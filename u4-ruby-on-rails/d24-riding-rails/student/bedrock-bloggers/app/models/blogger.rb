class Blogger < ActiveRecord::Base

  has_many :blogs
  
  def say!
    puts slogan
  end
end