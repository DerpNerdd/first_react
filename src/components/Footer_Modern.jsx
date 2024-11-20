import React from 'react'
import {
    FaGithub,
    FaInstagram,
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaYoutube,
  } from 'react-icons/fa';

const Footer_Modern = () => {
  return (
    <footer className='bg-gradient-t-r from-gray-100 via-[#bce11f] to-gray-100'>
        <div className="max-w-screen-xl px-4 py-16 max-auto sm:px-6 lg:px-8">
            <div className = "grid grid-cols-1 gap-8 lg:grid-cols-3">
                <img src="" alt="" />
                <div>
                    <div className='flex'>
                        <a href="#" className='hover:opacity-75'>
                            <span className='sr-only'>Facebook</span>
                            <FaFaceBook size= "10"/>
                        </a>
                        <a href="#" className='hover:opacity-75'>
                            <span className='sr-only'>Facebook</span>
                            <FaFaceBook size= "10"/>
                        </a>
                        <a href="#" className='hover:opacity-75'>
                            <span className='sr-only'>Facebook</span>
                            <FaFaceBook size= "10"/>
                        </a>
                        <a href="#" className='hover:opacity-75'>
                            <span className='sr-only'>Facebook</span>
                            <FaFaceBook size= "10"/>
                        </a>
                    </div>
                    <div className='grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4'>
                        <div>
                            <p className='font-medium'>
                                Company
                            </p>
                            <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                <a href="#" className="hover:opacity-75">About</a>
                                <a href="#" className="hover:opacity-75">Meet the Team</a>
                                <a href="#" className="hover:opacity-75">History</a>
                                <a href="#" className="hover:opacity-75">Careers</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer_Modern