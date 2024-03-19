const mongoose = require("mongoose");
const Blog = require("./schema");
//!  HATA ALIRSAN const Blog = require("./schema/Blog") OLARAK DÜZELT;

const addBlog = async (req, res) => {
    const { title, blog, date } = req.body;
    console.log({ title, blog, date });

    const newBlog = new Blog({
        title,
        blog,
        date,
    });

    try {
        await newBlog.save();
        console.log("New blog saved");
    } catch (error) {
        console.log(error);
    }

    try {
        const session = await mongoose.startSession();
        session.startTransaction();
        await newBlog.save(session);
        session.commitTransaction();
    } catch (error) {
        return res.status(500).json({ errorMsg: error });
    }

    return res.status(200).json({ newBlog });
};

const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();

        if (!blogs) {
            return res.status(200).json({ msg: "No blogs found" });
        }
        return res.status(200).json({ blogs: blogs });
    } catch (error) {
        return res.status(500).json({ errMsg: err });
    }
};

const deleteBlog = async (req, res) => {
    const { id } = req.params;

    try {
        const deleteTheBlog = await Blog.findByIdAndDelete(id);

        if (!deleteTheBlog) {
            return res.json(404).json({ msg: "Blog not found" });
        }
        const blogs = await Blog.find();

        return res.status(200).json({ blogs });
    } catch (error) {
        console.log(error);
    }
};

const updateBlog = async (req, res) => {
    const { id } = req.params;
    const { title, blog, date } = req.body;

    console.log(id);
    try {
        const updateTheBlog = await Blog.findByIdAndUpdate(id, {
            title,
            blog,
            date,
        });

        const blogs = await Blog.find();

        return res.status(200).json({ blogs });
    } catch (error) {
        return res.status(500).json({ errMsg: error });
    }
};

module.exports = { addBlog, getBlogs, deleteBlog, updateBlog };
