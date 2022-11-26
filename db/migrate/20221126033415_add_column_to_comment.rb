class AddColumnToComment < ActiveRecord::Migration[7.0]
  def change
    add_column :replies, :text_content, :text
  end
end
