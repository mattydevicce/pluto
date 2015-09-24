class BbqLocationsController < ApplicationController

  def index
    @bbq_locations = BbqLocation.joins('INNER JOIN')
  end

end