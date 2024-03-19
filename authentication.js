const fs = require("fs");
const path = require("path");
const { findUser } = require("./findUser.js");


function authenticate(req, res, next) {
    const { username, password } = req.headers;
    const user = findUser(username);
    if (!user) {
      res.statusCode = 401;
      res.end();
      return;
    }
    if (user.username !== username || user.password !== password) {
      res.statusCode = 401;
      res.end();
      return;
    }
    next(req, res);
  }

  module.exports = {
    authenticate
  }