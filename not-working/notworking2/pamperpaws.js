const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating the pamperpaw store schema

const PamperPawSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name field is required"],
  },
  rank: {
    type: String,
  },
  available: {
    type: Boolean,
    default: false,
  },
});

const Pamper = mongoose.model("pamper", PamperPawSchema);

module.exports = Pamper;
