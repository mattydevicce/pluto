require 'json'
require 'pry'
require 'rest-client'
require 'sinatra/base'
require 'sinatra/reloader'

require_relative './lib/flickr'
require_relative './lib/open_weather_map'
require_relative './app'

run App::Server
