class Api::V1::ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :image_url

  def image_url
    object.images.first.url
  end
end
