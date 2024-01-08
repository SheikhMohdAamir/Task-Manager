const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(bodyParser.json());
app.use(cors());
require("./database/config");
const loginRoutes = require("./routes/loginRoutes");
const homeRoutes = require("./routes/homeRoutes")
app.use("/user", loginRoutes);
app.use("/user",homeRoutes)
app.listen(4000, () => {
  console.log("PORT RUNNING AT 4000");
});
