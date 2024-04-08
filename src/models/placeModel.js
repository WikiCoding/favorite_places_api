const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  placeName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  placeAddress: {
    type: String,
    trim: true,
    default: ""
  },
  placeDescription: {
    type: String,
    trim: true,
    default: ""
  },
  placeLatitude: {
    type: Number,
    default: 0.0,
  },
  placeLongitude: {
    type: Number,
    default: 0.0,
  },
  placeImageUrl: {
    type: String,
    default: ""
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
});

const Place = mongoose.model('Place', placeSchema);

placeSchema.toJSON = function () { // stringifying objects sent
  const place = this;
  const placeObject = place.toObject(); // provided by mongoose

  return placeObject;
}

module.exports = Place;