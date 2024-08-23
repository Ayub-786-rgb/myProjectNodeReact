const express = require('express');
const {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog
} = require('../controllers/blogController');

const router = express.Router();

router.post('/', createBlog);
router.get('/', getBlogs);
router.get('/:empId', getBlogById); 
router.put('/:empId', updateBlog); 
router.delete('/:empId', deleteBlog); 

module.exports = router;
