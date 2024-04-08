const Place = require('../../models/placeModel');

const addPlaceService = async (req, res) => {

  // TODO: check not null
  const place = new Place(req.body);

  try {
    await place.save();
    res.status(201).send({ place });
  } catch (err) {
    res.status(400).send({ message: `Error saving ${err}` });
  }

}

module.exports = addPlaceService;