const express = require("express");
const blogRouter = express.Router();
const { getAllBlogs } = require("../controllers/blog-controller");

blogRouter.get("/", getAllBlogs);

module.exports = blogRouter;
