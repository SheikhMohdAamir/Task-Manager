const bcrypt = require("bcrypt");
const generateToken = require("jsonwebtoken");
const key = "secretkey";
const users = require("../collections/users");
const signup = async (req, res, next) => {
  const { name, password, confirmPassword } = req.body;
  if (name.length === 0 || password.length === 0) {
    return res.status(500).json("Input Field Cannot Be Empty");
  }
  const checkIfExist = await users.find({ name: name });
  if (checkIfExist.length === 0) {
    try {
      bcrypt.hash(password, 10, async (err, hash) => {
        const addUser = new users({
          name,
          password: hash,
        });
        await addUser.save();
      });
      res.status(201).json("Signed Up Successful");
    } catch (err) {
      console.log(err);
    }
  } else res.status(500).json("Email Already Exists");
};

const login = async (req, res, next) => {
  const { name, password } = req.body;
  const checkIfExist = await users.find({ name: name });
  if (checkIfExist.length === 0)
    return res.status(404).json("Name Does Not Exist");
  else {
    const getPassword = checkIfExist[0].password;
    const getId = checkIfExist[0]._id;
    bcrypt.compare(password, getPassword, (err, result) => {
      if (result === true) {
        return res.status(201).json({
          message: "User Login Successfull",
          token: generateToken.sign({ userId: getId }, key),
        });
      } else if (err) return res.status(500).json("Something Went Wrong");
      else return res.status(401).json("Incorrect Password");
    });
  }
};

module.exports = { signup, login };
