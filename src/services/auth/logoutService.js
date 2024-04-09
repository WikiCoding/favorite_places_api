const User = require('../../models/userModel');

const logoutService = async (req, res) => {
  const user = req.user;

  user.token = "invalidated";

  try {
    await user.save();

    res.status(200).send({ message: 'Logged out.' });
  } catch (err) {
    res.status(500).send({ message: `Error logging out: ${err}` })
  }
}

module.exports = logoutService;