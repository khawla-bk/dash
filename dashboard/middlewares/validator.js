const { body, validationResult } = require("express-validator");

exports.registerRules = [
  body("name", "name is required").notEmpty(),
  body("email", "valid email").isEmail(),
  body("password", "password must be at least 6 characters").isLength({
    min: 6,
  }),
];
exports.loginRules = [
  body("email", "valid email").isEmail(),
  body("password", "password must be at least 6 characters").isLength({
    min: 6,
  }),
];

exports.Validator = (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).send({ errors: result.array() });
  }
  next();
};
