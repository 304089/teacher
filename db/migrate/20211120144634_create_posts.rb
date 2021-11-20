class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.text :introduction
      t.string :youtube_url, null: false
      t.timestamps
    end
  end
end
