const mongoose = require("mongoose");
const tasksSchema = new mongoose.Schema({
  title: String,
  description: String,
  userId: String,
});

module.exports = mongoose.model("tasks", tasksSchema);