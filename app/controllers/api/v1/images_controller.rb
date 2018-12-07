class Api::V1::ImagesController < ApplicationController
  def index
    respond_with :api, :v1, Image.all
  end

  def show
    respond_with :api, :v1, image
  end

  private

  def image
    @image ||= Image.find(params[:id])
  end
end
