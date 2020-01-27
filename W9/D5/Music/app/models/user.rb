# == Schema Information
#
# Table name: users
#
#  id            :bigint           not null, primary key
#  email         :string           not null
#  password      :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  session_token :string           not null
#

class User < ApplicationRecord
  validates :email, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: { message: "Password can't be blank" }
  validates :password, length: { minimum: 6, allow_nil: true }
  
  after_initialize do |current_user|
    current_user.ensure_session_token 
  end

  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return user if user && user.is_password?(password)
    nil
  end
  
  def self.generate_session_token
    SecureRandome::urlsafe_base64(16)
  end
  
  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end
  
  def is_password?(password)
    bcrypt_pass = BCrypt::Password.new(user.password_digest)
    bcrypt_pass.is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :session_token)
  end
end
