const mongoose = require("mongoose");

const googleuserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    uid: {
      type: Number,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const GoogleUser = mongoose.model("GoogleUser", googleuserSchema);

module.exports = GoogleUser;
