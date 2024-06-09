import React from 'react'
import { CiSearch } from "react-icons/ci";
import Avatar from "react-avatar"
const RightSidebar = () => {
  return (
    <div className='w-[25%]'>
      <div className='flex text-gray-500 items-center p-2 bg-gray-100 rounded-full outline-none'>
        <CiSearch size={"20px"}/>
        <input type="text" className='outline-none border-none bg-transparent px-2' placeholder="Search "/>
      </div>
      <div className='p-4 bg-gray-100 rounded-2xl my-'>
          <h1 className='font-bold text-lg'>Who to follow</h1>
          <div className='flex items-center justify-center my-3'>
          <div className='flex '>
              <Avatar src="https://pbs.twimg.com/profile_images/1799814172303106048/hiHuXgpi_400x400.png" size="40px" round={true} />
              <div className='ml-2'>
                <h1 className='font-bold'>Vedang</h1>
                <p className='text-sm'>@VedangxSakata01</p>
              </div>
          </div>
          <button className='ml-2 px-4 py-1 bg-black text-white rounded-full'>Profile</button>
          </div>
          <div className='flex items-center justify-center my-3'>
          <div className='flex '>
              <Avatar src="https://pbs.twimg.com/profile_images/1799814172303106048/hiHuXgpi_400x400.png" size="40px" round={true} />
              <div className='ml-2'>
                <h1 className='font-bold'>Vedang</h1>
                <p className='text-sm'>@VedangxSakata01</p>
              </div>
          </div>
          <button className='ml-2 px-4 py-1 bg-black text-white rounded-full'>Profile</button>
          </div>
          <div className='flex items-center justify-center my-3'>
          <div className='flex '>
              <Avatar src="https://pbs.twimg.com/profile_images/1799814172303106048/hiHuXgpi_400x400.png" size="40px" round={true} />
              <div className='ml-2'>
                <h1 className='font-bold'>Vedang</h1>
                <p className='text-sm'>@VedangxSakata01</p>
              </div>
          </div>
          <button className='ml-2 px-4 py-1 bg-black text-white rounded-full'>Profile</button>
          </div>
      </div>
    </div>
  )
}

export default RightSidebar