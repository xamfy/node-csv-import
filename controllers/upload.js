var csv = require("fast-csv");
var mongoose = require("mongoose");
var Store = require("../models/store");

exports.post = function(req, res) {
  if (!req.files) return res.status(400).send("No files were uploaded.");

  var storeFile = req.files.file;

  var stores = [];

  csv
    .fromString(storeFile.data.toString(), {
      headers: true,
      ignoreEmpty: true
    })
    .on("data", function(data) {
      stores.push(data);
    })
    .on("end", function() {
      Store.create(stores, function(err, documents) {
        if (err) throw err;
      });

      res.send(stores.length + " stores have been successfully uploaded.");
    });
};
