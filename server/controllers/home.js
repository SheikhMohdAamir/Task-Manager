const tasks = require("../collections/tasks");

const getData = async (req, res, next) => {
  try {
    const userData = await tasks.find({ userId: req.user[0]._id });
    res.status(201).json(userData);
  } catch (err) {
    console.log(err);
  }
};
const addData = async (req, res, next) => {
  const { title, description } = req.body;
  try {
    const addUser = new tasks({ title, description, userId: req.user[0]._id });
    await addUser.save();
    const getUserData = await tasks.find({ userId: req.user[0]._id });
    res.status(201).json(getUserData);
  } catch (err) {
    console.log(err);
  }
};

const deleteData = async (req, res, next) => {
  const { id } = req.body;
  try {
    await tasks.deleteOne({ _id: id });
    const getUserData = await tasks.find({ userId: req.user[0]._id });
    res.status(201).json(getUserData);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getData, addData, deleteData };
