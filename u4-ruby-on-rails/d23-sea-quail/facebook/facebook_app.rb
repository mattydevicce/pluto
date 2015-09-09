require 'sinatra'

class FacebookApp < Sinatra::Base
  get '/' do
    @people = $db.exec("SELECT * FROM people")
    erb :people, layout: :main_layout
  end

  get '/you' do
    @you = $db.exec("SELECT * FROM people WHERE first_name='Matt'").first
    erb :you, layout: :main_layout
  end

  get '/people' do
    
    erb :people, layout: :main_layout
  end

end
