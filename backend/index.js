const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const AuthRouter = require("./Routes/AuthRouter");
const ToDoRouter = require('./Routes/ToDoRouter');
const OptionsRouter = require("./Routes/OptionsRouter"); // Add this line
const CompanyInformation = require("./Models/companyInformation");
const ContactInformation = require("./Models/contactInformation");
const ITLandscape = require("./Models/itLandscape");
const UserRouter = require("./Routes/UserRouter"); // Adjust the path as needed
const descriptionRoutes = require("./Routes/DescriptionRoutes");
// const multer = require("multer");


app.use("/api/users/names", UserRouter);
const corsOptions = {
  origin: "http://localhost:3000", // Allow requests from this origin
  methods: "GET,POST,PUT,DELETE", // Allowed HTTP methods
  allowedHeaders: "Content-Type,Authorization", // Allowed headers
};

app.use(cors(corsOptions));
require("dotenv").config();
require("./Models/db");

const PORT = process.env.PORT || 8080;
app.get("/ping", (req, res) => {
  res.send("pong");
});

// app.use(cors());
app.use(bodyParser.json());
app.use("/auth", AuthRouter);
app.use('/todo', ToDoRouter);
app.use(express.json());
app.use("/api/options", OptionsRouter); 
app.use("/api/descriptions", descriptionRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.post("/companyInformation", async (req, res) => {
  const newCompanyInfo = new CompanyInformation(req.body);
  try {
    const savedCompanyInfo = await newCompanyInfo.save();
    res.status(201).json(savedCompanyInfo);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error saving company information", error });
  }
});

app.post("/contactInformation", async (req, res) => {
  try {
    console.log("Received data:", JSON.stringify(req.body, null, 2));
    const contactInfo = new ContactInformation(req.body);

    const savedContactInfo = await contactInfo.save();

    res.status(201).json(savedContactInfo);
  } catch (error) {
    console.error("Error saving contact information:", error);
    res.status(500).json({ error: "Failed to save contact information" });
  }
});

app.post("/itLandscape", async (req, res) => {
  try {
    console.log("Received data:", JSON.stringify(req.body, null, 2)); // Log input data
    const newitLandscape = new ITLandscape(req.body);
    const saveditLandscape = await newitLandscape.save();
    res.status(201).json(saveditLandscape);
  } catch (error) {
    console.error("Error saving IT landscape information:", error);
    res.status(400).json({ message: "Error saving IT landscape information", error });
  }
});

const mongoose = require("mongoose");
const leadSchema = new mongoose.Schema({
  companyInfo: { type: Object, required: true },
  contactInfo: { type: Object, required: true },
  itLandscape: { type: Object, required: true },
  descriptionSection: { type: Object, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Lead = mongoose.model("Lead", leadSchema);

app.use(express.json());

app.post("/api/leads", async (req, res) => {
  try {
    const lead = new Lead(req.body);
    await lead.save();
    const totalLeads = await Lead.countDocuments();
    res.json({ leadCount: totalLeads, createdAt: lead.createdAt });
  } catch (error) {
    res.status(500).json({ error: "Error creating lead" });
  }
});

