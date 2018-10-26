class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :title
      t.string :image
      t.string :animal
      t.string :category
      t.string :color
      t.monetize :price

      t.timestamps
    end
  end
end
