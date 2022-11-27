class PostSerializer < ActiveModel::Serializer
  attributes :id, :text, :created_at, :updated_at

  has_many :likes
  has_many :replies
  belongs_to :user
  belongs_to :location
end
