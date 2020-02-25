@pokemon.each do |poke|
  json.set! poke.id do
    json.extract! poke, :id, :name
    json.image_url asset_path("pokemon_snaps/#{poke.image_url}")
  end
end

# {
#   1: {
#     id: 1,
#     name: /*...*/,
#     image_url: /*...*/
#   },
#    2: {
#      id: 2,
#      name: /*...*/,
#     image_url: /*...*/
#   },
#   //..
# }