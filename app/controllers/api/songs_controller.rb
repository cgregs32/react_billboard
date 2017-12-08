class Api::SongsController < ApplicationController

  def index
    render json: Song.all
  end

  def create
    song = Song.new(song_params)
    if song.save
      render json: song
    else
     render json: {errors: song.errors}, status: 422
    end
  end

  def update
    # item = Item.find(params[:id])
  end

  def destroy
    Song.find(params[:id]).destroy
  end

  private
    def song_params
      params.require(:song).permit(:title, :duration, :rank)
    end
end
