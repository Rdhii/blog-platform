import React from 'react'
import { Link } from 'react-router-dom'

export default function CreatePost() {

  return (
    <div className='py-16 w-[50%] mx-auto '>
      <div className='space-y-3 mb-10'>
        <p className='text-4xl font-bold'>Create New Post</p>
        <p className='text-sm text-muted-foreground'>Share your thoughts with the world. Fill in the details below to publish your article.</p>
      </div>
      <form className='rounded-xl bg-card shadow-xl w-full p-10'>
        <div className='flex flex-col space-y-2'>
          <label className='font-bold'>Title</label>
          <input type="text" placeholder='Enter your post title...' className='border border-gray-300 rounded-md p-2'/>
        </div>
        <div className='flex flex-col space-y-2 mt-8'>
        <label className='font-bold'>Category</label>
          <select defaultValue={"Select a Category"}  className='border border-gray-300 rounded-md p-2'>
            <option disabled hidden>Select a Category</option>
            <option>Development</option>
            <option>UX</option>
            <option>Technology</option>
            <option>Tutorial</option>
            <option>Opinion</option>
        </select>
        </div>
        <div className='flex flex-col space-y-2 mt-8'>
          <label className='font-bold'>Tags</label>
          <input placeholder='Add tags' className='border border-gray-300 rounded-md p-2'/>
          <p className='text-sm text-muted-foreground mt-2'>Press Enter to add a tag. Tags will be lowercase and alphanumeric only.</p>
        </div>
        <div className='flex flex-col space-y-2 mt-8'>
          <label>Content</label>
          <input placeholder='Write your content here...' className='text-muted-foreground border border-gray-300 rounded-md p-2 h-[200px]'/>
        </div>
        <div className='flex justify-between mt-8'>
          <Link to="/" className='px-5 py-2 rounded-lg hover:bg-blue-100 cursor-pointer'>Cancel</Link>
          <button className='px-5 py-2 bg-primary rounded-lg text-white'>Create Post</button>
        </div>
      </form>
    </div>
  )
}
