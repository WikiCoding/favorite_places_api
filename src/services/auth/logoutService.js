const User = require('../../models/userModel');

const logoutService = async (req, res) => {
  const name = req.body.name;
  const user = await User.findOne({ name });

  if (user === null) {
    res.status(404).send({ message: 'User not found.' });
    return;
  }

  user.token = "";
  try {
    res.status(200).send({ message: 'Logged out.' });
  } catch (err) {
    res.status(500).send({ message: `Error logging out: ${err}` })
  }
}

module.exports = logoutService;