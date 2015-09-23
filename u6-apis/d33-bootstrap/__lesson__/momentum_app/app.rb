module App
  class Server < Sinatra::Base

    configure :development do
      register Sinatra::Reloader
    end

    $db = {
      location: nil,
      name: nil,
      tags: [],
      todos: []
    }

    get('/') do
      @name = $db[:name]
      @img = Flickr.fetch_random_image($db[:tags])
      @temp = OpenWeatherMap.fetch_temp_for($db[:location])
      @tasks = $db[:todos]
      @location = $db[:location]
      erb(:index)
    end

    post('/todos') do
      $db[:todos].push( params[:task] )
      redirect '/'
    end

    get('/profile/edit') do
      @name = $db[:name]
      @location = $db[:location]
      @tags = $db[:tags].join(",")
      erb :edit
    end

    post('/profile') do
      $db[:name]     = params[:name]
      $db[:location] = params[:location]
      $db[:tags]     = params[:tags].split(",")
      redirect "/"
    end

  end # Server
end # App
