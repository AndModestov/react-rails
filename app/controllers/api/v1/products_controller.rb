class Api::V1::ProductsController < ApplicationController
  def index
    respond_with :api, :v1, Product.all
  end

  def show
    respond_with :api, :v1, product
  end

  private

  def product
    @product ||= Product.find(params[:id])
  end
end
