class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.string :name
      t.text :description
      t.integer :width
      t.integer :length

      t.timestamps null: false
    end
  end
end
