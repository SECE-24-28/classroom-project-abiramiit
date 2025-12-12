const express = require("express");
const {createStudent} = require("../controllers/studentControllers");

const router  = express.route();
router.post("/",createStudent);


module.exports=router;