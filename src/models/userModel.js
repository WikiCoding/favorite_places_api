const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  token: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', userSchema);

userSchema.virtual('Place', {
  ref: 'Place',
  localField: '_id',
  foreignField: 'owner'
});

userSchema.toJSON = function () { // stringifying objects sent
  const user = this;
  const userObject = user.toObject(); // provided by mongoose

  delete userObject.password // removing just from the profile response
  delete userObject.tokens

  return userObject;
}

// Delete user places when user is removed
userSchema.pre('remove', async function (next) {
  const user = this;

  await Place.deleteMany({ owner: user._id });

  next();
});

module.exports = User;