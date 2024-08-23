import React, { useState, useEffect } from 'react';
import api from '../api';

const BlogForm = ({ selectedBlog, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    empId: '',
    name: '',
    email: '',
    title: '',
    content: '',
  });

  useEffect(() => {
    if (selectedBlog) {
      setFormData(selectedBlog);
    }
  }, [selectedBlog]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSelecting = async (e) => {
    e.preventDefault();
    try {
      if (selectedBlog) {
        await api.put(`/blogs/${formData.empId}`, formData);
      } else {
        await api.post('/blogs', formData);
      }
      // Call onSave after the request is successful
      onSave();
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <form onSubmit={onSelecting}>
      <input
        type="text"
        name="empId"
        value={formData.empId}
        onChange={handleChange}
        placeholder="Employee ID"
        required
      />
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <textarea
        name="content"
        value={formData.content}
        onChange={handleChange}
        placeholder="Content"
        required
      ></textarea>
      <div className="form-actions">
        <button type="submit" className="submit">
          <i className="fa fa-check"></i> {/* Check icon for Save */}
        </button>
        <button type="button" className="cancel" onClick={onCancel}>
          <i className="fa fa-times"></i> {/* Cross icon for Cancel */}
        </button>
      </div>
    </form>
  );
};

export default BlogForm;
