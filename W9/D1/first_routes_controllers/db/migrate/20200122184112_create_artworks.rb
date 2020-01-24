class CreateArtworks < ActiveRecord::Migration[5.2]
  def change
    create_table :artworks do |t|
      t.string :title, null: false
      t.string :image_url, null: false
      t.integer :artist_id, null: false

      t.timestamps

      t.index :title
      t.index :artist_id 
      t.index :image_url, unique: true
      t.index [:artist_id, :title], unique: true
    end
  end
end
