class BloggersController < ApplicationController

  def index
    @bloggers = Blogger.all
  end

  def show

    if params[:x]
      gp = params[:x]
    else
      gp = params[:id]
    end

    @blogger = Blogger.find(gp)
  end
end

