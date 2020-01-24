class CreateArtworkShares < ActiveRecord::Migration[5.2]
  def change
    create_table :artwork_shares do |t|
      t.integer :artwork_id, null: false
      t.integer :viewer_id, null: false

      t.timestamps

      t.index :artwork_id
      t.index :viewer_id
      t.index [:viewer_id, :artwork_id], unique: true
    end
  end
end
