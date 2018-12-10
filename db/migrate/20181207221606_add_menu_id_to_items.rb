class AddMenuIdToItems < ActiveRecord::Migration[5.2]
  def change
    add_column :items, :menu_id, :integer
  end
end
