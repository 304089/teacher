class Post < ApplicationRecord
  belongs_to :user
  has_many :favorites, dependent: :destroy

  def favorited_by?(user)   #いいね済みかどうか
    favorites.where(user_id: user.id).exists?
  end

end
