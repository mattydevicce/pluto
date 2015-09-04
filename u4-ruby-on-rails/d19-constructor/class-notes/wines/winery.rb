require "sinatra"

class WineryWebsite < Sinatra::Base
  get '/' do
<<<<<<< HEAD
    File.read('homepage.html')
  end

  get '/search' do
    "<p> #{params[:x]} #{params[:y]}"
=======

    File.read('homepage.html')
  end

  get '/add/:num1/:num2' do |num1, num2|
    (num1.to_i+num2.to_i).to_s
  end

  get '/search' do
    "#{params["search"].upcase}"
>>>>>>> 49194ac7a0b696cc984a372185eeb50c8c56e295
  end
end
