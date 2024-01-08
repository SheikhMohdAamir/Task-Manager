const jwt = require("jsonwebtoken");
const users = require("../collections/users")

const authenticate = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    const extractUserId = jwt.verify(token, "secretkey");
    const findUser= await users.find({_id:extractUserId.userId})
    req.user = findUser;
    next();
  } catch (err) {
    console.log("ERROR IN MIDDLEWARE", err)
  }
};

module.exports = authenticate;