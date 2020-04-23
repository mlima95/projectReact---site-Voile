var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
  Firstname: { 
    type: String, required: 'Kindly enter a firstname'
  },
  Lastname: { 
    type: String, required: 'Kindly enter a lastname'
  },
  Number: { 
    type: String, required: 'Kindly enter a number'
  },
  Gender: {
    type: String,
  },
  Birthday: {
    type: Date,
  },
  Email: {
    type: String, required: 'Kindly enter a email'
  },
  Password: {
    type: String, required: 'Kindly enter a password'
  },
  idGroups: {
    type: Schema.Types.ObjectId,
    ref: "UserGroups",
    default: "5e9ff7031c9d440000db4ed0"
  },
});
module.exports = mongoose.model('Users', UsersSchema);