const User = require("../../model/user");

async function getAllUsers(req, res, next) {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllUsers
 
};
