const axios = require('axios');
const db = require("../models");

/* This should probably be globally availbale to our controller */
var client = new plaid.Client(
  '[PLAID_CLIENT_ID]', // these values need to be updated and stored in a .env
  '[PLAID_SECRET]',   // these values need to be updated and stored in a .env
  '[PLAID_PUBLIC_KEY]', // these values need to be updated and stored in a .env
  plaid.environments.sandbox
);

// Defining methods for the plaidController
module.exports = {
  
  // this is where our app will get it's private key that we persist to our db, probably need an "app model?"
  getPrivateKey: function(req, res) {
    
  },

  // this is where we get items (accounts)
  getItem: function(req, res) {
    /* This is boilerplate from the API */
    // Pull information about the Item
    client.getItem(ACCESS_TOKEN, (err, result) => {
      // Handle err
      // The Item has a list of available products, billed products, error status,
      // webhook information, and more.
      const item = result.item;
    });
  },

  // this is where we get transactions
  getTransactions: function(req, res){
    /* This is boilerplate from the API */

    // Retrieve transactions from Jan 1 until Feb 15
    // NOTE: This endpoint may return a `PRODUCT_NOT_READY` error if transactions
    // are not yet processed for the Item.
    client.getTransactions(accessToken, '2017-01-01', '2017-02-15', {
      count: 250,
      offset: 0,
    }, (err, result) => {
      // Handle err
      const transactions = result.transactions;
    });


  }
};
