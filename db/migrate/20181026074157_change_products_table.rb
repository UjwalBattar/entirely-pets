class ChangeProductsTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :products, :price_cents, :integer
    remove_column :products, :price_currency, :string
    
    add_column :products, :price, :decimal
  end
end
