const jwt = require("jsonwebtoken");
const User = require("../Models/userModel");
require("dotenv").config();

const isAuth = async (req, res, next) => {
  let { authorization } = req.headers;
  if (!authorization) return res.status(403).send("auth");

  const [prefix, token] = authorization.split(" ");
  if (prefix !== "END") return res.status(403).send("end");

  jwt.verify(token, process.env.privateKey, async (err, decoded) => {
    if (err) {
      return res.status(403).send("jwtr");
    }
    const user = await User.findById(decoded.id);
    if (!user) return res.status(403).send("user");

    if (user.verifiedEmail === false) return res.status(401).send();

    req.user = user;
    next();
  });
};

module.exports = {
  isAuth,
};
