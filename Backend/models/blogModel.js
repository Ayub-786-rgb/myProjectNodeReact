const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    empId: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;
