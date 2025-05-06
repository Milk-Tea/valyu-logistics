import React from 'react';

export default function AboutSection() {
  return (
    <section className="bg-gray-100 py-20 px-6 md:px-12 text-center">
      <div className="max-w-[1200px] mx-auto">
        <span className="inline-block text-sm font-medium text-white bg-[#1D6295] rounded-full px-4 py-1 mb-6">
          OUR STORY
        </span>
        <p className="text-2xl md:text-3xl leading-relaxed text-gray-800 font-light">
        Valyu Logistics (PTY) Ltd is a proudly woman-owned company, founded in 2023 to provide tailored, reliable logistics and supply chain solutions across the SADC region.
        </p>
        <p className="text-2xl md:text-3xl leading-relaxed text-gray-800 font-light">
            Backed by over 20 years of combined experience, we offer flexible, efficient services and proven delivery routes to help businesses move smarter and stay competitive.
        </p>
      </div>
    </section>
  );
}
