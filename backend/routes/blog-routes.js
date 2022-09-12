const express = require("express");
const blogRouter = express.Router();
const {
  getAllBlogs,
  addBlog,
  updateBlog,
  getById,
  deleteBlog,
} = require("../controllers/blog-controller");

blogRouter.get("/", getAllBlogs);
blogRouter.post("/add", addBlog);
blogRouter.put("/update/:id", updateBlog);
blogRouter.get("/:id", getById);
blogRouter.delete("/:id", deleteBlog);

module.exports = blogRouter;
