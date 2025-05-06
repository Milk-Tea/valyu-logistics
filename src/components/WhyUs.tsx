import React from 'react';
import transport from '../assets/transport.jpg';
import warehousing from '../assets/warehousing.jpg';
import supplychain from '../assets/supplychain.jpg';

interface Feature {
  title: string;
  description: string;
  image: string;
}

const features: Feature[] = [
  {
    title: 'Experience-first Approach',
    description: 'We don’t just serve customers, we craft experiences that are positive, personalized, and unforgettable.',
    image: transport,
  },
  {
    title: 'Impact that Lasts',
    description: 'We go beyond transactions. Our work positively shapes the lives of our customers and empowers our team to thrive.',
    image: warehousing,
  },
  {
    title: 'Trust-built Teamwork',
    description: 'Radical transparency, fairness, and collaboration are our core, we get it done right, and we get it done together.',
    image: supplychain,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 px-4 md:px-12">
      <div className="text-left mb-12">
        <div className="text-sm font-semibold text-[#1D6295] mb-2 flex items-center gap-2">
            <span>📦</span> WHY US
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Competitive Edge</h2>
        <p className="text-gray-700 text-lg">
          Backed by years of experience, we deliver reliable logistics solutions that drive efficiency and growth throughout the entire Southern African supply chain.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
            <div
                key={index}
                className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-md group transform transition duration-300 hover:scale-[1.03]"
            >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 w-full px-4 pb-4">
            <div className="bg-white/20 backdrop-blur-md text-white p-4 rounded-md">
                <h3 className="text-lg font-bold mb-1">{feature.title}</h3>
                <p className="text-sm">{feature.description}</p>
            </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
