const express = require("express");
const Router = express.Router();

const { addBlog, getBlogs, deleteBlog, updateBlog } = require("./controller");

Router.post("/add", addBlog);
Router.get("/", getBlogs);
Router.delete("/delete/:id", deleteBlog);
Router.put("/update/:id", updateBlog);

module.exports = Router;
