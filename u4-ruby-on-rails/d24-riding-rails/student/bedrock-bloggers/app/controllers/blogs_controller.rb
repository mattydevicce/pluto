class BlogsController < ApplicationController
<<<<<<< HEAD

  def show
    @blog = Blog.find(params[:id])
  end

=======
	def show
		@blog = Blog.find(params[:id])
	end
>>>>>>> c0bc355cb2177f515d00c7372d3f060accf368f8
end