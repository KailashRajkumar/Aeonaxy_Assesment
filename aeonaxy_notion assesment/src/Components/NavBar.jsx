import React, { useState } from 'react'
import { faArrowUpRightFromSquare, faBars, faXmark} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LanguageDropdown from './LanguageDropdown'
import faq from '../assets/faq.png'
const NavBar = () => {
  const Links = [
    {
      name: 'Go to tilda.acc',
      link: 'https://tilda.acc'
    },
    {
      name: 'Go to Help Center',
      link: 'https://HelpCenter.tilda.acc'
    }
  ];

  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className='shadow-md w-full fixed top-0 left-0'>
        <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
          <div className='font-bold text-2xs cursor-pointer flex items-center font-[poppins] text-gray-800'>
            <span className='text-1xl text-indigo-600 mr-1'>
              <img className='w-10 mr-2' src={faq} alt="logo" />
            </span>
            Frequently Asked Questions
          </div>

          <div onClick={toggleOpen} className='text-xl absolute right-5 top-3.5 cursor-pointer md:hidden'>
            <FontAwesomeIcon icon={open ? faXmark : faBars} />
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px]'} md:opacity-100`}>
            {
              Links.map((link) => (
                <li key={link.name} className='md:ml-8 text-xs md:my-0 my-5'>
                  <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name} <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                </li>
              ))
            }
            <LanguageDropdown />
          </ul>
        </div>
      </div>
    </>
  )
}

export default NavBar