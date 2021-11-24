class PostsController < ApplicationController

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    url = params[:post][:youtube_url]
    url = url.last(11)
    @post.youtube_url = url
    @post.user_id = current_user.id
    @post.save
    flash[:notice] = "授業を投稿しました。"
    redirect_to user_path(@post.user)
  end

  def show
    @post = Post.find(params[:id])
  end

  def index
    @posts = Post.all
  end

  private
  def post_params
    params.require(:post).permit(:title,:introduction, :youtube_url)
  end
end
