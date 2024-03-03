const express = require('express');
const router = express.Router();
const { getBlogPosts, addBlogPost, getBlogPost, deleteBlogPost, updateBlogPost } = require('../controllers/blogPostController');
const requireAuth = require('../middleware/requireAuth')

// require auth for all workout routes
router.use(requireAuth)

// GET all BlogPosts
router.get('/', getBlogPosts);

// POST a new BlogPost
router.post('/', addBlogPost);

// GET a single BlogPost
router.get('/:id', getBlogPost);

// DELETE a BlogPost
router.delete('/:id', deleteBlogPost);

// Update BlogPost using PUT
router.put('/:id', updateBlogPost);

module.exports = router;