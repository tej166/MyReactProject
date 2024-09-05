const mongoose = require("mongoose");

const DescriptionSchema = new mongoose.Schema(
  {
    description: String,
    file: {
      data: Buffer,
      contentType: String,
      filename: String,
    },
    selectedOption: String,
    radioValue: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Description", DescriptionSchema);
