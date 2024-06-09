import React from 'react'
import { CiHome } from "react-icons/ci";
import { CiHashtag } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
const LeftSidebar = () => {
  return (
    <div className='w-[20%]'>
      <div>
        <div>
            <img width={"80px"} src="https://img.freepik.com/premium-vector/new-twitter-logo-2023-twitter-logo_690577-760.jpg?w=740" alt="image">
            </img>
        </div>
        <div className='my-4'>
            <Link to="/home" className='flex items-center my-2 px-4 py-2 hover:cursor-pointer hover:bg-gray-200 rounded-full'>
                <div>
                <CiHome size={"24px"}/>
                </div>
                <h1 className='font-bold text-lg ml-2'>Home</h1>
              </Link>
            <div className='flex items-center my-2 px-4 py-2 hover:cursor-pointer hover:bg-gray-200 rounded-full'>
                <div>
                <CiHashtag size={"24px"}/>
                </div>
                <h1 className='font-bold text-lg ml-2'>Explore</h1>
              </div>
            <div className='flex items-center my-2 px-4 py-2 hover:cursor-pointer hover:bg-gray-200 rounded-full'>
                <div>
                <IoIosNotificationsOutline size={"24px"}/>
                </div>
                <h1 className='font-bold text-lg ml-2'>Notification</h1>
              </div>
            <Link to="/profile" className='flex items-center my-2 px-4 py-2 hover:cursor-pointer hover:bg-gray-200 rounded-full'>
                <div>
                <CiUser size={"24px"}/>
                </div>
                <h1 className='font-bold text-lg ml-2'>Profile</h1>
              </Link>
            <div className='flex items-center my-2 px-4 py-2 hover:cursor-pointer hover:bg-gray-200 rounded-full'>
                <div>
                <CiBookmark size={"24px"}/>
                </div>
                <h1 className='font-bold text-lg ml-2'>Bookmarks</h1>
              </div>
            <div className='flex items-center my-2 px-4 py-2 hover:cursor-pointer hover:bg-gray-200 rounded-full'>
                <div>
                <IoMdLogOut size={"24px"}/>
                </div>
                <h1 className='font-bold text-lg ml-2'>Logout</h1>
              </div>
            
                
                <button className='font-bold text-lg ml-2 px-4 py-2 w-full rounded-full bg-[#1D9BF0] border-none text-white'>Post</button>
              
              
          </div>
        </div>
    </div>
  )
}

export default LeftSidebar