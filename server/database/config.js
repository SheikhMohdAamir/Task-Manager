const mongoose = require("mongoose");
const db = "mongodb+srv://jok20001:R6XoiX02KtoUfxyG@cluster1.izah5d5.mongodb.net/?retryWrites=true&w=majority"
mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));