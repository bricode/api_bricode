'use strict';

const mongoose = require('mongoose');


var Schema = mongoose.Schema;


var ProjectSchema = Schema({
  nameProject: String,
  description: String,
  imageUrl: String,
  urlToSite: String,
})




module.exports = mongoose.model('Project', ProjectSchema)
