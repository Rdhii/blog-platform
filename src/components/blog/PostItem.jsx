import React from 'react'

export default function PostItem({category, title, content, tags, createdAt}) {

  console.log('createdAt received:', createdAt);

  const formattedDate = createdAt
    ? new Intl.DateTimeFormat('id-ID', { day: '2-digit', month: 'long', year: 'numeric' }).format(new Date(createdAt))
    : 'Tanggal tidak tersedia';

  
  return (
    <div className='card bg-white border border-gray-200 p-6 space-y-2 rounded-lg shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-400 ease-in-out'>
        <p className='text-sm bg-gray-200 rounded-full w-fit py-0.5 px-2.5'>{category}</p>
        <p className='text-2xl font-bold'>{title}</p>
        <p className='text-muted-foreground'>{content}</p>
        <div className='flex gap-2 text-xs mb-5'>
            {tags.map((tag) => (
                <p className='border border-gray-300 rounded-lg py-0.5 px-2.5'>{tag}</p>
            ))}
        </div>
        <div className='flex justify-between border-t border-gray-300 py-4'>
          <p className='text-muted-foreground'>{formattedDate}</p>
          <div className='flex items-center gap-2'>
          <button className=' px-4 py-2 text-[12px] rounded-md hover:bg-blue-100 cursor-pointer hover:text-blue-500'>Edit</button>
          <button className=' px-4 py-2 text-[12px] rounded-md hover:bg-red-100 cursor-pointer text-red-500'>Delete</button>
          </div>
        </div>
    </div>
  )
}
