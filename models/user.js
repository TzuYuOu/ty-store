const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const userSchema = new Schema({
  phone: {
    type: String,
    required: [true, "Please add a phone number"],
    
  },
  email: {
    type: String,
    required: [true, "Please provide email address"],
    unique: true,
    validate: [validator.isEmail, 'Please provide an valid email']
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
    minlength: 6,
    select: false
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date
});

userSchema.pre('save', async function (next){
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
})

userSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.getSignedJwtToken = function (){
  return jwt.sign({id: this._id}, process.env.JWT_SECRET,{
    expiresIn: 24*3600
  });
}

userSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  // Hash token (private key) and save to database
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // Set token expire date
  this.resetPasswordExpire = Date.now() + 10 * (60 * 1000); // Ten Minutes
  
  return resetToken;
}

module.exports = mongoose.model('User',userSchema);