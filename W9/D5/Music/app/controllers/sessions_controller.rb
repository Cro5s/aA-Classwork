class SessionsController < ApplicationController
  #Shows user login page
  def new
    render :new
  end

  #Logs users in
  def create
    user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    
    if user
      session[:session_token] = user.reset_session_token!
      flash[:success] = "Logged in Successfully. Welome Back!"
      redirect_to :index # Send user to home page url shortcut
    else
      flash[:error] = "Wrong email or password"
      render :new, status: 401
    end
  end

  def destroy
    current_user.reset_session_token!
    session[:session_token] = nil
    flash[:success] = "Logged out Successfully"
    redirect_to :index # Send user to home page url shortcut
  end
end
