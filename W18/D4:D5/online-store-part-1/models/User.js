const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = require('../config/keys').secretOrKey;

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  }
  
}, {
  timestamps: true
  
});

UserSchema.statics.signUp = async function(email, password) {
  const User = this;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await new User({ email, password: hashedPassword });
  await user.save();
  const token = jwt.sign({ _id: user._id }, secret);

  user.token = "Bearer " + token;

  return user;

};

module.exports = mongoose.model('User', UserSchema);