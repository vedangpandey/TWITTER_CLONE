import React from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom';
import  Avatar from "react-avatar";
const Profile = () => {
  return (
    <div className='w-[50%] border-l border-r border-gray-200'>
        <div>
            <div className='flex items-center px-4 py-2'>
                <Link to="/" className='p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer'>
                    <IoMdArrowBack size="24px"/>
                </Link>
                <div>
                    <h1 className='font-bold text-lg'>Vedang</h1>
                    <p className='text-sm text-gray-500'>10 Posts</p>
                </div>
            </div>
            <img src="https://media.licdn.com/dms/image/D4D16AQHtFmWAb9MZVA/profile-displaybackgroundimage-shrink_350_1400/0/1714461126160?e=1723680000&v=beta&t=CAvZknnJHXzDYSbEtexor9ZHVctkotuPEAT1mfKSAhg" alt="banner" />
            <div className='absolute top-40 ml-4 border-4 border-white rounded-full'>
                <Avatar src="https://pbs.twimg.com/profile_images/1799814172303106048/hiHuXgpi_400x400.png" size="100" round={true} />
            </div>
            <div className='text-right m-4'>
                <button className='px-4 py-1 hover:bg-gray-200 rounded-full border border-gray-400'>Edit Profile</button>
            </div>
            <div className='m-4'>
                <h1 className='font-bold text-xl'>Vedang</h1>
                <p className='text-sm'>@VedangxSakata01</p>
            </div>
            <div className='m-4 text-sm'>
                <p>Enthusiastic technophile with a robust understanding of Data Structures and Algorithms, and a proven ability to solve complex problems. A committed professional with a meticulous attention to detail and a solid foundation in development.</p>
            </div>
        </div>

    </div>
  )
}

export default Profile