const User = require('../db/models/user');
const Post = require('../db/models/post');

const addModels = (req, _res, next) => {
  req.db = {
    User,
    Post,
  };
  next();
};

module.exports = addModels;
