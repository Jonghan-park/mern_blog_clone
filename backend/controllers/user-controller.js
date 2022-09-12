const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.getAllUser = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (error) {
    console.log(error);
  }
  if (!users) {
    return res.status(404).json({ message: "No Users Found" });
  }
  return res.status(200).json({ users });
};

exports.register = async (req, res, next) => {
  const { name, email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (error) {
    console.log(error);
  }
  if (existingUser) {
    return res
      .status(400)
      .json({ message: "User Already Exists! Login Instead" });
  }
  const hashedPassword = bcrypt.hashSync(password);
  const user = new User({ name, email, password: hashedPassword, blogs: [] });

  try {
    await user.save();
  } catch (error) {
    return console.log(error);
  }
  return res.status(201).json({ user });
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    existingUser = await User.findOne({ email });
  } catch (error) {
    console.log(error);
  }
  if (!existingUser) {
    return res
      .status(404)
      .json({ message: "Couldn't Find User By This Email." });
  }
  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ messgae: "Incorrect Password" });
  }
  return res.status(200).json({ message: "Login Successful" });
};
