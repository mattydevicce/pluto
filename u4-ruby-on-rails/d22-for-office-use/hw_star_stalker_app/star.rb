require 'sinatra'
require 'pg'

$db = PG.connect(dbname: 'star_stalker')

class Star < Sinatra::Base

  get '/' do
    erb :index, layout: :default_layout
  end

  get '/stars/:id' do |id|
    @actors = $db.exec("SELECT * FROM stars WHERE id='#{id}'")
    erb :stars, layout: :default_layout
  end

  get '/stars' do
    @actors = $db.exec("SELECT * FROM stars")
    erb :stars, layout: :default_layout
  end

  get '/about' do
    erb :about, layout: :default_layout
  end

  post '/star_sub' do
    poster = $db.exec_params("INSERT INTO stars (name, alive, born_on, image_url, embed_id) VALUES ($1, $2, $3, $4, $5)", [params[:namesies],true,params[:bday],params[:picz],params[:weirdId]]).first
    # I want it to redirect to the newly created stars page
    redirect "/stars/'#{poster}'"
  end

end