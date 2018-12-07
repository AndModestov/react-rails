class Api::V1::ProductsController < ApplicationController
  def index
    render json: { products: Product.all }
  end

  def show
    render json: { product: product }
  end

  private

  def product
    @product ||= Product.find(params[:id])
  end
end
