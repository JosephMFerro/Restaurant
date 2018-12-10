class Api::ItemsController < ApplicationController
  def index
    render json: Item.all
  end

  def create
    item = Item.new(item_params)
    if item.save
      render json: item
    else
      render json: {errors: item.errors}
    end
  end

  def update
    item = Item.find(params[:id])
    render json: item
  end

  def destroy
    Item.find(params[:id]).destroy
    render json: { message: "Item Deleted" }
  end

  private
    def item_params
      params.require(:item).permit(:name)
    end

end
