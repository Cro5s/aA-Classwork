json.pokemon do
  json.extract! @poke, :id, :name, :attack, :defense, :moves, 
  :poke_type, :item_ids

  json.image_url asset_path("pokemon_snaps/#{@poke.image_url}") 

  json.items do
    @poke.items.each do |item|
      json.set! item.id do
        json.extract! item, :id, :name, :pokemon_id, :price, :happiness
        json.image_url asset_path(item.image_url)  
      end
    end
  end
end

# {
#   "pokemon": {
#     "id": 5,
#     "name": "Rhydon",
#     "attack": 130,
#     "defense": 120,
#     "moves": [
#       "horn attack",
#       // ...
#     ],
#     "poke_type": "ground",
#     "image_url": "/assets/pokemon_snaps/112-054fbbe24b26953dc0a44be531802d9a5351e19386c5aad125e36e1d3006fd66.svg",
#     "item_ids": [
#       642,
#       // ...
#     ]
#   },
#   "items": {
#     "640": {
#       "id": 640,
#       "name": "Small Concrete Wallet",
#       "pokemon_id": 214,
#       "price": 71,
#       "happiness": 20,
#       "image_url": "/assets/pokemon_potion.svg"
#     },
#     // ...
#   }
# }