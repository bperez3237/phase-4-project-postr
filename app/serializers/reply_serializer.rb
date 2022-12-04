class ReplySerializer < ActiveModel::Serializer
  attributes :id, :user_id, :post_id, :text_content, :created_at, :updated_at

  belongs_to :user
end
