const User = require("../Models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signUp = async (req, res) => {
  const { name, email, password, post } = req.body;
  try {
    const findUser = await User.findOne({ email });
    if (findUser) {
      return res.status(400).send((msg = "This user already exists"));
    }
    const newUser = new User({
      name,
      email,
      password,
      post,
    });
    const salt = 10;
    const hash = await bcrypt.hash(password, salt);
    newUser.password = hash;

    await newUser.save();
    const payload = {
      id: newUser._id,
    };
    const token = jwt.sign(payload, process.env.privateKey, {
      expiresIn: "24h",
    });
    res
      .status(200)
      .send({ msg: "User successfully registered", newUser, token });
  } catch (error) {
    res.status(500).send((msg = "User registration failed"), error);
  }
};

exports.logIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).send({ errors: [{ msg: "Failed to login" }] });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).send({ errors: [{ msg: "Failed to login" }] });
    }
    const payload = {
      id: user._id,
    };
    const token = jwt.sign(payload, process.env.privateKey, {
      expiresIn: "24h",
    });
    res.status(200).send({ msg: "Logged in successfully", user, token });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "Failed to login" }, error] });
  }
};

exports.usersList = (req, res) => {
  User.find({})
    .then((users) => res.send(users))
    .catch(() => res.status(500).send());
};
