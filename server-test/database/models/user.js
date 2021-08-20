const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", UserSchema);
