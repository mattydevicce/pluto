require 'rest_client'
require 'json'

class Movie
  
  def self.find(name)
    Net::HTTP.get('omdbapi.com', "/?t=#{name}")
  end
  def initialize

  end
end