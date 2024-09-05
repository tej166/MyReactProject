const express = require("express");
const router = express.Router();
const User = require("../Models/User"); // Adjust the path as needed

router.get("/names", async (req, res) => {
  try {
    const users = await User.find({}, "name");
    const names = users.map((user) => user.name);
    res.json(names);
  } catch (error) {
    console.error("Error fetching usernames:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
