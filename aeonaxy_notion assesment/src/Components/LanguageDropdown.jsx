import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAsia, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const LanguageDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative group">
            <button
                className="bg-white hover:bg-gray-100 text-xs text-dark border border-gray-200 font-[poppins] py-2 px-6 rounded md:ml-8 duration-500 focus:outline-none"
                onClick={toggleDropdown}
            >
                <FontAwesomeIcon icon={faEarthAsia} /> EN <FontAwesomeIcon icon={faCaretDown} />
            </button>
            <div className={`absolute ${isOpen ? 'block' : 'hidden'} bg-white text-gray-800 py-2 px-6 rounded shadow-md mt-3 ms-5 z-10`}>
                <a href="#!" className="block py-2">Tamil</a>
                <a href="#!" className="block py-2">French</a>
                <a href="#!" className="block py-2">German</a>
            </div>
        </div>
    );
};

export default LanguageDropdown;
