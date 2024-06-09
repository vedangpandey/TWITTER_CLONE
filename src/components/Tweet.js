import React from 'react'
import Avatar from 'react-avatar'
import { FaRegComment } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";

const Tweet = () => {
  return (
    <div className='border-b border-gray-100'>
        <div>
            <div className='flex items-center p-4'>
                <Avatar src="https://pbs.twimg.com/profile_images/1799814172303106048/hiHuXgpi_400x400.png" size="40px" round={true} />
                <div className='ml-2 w-full'>
                    <div className='flex items-center'>
                        <h1 className='font-bold'>Vedang</h1>
                        <p className='text-gray-500 text-sm ml-1'>@VedangxSakata01. 1m</p>
                    </div>
                    <div>
                        <p>Hello developers let connect and grow together</p>
                    </div>
                    <div className='flex justify-between my-3'>
                        <div className='flex items-center'>
                            <div className='hover:bg-green-200 rounded-full p-2 cursor-pointer'>
                            <FaRegComment size={"20px"}/>
                            </div>
                            <p className='ml-1'>0</p>
                        </div>
                        <div className='flex items-center '>
                            <div className='hover:bg-pink-200 rounded-full p-2 cursor-pointer'>
                                <CiHeart size={"20px"}/>
                            </div>
                            <p className='ml-1'>0</p>
                        </div>
                        <div className='flex items-center'>
                            <div className='hover:bg-blue-200 rounded-full p-2 cursor-pointer'>
                            <CiBookmark size={"20px"}/>
                            </div>
                            <p className='ml-1'>0</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tweet