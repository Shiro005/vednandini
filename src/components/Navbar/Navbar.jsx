import React from 'react';

const menuItems = [
    {
        name: 'Home',
        href: '#',
    },
    {
        name: 'About',
        href: '#',
    },
    {
        name: 'Contact',
        href: '#',
    },
    {
        name: 'Gallery',
        href: '#',
    },
    {
        name: 'Accomdination',
        href: '#',
    },
];

export function Navbar() {
    return (
        <div className="relative w-full bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
                <div className="inline-flex items-center space-x-2">
                    <span>
                        <img
                            src="http://vednandini.com/wp-content/uploads/2018/09/Vednandini-Logo.png"
                            alt=""
                            className="w-30 h-10"
                        />
                    </span>
                </div>

                {/* Hide the menu for mobile and show the button */}
                <div className="hidden lg:flex grow items-start">
                    <ul className="ml-12 inline-flex space-x-8">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    className="text-sm font-semibold text-gray-800 hover:text-green-500 transition-all duration-300 ease-in-out"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="lg:block">
                    <button
                        type="button"
                        className="rounded-md bg-green-700 px-4 py-2 text-sm font-semibold text-white hover:bg-green-900 transition-transform duration-300 ease-in-out transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black shadow-md"
                    >
                        Book Now
                    </button>
                </div>
            </div>

            {/* Mobile View - Scrollable section */}
            <div className="lg:hidden mt-4">
                <div className="flex items-center space-x-6 overflow-x-auto px-4 py-2 scrollbar-hide">
                    {menuItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="text-sm font-semibold text-gray-800 bg-gray-200 rounded-lg px-4 py-2  transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-green-700 hover:text-white"
                        >
                          {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
