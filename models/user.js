const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator");


const validateEmail = (email) => {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

const userSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: false
  },
  lastName: {
    type: String,
    required: false,
    trim: true
  },
  auth_id: {
    type: String,
    trim: true,
    unique: true,
    required: "auth0 id is required"
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Email address is required',
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  items: [{
    access_token: {
      type: String
    },
    item_id: {
      type: String,
      unique: true
    },
    name: {
      type: String
    },
    institution_id: {
      type: String
    },
    accounts: [{
      id: {
        type: String
      },
      name: {
        type: String
      },
      type: {
        type: String
      },
      subtype: {
        type: String
      }
    }]
  }],
  transactions: [{
    type: Schema.Types.ObjectId,
    ref: "Transaction"
  }]
});

userSchema.plugin(uniqueValidator);


const User = mongoose.model("User", userSchema);


module.exports = User;
