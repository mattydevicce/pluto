class CheesesController < ApplicationController

  attr_accessor :name, :milk_type, :description, :image_url
  def index
    @cheeses = Cheese.all
  end

  def show
    @cheese = Cheese.find(params[:id])
  end

  def new
    @cheese = Cheese.new
  end

  def edit
    @cheese = Cheese.find(params[:id])
  end

  def create
    @cheese = Cheese.create(name: params[:name],
                            milk_type: params[:milk_type],
                            description: params[:description],
                            image_url: params[:image_url])
    redirect_to '/cheeses'
  end

  def update
    blah = Cheese.find(params[:id])
    blah.update({name: params[:name],
                             milk_type: params[:milk_type],
                             description: params[:description],
                             image_url: params[:image_url]})
    redirect_to "/cheeses/#{blah.id}"
  end
end #end cheeses class