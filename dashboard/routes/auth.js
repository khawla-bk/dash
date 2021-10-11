const express = require("express");
const { signUp, logIn, usersList } = require("../controllers/auth");
const { isAuth } = require("../middlewares/isAuth");
const {
  registerRules,
  Validator,
  loginRules,
} = require("../middlewares/validator");
const router = express.Router();

router.post("/signup", registerRules, Validator, signUp);

router.post("/login", loginRules, Validator, logIn);

router.get("/current", isAuth, (req, res) => res.send({ user: req.user }));

router.get("/all", isAuth, usersList);

module.exports = router;
