class DogsController < ApplicationController

  def new
    @dog = Dog.new
  end

  def create
    dog_params = params.require(:dog).permit(:name, :age_months, :color, :breed, :tagged)
    @dog = Dog.new(dog_params)
    if @dog.valid?
      @dog.save
      redirect_to dog_url(@dog)
    else
      @message = "Dog name cannot be blank"
      render :new
    end
  end

  def show
    @dog = Dog.find(params[:id])
  end
end