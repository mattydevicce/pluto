require 'sinatra'


class EmergenyComplement < Sinatra::Base

  get '/' do
    @compliments = [
    "People behind you in class think you are the perfect height.",
    "Your instructors think you're amazing.",
    "Your posture during breaks effectively masks your exhaustion.",
    "Your commit messages are an inspiration to us all",
    "Your fingers are magic on the keys",
    "You are the moon of my life...my sun and stars"
    ]
    erb :index
  end

  get '/:name' do |name|
    @compliments = [
    "People behind you in class think you are the perfect height.",
    "Your instructors think you're amazing.",
    "Your posture during breaks effectively masks your exhaustion.",
    "Your commit messages are an inspiration to us all",
    "Your fingers are magic on the keys",
    "You are the moon of my life...my sun and stars"
    ]
    @namesies = name
    erb :index
  end

end