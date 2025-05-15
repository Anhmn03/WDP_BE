const express = require("express");
const userRoutes = require("./user.routes");
const router = express.Router();
const {authenticate,authorizeRole} = require("../middlewares/auth");


// Health check specific to API
router.get("/hello", (req, res) => {
  res.status(200).json({ message: "API is running" });
});
router.get("/protect",authenticate, authorizeRole("user"),(req, res) => {
  res.status(200).json({ message: "API is protect for user" });
});
// Mount routes
router.use("/users", userRoutes);

module.exports = router;
