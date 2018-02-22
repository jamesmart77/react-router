const router = require("express").Router();
const authController = require("../../controllers/authController");

// Matches with "/api/plaid/get_access_token"
router.route("/login")
  .post(authController.login);

router.route("/signUp").post(authController.signUp)


// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
