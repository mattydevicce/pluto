class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :title
      t.string :released_on
      t.string :genre
      t.references :author, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
