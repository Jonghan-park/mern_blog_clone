const User = require("../models/User");

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
  const user = new User({ name, email, password });

  try {
    await user.save();
  } catch (error) {
    console.log(error);
  }
  return res.status(201).json({ user });
};
