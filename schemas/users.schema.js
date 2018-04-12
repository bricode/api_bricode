"use strict";

const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = Schema({
  fname: String,
  lname: String,
  email: String,
  password: String,
  checkPassword: String,
  profileImageUrl: String,
  about: String,
  company: {
    companyName: String,
    companyAddress: String,
    companyCity: String,
    companyCountry: String
  }
});

module.exports = mongoose.model("User", UserSchema);
