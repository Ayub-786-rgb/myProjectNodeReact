// src/components/BlogItem.js
import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const BlogItem = ({ blog, onEdit, onDelete }) => {
  return (
    <div className="blog-item">
      <h3>{blog.title}</h3>
      <div className="details">
        <p className="name">Author:{blog.name}</p>
        <p className="content">Content:{blog.content}</p>
      </div>
      <div className="actions">
        <button className="edit" onClick={() => onEdit(blog)}>
          <FaEdit />
        </button>
        <button className="delete" onClick={() => onDelete(blog.empId)}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default BlogItem;
