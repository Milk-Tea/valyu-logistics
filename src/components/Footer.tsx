import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-12 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Tagline */}
        <div className="md:col-span-1">
          <div className="mb-4">
            <img src="/src/assets/valyu-logo.svg" alt="Valyu Logistics" className="h-10" />
          </div>
          <p className="text-sm text-gray-400">
            From pit to port. Delivering logistics excellence across the SADC region.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-sm font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sm font-semibold mb-4">Solutions</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/services/road-freight" className="hover:text-white">Road Freight</a></li>
            <li><a href="/services/sea-freight" className="hover:text-white">Sea Freight</a></li>
            <li><a href="/services/warehousing" className="hover:text-white">Warehousing</a></li>
            <li><a href="/services/supply-chain" className="hover:text-white">Supply Chain</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Email: <a href="mailto:info@valyulogistics.co.za" className="hover:text-white">info@valyulogistics.co.za</a></li>
            <li>Phone: <a href="tel:+2776 2828 086" className="hover:text-white">+2776 2828 086</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-sm text-gray-500 text-center">
        <div className="flex items-center justify-center space-x-4 mb-2">
            <a href="https://www.facebook.com/people/Valyu-Logistics-Pty-Ltd/61556658675655/" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/facebook.svg" alt="Facebook" className="h-4 w-4 hover:opacity-80" />
            </a>
            <a href="https://www.instagram.com/valyu_logistics/" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/instagram.svg" alt="Instagram" className="h-4 w-4 hover:opacity-80" />
            </a>
            <a href="https://www.linkedin.com/company/valyu-logistics-pty-ltd/" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/linkedin.svg" alt="LinkedIn" className="h-4 w-4 hover:opacity-80" />
            </a>
        </div>
        © {new Date().getFullYear()} Valyu Logistics. All rights reserved.
    </div>

    </footer>
  );
}
