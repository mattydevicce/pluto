class CreateHpColumn < ActiveRecord::Migration
  def change
    change_table :pokemons do |t|
      t.integer :current_hp
    end
  end
end
