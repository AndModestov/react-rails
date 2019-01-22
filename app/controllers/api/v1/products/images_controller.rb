class Api::V1::Products::ImagesController < ApplicationController
  def index
    respond_with :api, :v1, product.images
  end

  private

  def product
    @product ||= Product.find(params[:product_id])
  end
end
