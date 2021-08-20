const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ItemSchema = new Schema({
  name: { type: String, required: true },
  created_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Items", ItemSchema)
