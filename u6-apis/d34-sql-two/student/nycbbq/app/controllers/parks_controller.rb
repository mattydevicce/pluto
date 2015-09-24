class ParksController < ApplicationController

  
  def index
    @parks = Park.all
  end


  def offset
    @page = params[:page].to_i
    @parks = Park.limit(25).offset(@page*25)
  end
end