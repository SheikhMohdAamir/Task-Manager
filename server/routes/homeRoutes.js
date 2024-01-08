const express = require("express")
const router = express.Router()
const {getData, addData, deleteData} = require("../controllers/home")
const authentication = require('../middleware/authentication')

router.get("/getData", authentication, getData )
router.post("/addData", authentication, addData )
router.post("/deleteData", authentication, deleteData )
module.exports = router