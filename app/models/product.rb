class Product < ApplicationRecord
  def self.filter(filters)
    animal_filter = "%" + filters[:animal].to_s.downcase + "%"
    category_filter = "%" + filters[:category].to_s.downcase + "%"
    color_filter = "%" + filters[:color].to_s.downcase + "%"
      products =  Product.where('
        lower(animal) LIKE ? and
        lower(category) LIKE ? and
        lower(color) LIKE ?',
        animal_filter, category_filter, color_filter
      )
    products
  end
end
