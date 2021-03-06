// jshint esversion:9

"use strict";

const express = require("express");
const router = express.Router();
const usersHandler = require("../controllers/users");
const passport = require("passport");
// const User = require("../models/users");

/* Add authentication middleware */

require("../security/passport.config");

router.use(passport.initialize());
router.use(passport.session());

/* GET users listing. */
// eslint-disable-next-line no-unused-vars
router
  .route("/")
  .get(usersHandler.getUsers)
  .post(usersHandler.createUser)
  .delete(usersHandler.deleteUsers);

router.route("/logout").post(usersHandler.logout);

router.route("/login").post(
  passport.authenticate("local", {
    failureRedirect: "/users/login/failed",
    failureMessage: true,
  }),
  usersHandler.login
);

router.route("/login/failed").get(usersHandler.logInFailed);

module.exports = router;
