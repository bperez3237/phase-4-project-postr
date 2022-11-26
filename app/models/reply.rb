class Reply < ApplicationRecord
    belongs_to :user
    belongs_to :post

    validates :text_content, presence: true
    validates :text_content, length: { maximum: 420 }
end
