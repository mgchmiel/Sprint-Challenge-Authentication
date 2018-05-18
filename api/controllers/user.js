const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const { username, password } = req.body;
  if (!(username && password))
  res.status(422).json('Need to Provide UserName and Password');
else
  User.create({ username: username, password: password })
    .then(user => res.status(201).json({ message: `${user.username} Created` }))
    .catch(error => res.status(500).json(error));
};

module.exports = {
  createUser
};
