require 'sinatra'
class WineryWebsite < Sinatra::Base
  get '/' do
    "<h1>Hello World</h1>"
  end
end