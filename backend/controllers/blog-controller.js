const Blog = require("../models/Blog");
exports.getAllBlogs = async (req, res, next) => {
  let blogs;
  try {
    blogs = await Blog.find();
  } catch (error) {
    console.log(error);
  }
  if (!blogs) {
    return res.status(404).json({ messgae: "No Blogs Found!" });
  }
  return res.status(200).json({ blogs });
};
