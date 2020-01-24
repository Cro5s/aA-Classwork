class ArtworksController < ApplicationController
  def index
    artist = User.find(params[:user_id])
    artworks = artist.artworks
    artwork_shares = artist.artwork_shares
    result = [artworks, artwork_shares]

    render json: result
 
  end

  def create
    artwork = Artwork.new(artwork_params)

    if artwork.save
      render json: artwork
    else
      render json: artwork.errors.full_messages, status: 422
    end

  end

  def show
    artwork = Artwork.find(params[:id])
    render json: artwork
  end

  def destroy
    artwork = Artwork.find(params[:id])
    artwork.destroy

    render plain: 'Artwork has been deleted!'
    render json: artwork
  end

  def update
    artwork = Artwork.find(params[:id])

    if artwork.update(artwork_params)
      render json: artwork
    else
      render json: artwork.errors.full_messages, status: 422
    end
  end 

  private
  def artwork_params
    params.require(:artwork).permit(:title, :image_url, :artist_id)
  end
end