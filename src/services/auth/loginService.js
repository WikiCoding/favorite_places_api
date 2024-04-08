const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/userModel');

const loginService = async (req, res) => {
  const { name, password } = req.body;

  if (isInvalidInput(name, password)) {
    res.status(400).send({ message: "Empty username or password." });
  }

  const user = await User.findOne({ name });

  if (user === null) {
    res.status(404).send({ message: 'Not found.' });
    return;
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    res.status(400).send({ message: "User not found or password don't match" });
    return;
  }

  user.token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: Math.floor(Date.now() / 1000) + (24 * 3600 * 7) }); // 1 week

  res.status(200).send({ user });

}

const isInvalidInput = (name, pw) => {
  if (name.trim().length === 0 || pw.trim().length === 0) return true;
  return false;
};

module.exports = loginService;