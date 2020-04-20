var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
  Fistname: { 
    type: String, required: 'Kindly enter a firstname'
  },
  Lastname: { 
    type: String, required: 'Kindly enter a lastname'
  },
  Number: { 
    type: String, required: 'Kindly enter a number'
  },
  Gender: {
    type: String, default: Date.now
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
    ref: "UserGroups"
  },
});
module.exports = mongoose.model('Users', UsersSchema);