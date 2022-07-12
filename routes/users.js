// jshint esversion:9

"use strict";

const express = require("express");
const router = express.Router();
const usersHandler = require("../controllers/users");
const authorize = require("../security/authorizations");

// const User = require("../models/users");

router.route("/logout").post(usersHandler.logout);

router.route("/login").post(usersHandler.login);

router.route("/login/failed").get(usersHandler.logInFailed);

/* GET users listing. */
// eslint-disable-next-line no-unused-vars
router
  .route("/")
  .get(authorize.isAdmin, usersHandler.getUsers)
  .post(authorize.isAdmin, usersHandler.createUser)
  .delete(authorize.isAdmin, usersHandler.deleteUsers);

router.route("/:id").get(authorize.isAdmin);

module.exports = router;
