class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?

  def after_sign_in_path_for(resource)
    if current_user
      flash.now[:notice] = "ログインしました。"
      user_path(current_user)
    else
      flash.now[:notice] = "登録が完了しました。"
      user_path(current_user)
    end
  end

  def after_sign_out_path_for(resource)
    flash.now[:notice] = "ログアウトしました。"
    root_path
  end

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
  end
end
