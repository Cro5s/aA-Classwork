class Api::PokemonController < ApplicationController

  def index
    @pokemon = Pokemon.all 
    # render json: @pokemons 
  end 

  def show
    @poke = Pokemon.find(params[:id])

    # if @poke
    #   render json: @poke
    # else
    #   render json: "No pokemon with that id"
    # end
  end 

end 

