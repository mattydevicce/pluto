class CreateAuthors < ActiveRecord::Migration
  def change
    create_table :authors do |t|
      t.string :name
      t.string :born_on
      t.string :died_on, null: false
      t.string :gender
      t.boolean :has_pseudonym, :default => false

      t.timestamps null: false
    end
  end
end
