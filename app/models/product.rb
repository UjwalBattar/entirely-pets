class Product < ApplicationRecord
  def self.search_products(query)
    query_one = "%" + query.split("&")[0].to_s.downcase + "%"
    query_two = "%" + query.split("&")[1].to_s.downcase + "%"
    Product.where('
      lower(category) LIKE ? and
      lower(color) LIKE ?',
      query_one, query_two
    )
  end
end
