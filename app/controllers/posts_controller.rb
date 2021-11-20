class PostsController < ApplicationController
  def index
    @posts = Post.all
  end

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
    redirect_to posts_path
  end

  private
  def post_params
    params.require(:post).permit(:title,:introduction, :youtube_url)
  end
end
