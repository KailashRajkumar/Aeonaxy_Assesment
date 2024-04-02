import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { FaSquareFacebook, FaSquareXTwitter, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
    return (
        <>
            <div className='p-10 bg-zinc-200 shadow-md'>
                <div className='flex flex-wrap justify-center items-center text-2xs gap-5 mb-5'>
                    <a href="#!" className='text-gray-800 hover:text-gray-400 duration-500'>Tilda.cc</a>
                    <a href="#!" className='text-gray-800 hover:text-gray-400 duration-500'>Help Center</a>
                    <a href="#!" className='text-gray-800 hover:text-gray-400 duration-500'>Video Tutorials</a>
                    <a href="#!" className='text-gray-800 hover:text-gray-400 duration-500'>Blog</a>
                </div>

                <div className='flex flex-wrap justify-center items-center text-3xl gap-5 mb-10 '>
                    <a href="https://www.instagram.com/" className='text-dark-800 hover:text-gray-800 duration-500'><AiFillInstagram /></a>
                    <a href="https://www.youtube.com/" className='text-dark-800 hover:text-gray-800 duration-500'><FaYoutube /></a>
                    <a href="https://www.facebook.com/" className='text-dark-800 hover:text-gray-800 duration-500'><FaSquareFacebook /></a>
                    <a href="https://twitter.com/" className='text-dark-800 hover:text-gray-800 duration-500'><FaSquareXTwitter /></a>
                </div>

                <div className='flex flex-wrap justify-around items-center gap-5  mb-5'>
                    <div>
                        <h3>Report abuse</h3>
                        <p className='text-xs text-gray-500 mt-3'>
                            If you believe that any website made on <br />
                            Tilda is violating your rights, file a <br />
                            complaint by filling out this <a href='#!' className='text-orange-500'>form</a>
                        </p>
                    </div>
                    <div>
                        <h3>How to contact our support</h3>
                        <p className='text-xs text-gray-500 mt-3'>
                            To find out more about the platform <br />
                            features, use the feedback form in your <br />
                            Tilda account or conatct us via email <br /> 
                            <a href='#!' className='text-orange-500'>team@tilda.cc</a>
                        </p>
                    </div>
                    <div>
                        <h3>Accounting docs</h3>
                        <p className='text-xs text-gray-500 mt-3'>
                            To get the supporting documentation and <br />
                            proof of payment, send your request to <br />
                             <a href='#!' className='text-orange-500'>docs@tilda.cc</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer