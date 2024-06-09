import React from 'react';
import Avatar from 'react-avatar';
import { CiImageOn } from "react-icons/ci";

const CreatePost = () => {
  return (
    <div className='w-[100%]'>
        <div >
        <div className='flex justify-evenly items-center border-b border-gray-200'>
            <div className='cursor-pointer hover:bg-gray-300 w-full text-center px-4 py-3'>
                <h1 className='font-semibold text-gray-700 text-lg'>For You</h1>
            </div>
            <div className='cursor-pointer hover:bg-gray-300 w-full text-center px-4 py-3'>
                <h1 className='font-semibold text-gray-700 text-lg'>Following</h1>
            </div>
        </div>
        <div >
            <div className='flex items-center p-4'>
                <div>
                    <Avatar src="https://pbs.twimg.com/profile_images/1799814172303106048/hiHuXgpi_400x400.png" size="40px" round={true} />
                </div>
                <input className='border-none w-full outline-none text-lg ml-2' type="text" placeholder='What is Happening?'  />
            </div>
            <div className='flex items-center justify-between p-4 border-b border-gray-300'>
                <div>
                    <CiImageOn size={"24px"} />
                </div>
                <button className='font-bold py-1 px-4 text-lg rounded-full bg-[#1D9BF0] border-none text-white'> Post</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default CreatePost