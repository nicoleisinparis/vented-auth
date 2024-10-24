const mongoose = require("mongoose");

const User = mongoose.model("User", {
  account: {
    username: String,
    avatar: Object,
  },
  email: String,
  password: String,
  newsletter: Boolean,
  salt: String,
  token: String,
  hash: String,
});

module.exports = User;
