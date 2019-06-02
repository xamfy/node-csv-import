var express = require("express");
var Store = require("../models/store");
var router = express.Router();

/* GET stores. */
router.get("/", function(req, res, next) {
  Store.find()
    .limit(200)
    .then(stores => {
      res.send(stores);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving stores."
      });
    });
});

module.exports = router;
