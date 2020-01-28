class BandsController < ApplicationController
  def index
    @bands = Band.all
    render :index
  end

  def create
    @band = Band.new(band_params)
    
    if @band.save
      flash[:success] = "Band successfully added!"
      redirect_to band_url(@band)
    else
      flash.now[:error] = @band.errors.full_messages
      render :new, status: 401
    end
  end

  def new
    @band = Band.new
    render :new
  end

  def edit
    @band = Band.find(params[:id])
    render :edit
  end

  def show
    @band = Band.find(params[:id])
    render :show
  end

  def update
    @band = Band.find(params[:id])

    if @band.update(band_params)
      flash[:success] = "Band Updated!"
      redirect_to band_url(@band)
    else
      flash.now[:error] = @band.errors.full_messages
      render :edit
    end
  end

  def destroy
    @band = Band.find(params[:id])
    @band.destroy
    redirect_to band_index_url
  end

  private
  def band_params
    params.require(:band).permit(:name)
  end
end
