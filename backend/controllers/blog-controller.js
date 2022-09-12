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

exports.addBlog = async (req, res, next) => {
  const { title, desc, image, user } = req.body;
  const blog = new Blog({
    title,
    desc,
    image,
    user,
  });

  try {
    await blog.save();
  } catch (error) {
    return console.log(error);
  }
  return res.status(200).json({ blog });
};
