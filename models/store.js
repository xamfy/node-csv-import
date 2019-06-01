var mongoose = require("mongoose");

var storeSchema = mongoose.Schema({
  county: { type: String },
  license_number: { type: Number },
  operation_type: { type: String },
  establishment_type: { type: String },
  entity_name: { type: String },
  DBA_name: { type: String },
  street_number: Number,
  street_name: { type: String },
  city: { type: String },
  state: { type: String },
  zip_code: { type: Number },
  square_footage: { type: Number }
});

var Store = mongoose.model("Store", storeSchema);

module.exports = Store;
