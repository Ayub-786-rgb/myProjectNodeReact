// src/components/BlogList.js
import React, { useState, useEffect } from 'react';
import api from '../api';
import BlogItem from './BlogItem';
import '../styles.css'; // Import the CSS file
import BlogForm from './BlogForm';
import Modal from './Modal';
import { FaPlus } from 'react-icons/fa'; // Importing the plus icon


const BlogList = () => {
    const [blogs, setBlogs] = useState([]);
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [openModalBlog, setOpenModalBlog] = useState(false);

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = () => {
        api.get('/blogs')
            .then(response => setBlogs(response.data))
            .catch(error => console.error(error));
    };

    const handleEdit = (blog) => {
        setSelectedBlog(blog);
        setOpenModalBlog(true);
    };

    const handleDelete = (empId) => {
        api.delete(`/blogs/${empId}`)
            .then(() => fetchBlogs())
            .catch(error => console.error(error));
    };

    const handleSave = () => {
        fetchBlogs();
        setSelectedBlog(null);
        setOpenModalBlog(false); // Close the modal after saving
    };

    const handleCancel = () => {
        setSelectedBlog(null);
        setOpenModalBlog(false); // Close the modal on cancel
    };

    return (
        <>
            <div>
                <div className="List">
                    <h1>BLOGLIST</h1>
                    <button onClick={() => setOpenModalBlog(true)}>
                        <FaPlus /> {/* Add the plus icon inside the button */}
                    </button>
                </div>
                <div className='blog-list-container'>
                    {blogs.map(blog => (
                        <BlogItem
                            key={blog.empId}
                            blog={blog}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                        />
                    ))}
                </div>
            </div>
            <Modal isOpen={openModalBlog} onClose={handleCancel}>
                <BlogForm
                    onSave={handleSave}
                    onCancel={handleCancel}
                    selectedBlog={selectedBlog} // Pass the selected blog if needed
                />
            </Modal>
        </>
    );
};

export default BlogList;
