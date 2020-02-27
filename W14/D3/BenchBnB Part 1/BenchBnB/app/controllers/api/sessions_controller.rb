class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username],params[:user][:password])

    if @user
      render json: ["Logged in successfully!"]
      render "/api/user/show"
    else
      render json: ["Invalid username or password"], status: 401
    end
  end

  def destroy
    logout
    render json: { message: "Logout successful." }
  end
end