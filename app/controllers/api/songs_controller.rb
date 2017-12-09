class Api::SongsController < ApplicationController
  before_action :set_song, except: [:index, :create]


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
    if @song.update(song_params)
      render json: @song
    else
      render json: {errors: @song.errors.full_messages.join(',')}, status: :bad_request
    end
  end

  def destroy
    Song.find(params[:id]).destroy
  end

  private
    def song_params
      params.require(:song).permit(:title, :duration, :rank)
    end

    def set_song
      @song = Song.find(params[:id])
    end
end
