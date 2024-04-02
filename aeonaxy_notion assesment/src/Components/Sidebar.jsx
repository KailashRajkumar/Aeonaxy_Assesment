import { faBars, faCartShopping, faChartSimple, faCircleQuestion, faCircleXmark, faCode, faCreditCardAlt, faDatabase, faEnvelopeOpen, faFileInvoiceDollar, faFilePen, faFont, faGear, faGlobe, faMagnifyingGlassDollar, faMobile, faPersonCircleQuestion, faTachographDigital, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const Sidebar = () => {
    const [activeLink, setActiveLink] = useState(0);

    const items = [
        { label: 'Domains', icon: faGlobe },
        { label: 'Site Settings', icon: faGear },
        { label: 'Page Editing', icon: faFilePen },
        { label: 'Plans and Billing', icon: faFileInvoiceDollar },
        { label: 'Data Capture Forms', icon: faDatabase },
        { label: 'Online Store', icon: faCartShopping },
        { label: 'Menu', icon: faBars },
        { label: 'Site Statistics and Goals', icon: faChartSimple },
        { label: 'Fonts', icon: faFont },
        { label: 'SEO', icon: faMagnifyingGlassDollar },
        { label: 'Mobile Version', icon: faMobile },
        { label: 'General Questions', icon: faCircleQuestion },
        { label: 'Other Questions', icon: faPersonCircleQuestion },
        { label: 'Multilanding', icon: faTachographDigital },
        { label: 'Email Campaign Builder', icon: faEnvelopeOpen },
        { label: 'Errors', icon: faTriangleExclamation },
        { label: 'Zero Block', icon: faCreditCardAlt },
        { label: 'Custom Code', icon: faCode },
        { label: 'Possible Problems', icon: faCircleXmark },
    ];

    const handleClick = (index) => {
        if (activeLink !== index) {
            setActiveLink(index);
        } else {
            setActiveLink(null);
        }
    };

    return (
        <>
            <div className="h-full w-full md:w-64 lg:w-72 xl:w-80 p-10 pt-0 px-0">
                <nav className="p-4">
                    <ul>
                        {items.map((item, index) => (
                            <li key={index} className={`mb-4 p-3 text-sm hover:bg-gray-200 duration-300 ${index === activeLink ? 'bg-gray-200' : ''}`}>
                                <a
                                    href="#!"
                                    className="text-gray-700 block"
                                    onClick={() => handleClick(index)}
                                >
                                    <FontAwesomeIcon icon={item.icon} className="mr-2" />
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Sidebar;
