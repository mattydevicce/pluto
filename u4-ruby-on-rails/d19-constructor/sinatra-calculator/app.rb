# I have provided two solutions. the second one (the one that isn't refactored to include the Calculator class) is commented out below the refactored one.

# the server with using the Calculator class and switch statements
# require_relative 'sinatra'
require_relative 'calculator'

module SinatraCalculator
  class Server < Sinatra::Base

    configure :development do
      register Sinatra::Reloader
    end

    get '/' do
      redirect '/calc'
    end

    get '/calc' do
      File.read('homepage.html')
    end

    get '/calc/add' do
      "<p>#{Calculator.add(params[:x],params[:y])}</p>"
    end

    get '/calc/subtract' do
      "<p>#{Calculator.subtract(params[:x],params[:y])}</p>"
    end

    get '/calc/multiply' do
      "<p>#{Calculator.multiply(params[:x],params[:y])}</p>"
    end

    get '/calc/divide' do
      "<p>#{Calculator.divide(params[:x],params[:y])}</p>"
    end

    get '/calc/sqrt' do
      "<p>#{Calculator.sqrt(params[:x])}</p>"
    end
  end #end class
end #end module