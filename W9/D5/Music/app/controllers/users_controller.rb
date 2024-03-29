class UsersController < ApplicationController
  def show
    render :show
  end

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      log_in_user!(@user)
      redirect_to :show 
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
