class CreateCustomers < ActiveRecord::Migration
  def change
    create_table :customers do |t|
      t.string :name
      t.string :password_digest
      t.string :email
      t.references :dog, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end