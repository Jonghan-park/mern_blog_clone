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

exports.updateBlog = async (req, res, next) => {
  const { title, desc } = req.body;
  const blogId = req.params.id;
  let blog;
  try {
    blog = await Blog.findByIdAndUpdate(blogId, { title, desc });
  } catch (error) {
    return console.log(error);
  }
  if (!blog) {
    return res.status(500).json({ message: "Unable To Update The Blog" });
  }
  return res.status(200).json({ blog });
};

exports.getById = async (req, res, next) => {
  const id = req.params.id;
  let blog;
  try {
    blog = await Blog.findById(id);
  } catch (error) {
    return console.log(error);
  }
  if (!blog) {
    return res.status(404).json({ message: "No Blog Found" });
  }
  return res.status(200).json({ blog });
};

exports.deleteBlog = async (req, res, next) => {
  const id = req.params.id;
  let blog;
  try {
    blog = await Blog.findByIdAndRemove(id);
  } catch (error) {
    return console.log(error);
  }
  if (!blog) {
    return res.status(400).json({ message: "Unable To Delete" });
  }
  return res.status(202).json({ message: "Successfully delete" });
};
