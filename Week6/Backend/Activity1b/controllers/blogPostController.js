const mongoose = require("mongoose");
const BlogPost = require("../models/blogPostModel");

// get all BlogPosts
const getBlogPosts = async (req, res) => {
  const user_id = req.user._id;

  try {
    const blogPosts = await BlogPost.find({ user_id }).sort({ createdAt: -1 });
    res.status(200).json(blogPosts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// Add one BlogPost
const addBlogPost = async (req, res) => {
  const { title, content, author, publishedDate, published } = req.body;

  try {
    const user_id = req.user._id;
    const newBlogPost = new BlogPost({
      title,
      content,
      author,
      publishedDate,
      published,
      user_id,
    });
    await newBlogPost.save();
    res.status(201).json(newBlogPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// Get BlogPost by ID
const getBlogPost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such blogPost" });
  }

  try {
    const user_id = req.user._id;
    const blogPost = await BlogPost.findById(id)
      .where("user_id")
      .equals(user_id);
    if (!blogPost) {
      return res.status(404).json({ message: "BlogPost not found" });
    }
    res.status(200).json(blogPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// Delete BlogPost by ID
const deleteBlogPost = async (req, res) => {
  const { id } = req.params;
  try {
    const user_id = req.user._id;
    const blogPost = await BlogPost.findByIdAndDelete({
      _id: id,
      user_id: user_id,
    });
    if (!blogPost) {
      return res.status(404).json({ message: "BlogPost not found" });
    }
    res.status(200).json({ message: "BlogPost deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

// Update BlogPost by ID
const updateBlogPost = async (req, res) => {
  const { id } = req.params;
  try {
    const user_id = req.user._id;
    const blogPost = await BlogPost.findOneAndUpdate(
      { _id: id, user_id: user_id },
      { ...req.body },
      { new: true }
    );
    if (!blogPost) {
      return res.status(404).json({ message: "BlogPost not found" });
    }
    res.status(200).json(blogPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
};

module.exports = {
  getBlogPosts,
  addBlogPost,
  getBlogPost,
  deleteBlogPost,
  updateBlogPost,
};
