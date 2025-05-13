
const express = require("express");
// const userRoutes = require("./user.routes");
const router = express.Router();

// Health check specific to API
router.get("/hello", (req, res) => {
  res.status(200).json({ message: "API is running" });
});

// Mount routes
// router.use("/users", userRoutes);

module.exports = router;
