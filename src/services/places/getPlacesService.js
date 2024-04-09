const Place = require('../../models/placeModel');

const getPlacesService = async (req, res) => {
  const user = req.user;

  const places = await Place.find({ owner: user._id });

  res.status(200).send(places);
}

module.exports = getPlacesService;