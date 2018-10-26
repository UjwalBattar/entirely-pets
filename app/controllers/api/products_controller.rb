class Api::ProductsController < ApplicationController
  def index
    search_query = search_params[:query]
    @products = Product.search_products(search_query)
  end
end
