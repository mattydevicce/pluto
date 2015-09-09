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
    $db.exec_params("INSER INTO stars (name, alive, born_on, image_url, embed_id) VALUES ($1, $2, $3, $4, $5)" [params[:name],params[:here],params[:bday],params[:pic],params[:weirdId]])
    @actors = $db.exec("SELECT * FROM stars")
    erb :stars, layout: :default_layout
  end

end