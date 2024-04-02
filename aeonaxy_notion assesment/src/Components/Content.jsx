import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Content = () => {
    return (
        <>
            <div className="p-10 bg-white border rounded-md shadow-sm mt-3.5 w-full md:w-3/4 sm:w-full ">
                <h1 className="text-2xl font-bold mb-5">Domains</h1>
                <ul>
                    <li className='mb-3'>
                        <FontAwesomeIcon icon={faCircleQuestion} className='text-orange-500' /> Why do I see a Tilda logo on a grey background when I open my website?
                    </li>
                    <li className='mb-3'>
                        <FontAwesomeIcon icon={faCircleQuestion} className='text-orange-500' /> How do I connect my custom domain?
                    </li>
                    <li className='mb-3'>
                        <FontAwesomeIcon icon={faCircleQuestion} className='text-orange-500' /> How do I connect multiple domain names to a single Tilda website?
                    </li>
                    <li className='mb-3'>
                        <FontAwesomeIcon icon={faCircleQuestion} className='text-orange-500' /> How do I create a custome buisness email address?
                    </li>
                    <li className='mb-3'>
                        <FontAwesomeIcon icon={faCircleQuestion} className='text-orange-500' /> Troubleshooting custom domain errors
                    </li>
                    <li className='mb-3'>
                        <FontAwesomeIcon icon={faCircleQuestion} className='text-orange-500' /> How do I connect a subdomain to my Tilda website?
                    </li>
                    <li className='mb-3'>
                        <FontAwesomeIcon icon={faCircleQuestion} className='text-orange-500' /> How do I redirect from HTTP to HTTPS?
                    </li>
                    <li className='mb-3'>
                        <FontAwesomeIcon icon={faCircleQuestion} className='text-orange-500' /> How do I remove "www" from a domain?
                    </li>
                    <li className='mb-3'>
                        <FontAwesomeIcon icon={faCircleQuestion} className='text-orange-500' /> How do I set up HTTPS/SSL for a subdomain in Tilda?
                    </li>
                    <li className='mb-3'>
                        <FontAwesomeIcon icon={faCircleQuestion} className='text-orange-500' /> How do I set up HTTPS/SSL certificate?
                    </li>
                    <li className='mb-3'>
                        <FontAwesomeIcon icon={faCircleQuestion} className='text-orange-500' /> How can I speed up (optimize) my Tilda website?
                    </li>
                    
                </ul>
            </div>
        </>
    )
}

export default Content