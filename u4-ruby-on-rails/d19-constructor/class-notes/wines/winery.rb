require "sinatra"

class WineryWebsite < Sinatra::Base
  get '/' do
    "<h1>Hello World</h1>"
  end

  get '/blog' do
    '<html><head><link rel="stylesheet" href="/style.css"></head><body><h1>Hello</h1></body></html>'
  end

  get '/style.css' do
    "body { font-size: #{rand(100)}px; }"
  end
end
