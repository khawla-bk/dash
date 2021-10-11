const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

require("dotenv").config();

const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validateEmail(email) {
  return email.match(emailRegex);
}

const userShcema = mongoose.Schema({
  email: {
    type: "String",
    require: true,
    unique: true,
    set: (str) => str.toLowerCase(),
    validate: validateEmail,
  },
  password: {
    type: String,
    require: true,
    // set: (passwrd) => bcrypt.hashSync(passwrd, 10),
  },
  post: { type: "String", require: true },
  name: { type: "String", require: true },
  role: { type: "String", enum: ["ADMIN", "USER"], default: "USER" },
  verifiedEmail: { type: "Boolean", default: false },
  verificationToken: { type: "String" },
});

userShcema.methods.toJSON = function () {
  return {
    id: this._id,
    email: this.email,
    name: this.name,
    password: this.password,
    post: this.post,
    role: this.role,
  };
};

module.exports = mongoose.model("Users", userShcema);
