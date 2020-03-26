const mongoose = require('mongoose');

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

model.exports = mongoose.model('User', UserSchema);