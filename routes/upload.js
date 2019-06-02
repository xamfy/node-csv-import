var express = require("express");
var upload = require("../controllers/upload");
var router = express.Router();

router.post("/", upload.post);

module.exports = router;
