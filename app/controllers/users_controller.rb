class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    @post = Post.new
    @posts = Post.all.order(id: "DESC").includes(:user)
    @favorite_posts = Post.joins(:favorites).where(favorites: {user_id: @user.id})
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      flash[:notice] = "プロフィールを更新しました。"
      @posts = Post.all.includes(:user)
      redirect_to request.referer
    else
      render "show"
    end
  end

  private
  def user_params
    params.require(:user).permit(:name, :introduction, :profile_image)
  end

end