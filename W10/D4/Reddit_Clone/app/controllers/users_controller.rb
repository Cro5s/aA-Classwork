class UsersController < ApplicationController
  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      redirect_to subs_url
    else
      flash.now[:error] = @user.errors.full_messages
      render :new
    end 
  end
  
  private
  def user_params
    params.require(:user).permit(:email, :password)
  end

end
