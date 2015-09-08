require 'sinatra'
require 'pg'

$db = PG.connect(dbname: 'the_office')
class TheOffice < Sinatra::Base

  def title
    @title || "Default"
  end

  get '/style.css' do
    scss :style
  end

  get '/' do
    erb :homepage
  end

end # end the office class