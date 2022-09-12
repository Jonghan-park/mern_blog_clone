const express = require("express");
const blogRouter = express.Router();
const { getAllBlogs } = require("../controllers/blog-controller");

blogRouter.get("/", getAllBlogs);
blogRouter.post("/add", addBlog);

module.exports = blogRouter;
