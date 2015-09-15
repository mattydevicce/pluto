class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def current_customer
    if session[:customer_id]
      @customer ||= Customer.find(session[:customer_id])
    end
  end
  helper_method :current_customer

end
