import {  ArrowLeft } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function PostContent() {
  return (
    <div className='w-[50%] mx-auto py-20' >
          <Link to="/" className='flex items-center gap-3 w-fit py-2 px-4 rounded-lg hover:bg-blue-100 hover:text-blue-500 hover:cursor-pointer text-sm mb-9'> <ArrowLeft className='size-4'/> Back to all post</Link>
        <div className='flex gap-3 mb-4 w-fit items-center'>
            <p className='px-2.5 py-0.5 rounded-2xl text-sm bg-gray-200'>Design</p>
            <p className='text-sm text-muted-foreground'>tanggal</p>
        </div>
        <p className='mb-6 font-bold text-4xl'>The Art of Minimalist Design</p>
        <div className='flex gap-2 mb-10 text-sm items-center'>
        <p className='border border-gray-200 px-1.5 py-0.5 rounded-2xl'>tags1</p>
        <p className='border border-gray-200 px-1.5 py-0.5 rounded-2xl'>tags2</p>
        </div>
        <p className='mb-12 text-lg'>Minimalist design is more than just an aesthetic choice—it's a philosophy that emphasizes clarity and purpose. By stripping away the unnecessary, we create space for what truly matters. The key principles of minimalist design include:</p>
        <div className='flex items-center gap-3 border-t border-gray-200 py-4 text-sm'>
            <button className='border border-gray-200 shadow-lg rounded-lg px-4 py-1.5 hover:bg-blue-100 hover:text-blue-500 cursor-pointer'>Edit Post</button>
            <button className='border border-gray-200 shadow-lg rounded-lg px-4 py-1.5 text-red-500 hover:bg-red-100 cursor-pointer'>Delete Post</button>
        </div>
    </div>
  )
}
