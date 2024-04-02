import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; // Assuming you're using the search icon

const FAQ = () => {
    return (
        <div className='mt-20 p-10'>
            <div className='w-full'>
                <label className="block text-gray-700 text-2xl font-light text-3xl xs-text-2xl mb-2" htmlFor="FAQ">
                    Enter Your Question
                </label>

                <div className="flex items-center border rounded-md shadow-sm w-full md:w-2/4 sm:w-3/4 mt-5">
                    <span className="bg-white text-gray-400 py-2 px-3">
                        <FontAwesomeIcon icon={faSearch} />
                    </span>
                    <input
                        type="text"
                        className="w-full py-2 px-2  border-gray-300 focus:outline-none"
                        placeholder="How Do I Connect Custom Domain?"
                    />
                </div>
            </div>

        </div>
    );
};

export default FAQ;
