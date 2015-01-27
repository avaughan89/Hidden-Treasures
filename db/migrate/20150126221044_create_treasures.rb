class CreateTreasures < ActiveRecord::Migration
  def change
    create_table :treasures do |t|
      t.string :name
      t.string :address
      t.string :description
      t.float :lat
      t.float :long
      t.belongs_to :user_id
  end
end
