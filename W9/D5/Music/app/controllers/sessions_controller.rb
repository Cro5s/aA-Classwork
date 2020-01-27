class SessionsController < ApplicationController
  #Shows user login page
  def new
    render :new
  end

  #Logs users in
  def create
    user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    
    if user
      log_in_user(user)
      flash[:success] = "Logged in Successfully. Welome Back!"
      redirect_to user_url
    else
      flash.now[:error] = "Wrong email or password"
      render :new, status: 401
    end
  end

  def destroy
    log_out_user!
    flash[:success] = "Logged out Successfully"
    redirect_to :index # Send user to home page url shortcut
  end
end
