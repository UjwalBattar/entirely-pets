class Api::ProductsController < ApplicationController
  def index
    # search_query = search_params[:query]
    # @products = Product.search_products(search_query)
    @products = Product.filter(filter_params)
    render :index
  end

  private

  def product_params
    params.require(:product).permit(:title, :category, :color, :price, :animal, :image)
  end

  def filter_params
    params.require(:filters).permit(:animal, :category, :color)
  end
end
