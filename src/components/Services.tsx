import React from 'react';
import road from '../assets/road-freight.jpg';
import sea from '../assets/sea-freight.jpeg';
import customs from '../assets/customs-clearance.jpg';
import supply from '../assets/supply-chain.jpg';

interface Service {
  title: string;
  image: string;
  href: string;
}

const services: Service[] = [
  {
    title: 'Road Freight',
    image: road,
    href: '/services/road-freight',
  },
  {
    title: 'Sea Freight',
    image: sea,
    href: '/services/sea-freight',
  },
  {
    title: 'Customs Clearance',
    image: customs,
    href: '/services/customs-clearance',
  },
  {
    title: 'Supply Chain Management',
    image: supply,
    href: '/services/supply-chain',
  },
];

export default function Services() {
  return (
    <section className="bg-white py-16 px-4 md:px-12">
      <div className="">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12 gap-6">
          <div className="max-w-xl">
            <div className="text-sm font-semibold text-[#1D6295] mb-2 flex items-center gap-2">
              <span>📦</span> OUR SERVICES
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-snug">
              Discover the Full Range of Services We Offer
            </h2>
          </div>
          <div className="lg:w-1/3 text-gray-600">
            <p className="mb-4">
              Logistics services include freight forwarding, warehousing, customs clearance, and transportation.
              These services help businesses move their products and materials through the supply chain.
            </p>
            <a href="/services" className="inline-flex items-center text-[#1D6295] font-medium hover:underline">
              <span>View All Services</span>
              <span className="ml-2">↗</span>
            </a>
          </div>
        </div>

        {/* Custom Layout */}
        <div className="flex flex-wrap gap-6 justify-between">
          {services.map((service, index) => {
            const isSmall = index === 0 || index === 3;
            return (
              <a
                key={index}
                href={service.href}
                className={`group block bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition
                  ${isSmall ? 'w-full lg:w-[42%]' : 'w-full lg:w-[55%]'}
                  min-w-[150px]
                `}
              >
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex justify-between items-center p-4">
                  <h3 className="text-sm font-medium text-gray-900">{service.title}</h3>
                  <div className="text-[#1D6295] group-hover:translate-x-1 transition-transform">
                    ↗
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
