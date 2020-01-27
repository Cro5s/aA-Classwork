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
  validates :password, length: { minimum: 6, }, allow_nil: true 
  
  after_initialize :ensure_session_token

  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil if user.nil
    user.is_password?(password) ? user : nil
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
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

end
