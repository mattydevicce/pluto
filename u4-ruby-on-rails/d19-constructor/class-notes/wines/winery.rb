require "sinatra"

class WineryWebsite < Sinatra::Base
  get '/' do
    File.read('homepage.html')
  end

  get '/search' do

  end
end
