class ArtworksharesController < ApplicationController
  def index
    artworkshares = ArtworkShare.all
    render json: artworkshares
  end

  def create
    artworkshare = ArtworkShare.new(artwork_share_params)

    if artworkshare.save
      render json: artworkshare
    else
      render json: artworkshare.errors.full_messages, status: 422
    end

  end

  def destroy
    artworkshare = ArtworkShare.find(params[:id])
    artworkshare.destroy

    render plain: 'artworkshare has been deleted!'
    # render json: artworkshare
  end


  private
  def artwork_share_params
    params.require(:artworkshare).permit(:viewer_id, :artwork_id)
  end
end