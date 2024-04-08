const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/userModel');

const registerService = async (req, res) => {
  const name = req.body.name;
  const pw = req.body.password;

  if (isInvalidInput(name, pw)) {
    res.status(400).send({ message: 'Invalid input.' });
    return;
  }

  const hashSalt = 8;
  const encryptedPw = bcrypt.hashSync(pw, hashSalt);

  const user = new User({ name, password: encryptedPw });

  user.token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: Math.floor(Date.now() / 1000) + (24 * 3600 * 7) }); // 1 week

  try {
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send({ message: 'Username already exists.' });
  }
}

const isInvalidInput = (name, pw) => {
  if (name.trim().length === 0 || pw.trim().length === 0) return true;
  return false;
}

module.exports = registerService;