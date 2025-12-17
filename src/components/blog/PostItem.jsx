import React from 'react'

export default function PostItem({category, title, content, tags}) {
  return (
    <div className='card bg-white border border-gray-200 p-6 space-y-2 rounded-lg shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-400 ease-in-out'>
        <p className='text-sm bg-gray-200 rounded-full w-fit py-0.5 px-2.5'>{category}</p>
        <p className='text-2xl font-bold'>{title}</p>
        <p className='text-muted-foreground'>{content}</p>
        <div className='flex gap-2 text-xs'>
            {tags.map((tag) => (
                <p className='border bg-gray-100 rounded-lg py-0.5 px-2.5'>{tag}</p>
            ))}
        </div>
    </div>
  )
}
