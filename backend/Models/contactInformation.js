const mongoose = require("mongoose");

const contactInformationSchema = new mongoose.Schema({
  itName: { type: String, required: true },
  itDlExt: String,
  itDesignation: String,
  itMobile: String,
  itEmail: { type: String, required: true },
  itPersonalEmail: String,

  financeName: { type: String, required: true },
  financeDlExt: String,
  financeDesignation: String,
  financeMobile: String,
  financeEmail: { type: String, required: true },
  financePersonalEmail: String,

  businessHeadName: { type: String, required: true },
  businessHeadDlExt: String,
  businessHeadDesignation: String,
  businessHeadMobile: String,
  businessHeadEmail: { type: String, required: true },
  businessHeadPersonalEmail: String,
  otherSections: [
    {
      _id: false, // This prevents MongoDB from adding an _id to each subdocument
      name: String,
      dlExt: String,
      designation: String,
      mobile: String,
      email: String,
      personalEmail: String,
    },
  ],
});

const ContactInformation = mongoose.model(
  "contactInformation",
  contactInformationSchema
);

module.exports = ContactInformation;
