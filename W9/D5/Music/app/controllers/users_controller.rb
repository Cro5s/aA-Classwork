class UsersController < ApplicationController
  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      session[:session_token] = @user.reset_session_token!
      redirect_to :index #redirect to home page
    else
      flash[:errors] = @user.errors.full_messages
      render :new, status: 401
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :session_token)
  end
end
