const router = require("express").Router();
const plaidController = require("../../controllers/plaidController");

// Matches with "/api/plaid/get_access_token"
router.route("/get_access_token")
  .post(plaidController.getPrivateKey);


module.exports = router;
