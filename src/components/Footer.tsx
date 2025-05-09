import React from 'react';
import { Link } from 'react-router-dom';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';
import logo from '../assets/valyu-logo.svg';

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-12 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Tagline */}
        <div className="md:col-span-1">
          <div className="mb-4">
            <img src={logo} alt="Valyu Logistics" className="h-10" />
          </div>
          <p className="text-sm text-gray-400">
            From pit to port. Delivering logistics excellence across the SADC region.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-sm font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sm font-semibold mb-4">Solutions</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/services/road-freight" className="hover:text-white">Road Freight</Link></li>
            <li><Link to="/services/sea-freight" className="hover:text-white">Sea Freight</Link></li>
            <li><Link to="/services/warehousing" className="hover:text-white">Warehousing</Link></li>
            <li><Link to="/services/supply-chain" className="hover:text-white">Supply Chain</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              Email:{' '}
              <a href="mailto:info@valyulogistics.co.za" className="hover:text-white">
                info@valyulogistics.co.za
              </a>
            </li>
            <li>
              Phone:{' '}
              <a href="tel:+27762828086" className="hover:text-white">
                +27 76 2828 086
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-sm text-gray-500 text-center">
        <div className="flex items-center justify-center space-x-4 mb-2">
          <a
            href="https://www.facebook.com/people/Valyu-Logistics-Pty-Ltd/61556658675655/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="Facebook" className="h-4 w-4 hover:opacity-80" />
          </a>
          <a
            href="https://www.instagram.com/valyu_logistics/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="Instagram" className="h-4 w-4 hover:opacity-80" />
          </a>
          <a
            href="https://www.linkedin.com/company/valyu-logistics-pty-ltd/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" className="h-4 w-4 hover:opacity-80" />
          </a>
        </div>
        © {new Date().getFullYear()} Valyu Logistics. All rights reserved.
      </div>
    </footer>
  );
}
