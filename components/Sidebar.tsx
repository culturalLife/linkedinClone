import React from 'react';
import Image from 'next/image';
import ProfilePhoto from './shared/ProfilePhoto';
import { getAllPosts } from '@/lib/serveractions';

interface SidebarProps {
  user: any;
}

const Sidebar: React.FC<SidebarProps> = async ({ user }) => {
  // console.log('Sidebar user:', user); // Debugging: Log the user data
  const posts=  await getAllPosts();
  return (
    <div className='hidden md:block h-fit w-[20%] border border-gray-400 bg-white rounded-lg'>
      <div className="flex relative flex-col items-center">
        <div className="w-full h-auto"> {/* Removed overflow-hidden and adjusted height */}
          {user && (
            <Image 
              src={'/banner.webp'}  
              alt='banner'
              width={200}
              height={200}
              className='w-full h-full rounded-t-lg'
              priority
            />
          )}
          <div className="my-1 absolute top-10 left-[40%]">
            <ProfilePhoto src={user ? user.imageUrl : '/banner.webp'} />
          </div>
          <div className="border-b border-b-gray-300 w-full">
            <div className="p-2 mt-5 text-center">
              <h1 className='font-bold cursor-pointer hover:underline text-black'>
                {user ? `${user.firstName} ${user.lastName}` : 'No user'}
              </h1>
              <p className='text-s'>@{user? `${user?.username}`: 'username'}</p>
            </div>
          </div>
          <div className='text-s'>
                <div className='w-full flex justify-between items-center px-3 py-2 hover:bg-gray-200 cursor-pointer'>
                    <p>Post Impression</p>
                    <p className='text-blue-500 font-bold'>88</p>
                </div>
                <div className='w-full flex justify-between items-center px-3 py-2 hover:bg-gray-200 cursor-pointer'>
                    <p>Posts</p>
                    <p className='text-blue-500 font-bold'>{posts.length}</p>
                </div>
            </div>
        </div>
        
      </div>
    </div>
  );
};

export default Sidebar;
