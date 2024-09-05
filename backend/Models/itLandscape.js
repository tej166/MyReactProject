const mongoose = require("mongoose");

const itLandscapeSchema = new mongoose.Schema({

  netNew: [
    {
      _id: false, // This prevents MongoDB from adding an _id to each subdocument
      "Using ERP (y/n)": String,
      Budget: String,
      "If yes, which one": String,
      Hardware: String,
      Authority: String,
      "If no, why": String,
      Need: String,
      "Opportunity for us 1": String,
      Timeframe: String,
      "Opportunity Value 1": String,
      "Current Database": String,
    },
  ],
  SAPInstalledBase: [
    {
      _id: false, // This prevents MongoDB from adding an _id to each subdocument
      "Opportunity for us 2": String,
      "Year of Implementation": String,
      "Opportunity Value 2": String,
      "No. of Users": String,
      "Opportunity for us 3": String,
      "Contract Expiry": String,
      "Opportunity Value 3": String,
      "Exact Version": String,
      Hardware: String,
      "No. of License": String,
      "Support Partner": String,
      "License Value": String,
      "Modules Implemented": String,
      "Total Project Cost": String,
      "Implementation Partner": String,
    },
  ],
});

const ITLandscape = mongoose.model(
  "itLandscape",
  itLandscapeSchema
);

module.exports = ITLandscape;
