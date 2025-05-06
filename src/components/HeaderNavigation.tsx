import React, { useState, useEffect } from 'react';
import ValyuLogo from '../assets/valyu-logo.svg';

interface NavItem {
  label: string;
  href: string;
}

interface HeaderNavigationProps {
  navItems: NavItem[];
}

export default function HeaderNavigation({ navItems }: HeaderNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <header className="max-w-[1530px] relative z-20 px-4 lg:px-10 py-4 flex justify-between items-center mx-auto">
      {/* Logo */}
      <img src={ValyuLogo} alt="Valyu Logo" className="w-[200px]" />

      {/* Hamburger Toggle Button (Mobile Only) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`lg:hidden z-50 absolute top-6 right-6 text-white focus:outline-none`}
        aria-label="Toggle menu"
        >
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
            </svg>
        </button>


      {/* Navigation Menu */}
        <nav
            className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 ease-in-out lg:static lg:flex lg:flex-row lg:bg-transparent lg:justify-end lg:items-center ${
                isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            } lg:opacity-100 lg:pointer-events-auto`}
        >
            <ul className="flex flex-col lg:flex-row items-center gap-6 text-white font-semibold uppercase font-montserrat">
                {navItems.map((item) => (
                <li key={item.href}>
                    <a
                    href={item.href}
                    className="hover:text-blue-600 transition-colors text-[18px] block"
                    onClick={() => setIsOpen(false)} // Close menu on click
                    >
                    {item.label}
                    </a>
                </li>
                ))}
            </ul>
        </nav>


    </header>
  );
}
