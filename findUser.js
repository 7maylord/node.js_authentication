const fs = require("fs");

function findUser(username) {
    const rawText = fs.readFileSync("./users.json", "utf8");
    const users = JSON.parse(rawText);
    return users.find((user) => user.username === username);
  }
    
  module.exports = {
    findUser,
  };