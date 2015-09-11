class BloggersController < ApplicationController

  def index
<<<<<<< HEAD
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
=======
      @bloggers = Blogger.all
  end

  def show
    @blogger = Blogger.find(params[:id])
  end

end
>>>>>>> c0bc355cb2177f515d00c7372d3f060accf368f8
