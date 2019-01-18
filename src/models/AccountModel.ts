const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Schema for a Account object
 */
const AccountSchema = new Schema(
  {
    name: String,
  },
  {
    timestamps: true
  }
);  


let AccountModel = mongoose.model('Account', AccountSchema);

export default AccountModel;