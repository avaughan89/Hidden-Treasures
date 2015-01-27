class CreateTreasures < ActiveRecord::Migration
  def change
    create_table :treasures do |t|
      t.string :title
      t.string :location
      t.belongs_to :user_id, index: true
      t.timestamps
    end
  end
end
