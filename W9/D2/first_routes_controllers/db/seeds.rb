# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Artwork.destroy_all
ArtworkShare.destroy_all

user1 = User.create!(username: 'Bobcat')
user2 = User.create!(username: 'Jandeer')

artwork1 = Artwork.create!(title: 'Dreams', image_url: 'www.dreams.com', artist_id: user1.id)
artwork2 = Artwork.create!(title: 'Nightmares', image_url: 'www.nightmares.com', artist_id: user2.id)

artwork_share1 = ArtworkShare.create!(viewer_id: user1.id, artwork_id: artwork2.id)
artwork_share2 = ArtworkShare.create!(viewer_id: user2.id, artwork_id: artwork1.id)