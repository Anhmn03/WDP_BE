const express = require("express");
const router = express.Router();
const authController = require("../controller/auth.controller");
const userController = require("../controller/user.controller");

// router.get(
//   "/",
//   authenticate,
//   authorizeRole("admin"),
//   userController.getAllUsers,
// );

router.get(
  "/",
  userController.getAllUsers,
);

router.post(
  "/login",
  authController.login,
);

module.exports = router;