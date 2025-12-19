import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function CreatePost() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
      title: "",
      category: "",
      tags: "",
      content: ""
    })

    const handleChange = (e) => {
      const value = e.target.value;
      setFormData({
        ...formData,
        [e.target.name]: value
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const tagsArray = formData.tags
        .split(',')
        .map(tag => tag.trim().toLowerCase())
        .filter(tag => tag.length > 0)

        const response = await axios.post("http://localhost:3000/api/post/", {
          title: formData.title,
          category: formData.category,
          tags: tagsArray,
          content: formData.content
        })
        response.data;

        alert("Post created successfully!");
        navigate("/")
      } catch (error) {
        console.error("Error creating post:", error);
        alert("Failed to create post. Please try again.");
      }
    }


  return (
    <div className='py-16 w-[50%] mx-auto '>
      <div className='space-y-3 mb-10'>
        <p className='text-4xl font-bold'>Create New Post</p>
        <p className='text-sm text-muted-foreground'>Share your thoughts with the world. Fill in the details below to publish your article.</p>
      </div>
      <form onSubmit={handleSubmit} className='rounded-xl bg-card shadow-xl w-full p-10'>
        <div className='flex flex-col space-y-2'>
          <label className='font-bold'>Title</label>
          <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder='Enter your post title...' 
          className='border border-gray-300 rounded-md p-2'
          required />
        </div>
        <div className='flex flex-col space-y-2 mt-8'>
        <label className='font-bold'>Category</label>
          <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className='border border-gray-300 rounded-md p-2 cursor-pointer'
          required>
            <option value="" disabled hidden>Select a Category</option>
            <option value="development">Development</option>
            <option value="ux">UX</option>
            <option value="technology">Technology</option>
            <option value="tutorial">Tutorial</option>
            <option value="opinion">Opinion</option>
          </select>
        </div>
        <div className='flex flex-col space-y-2 mt-8'>
          <label className='font-bold'>Tags</label>
          <input 
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder='e.g., design, development, tutorial'
            className='border border-gray-300 rounded-md p-2'
          />
          <p className='text-sm text-muted-foreground mt-2'>Press Enter to add a tag. Tags will be lowercase and alphanumeric only.</p>
        </div>
        <div className='flex flex-col space-y-2 mt-8'>
          <label>Content</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder='Write your post content here...'
            className='border border-gray-300 rounded-md p-2 h-40 resize-none'
            required
          />
        </div>
        <div className='flex justify-between mt-8'>
          <Link to="/" className='px-5 py-2 rounded-lg hover:bg-blue-100 cursor-pointer'>Cancel</Link>
          <button 
            type="submit"
          className='px-5 py-2 bg-primary rounded-lg text-white cursor-pointer hover:bg-primary/90'>Create Post</button>
        </div>
      </form>
    </div>
  )
}
