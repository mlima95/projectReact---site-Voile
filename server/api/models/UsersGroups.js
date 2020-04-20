var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsersGroups = new Schema({
  StatusGroups: { 
    type: String, required: 'Kindly enter a StatusGroups'
  },
});
module.exports = mongoose.model('UsersGroups', UsersGroups);