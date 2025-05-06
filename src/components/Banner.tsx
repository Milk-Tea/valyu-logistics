import React from 'react';

export default function CtaBanner() {
  return (
    <section className="bg-[#1D6295] text-white py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-left lg:text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Choose Quality. Choose Loyalty.
        </h2>
        <p className="text-lg md:text-xl mb-4">
          In today’s competitive world, quality isn’t optional. It’s essential.
        </p>
        <p className="text-lg md:text-xl mb-4">
          We’re committed to delivering excellence that doesn’t just satisfy, but earns your trust and loyalty.
        </p>
        <p className="text-lg font-semibold italic mb-6">
          Experience the difference. Partner with us today.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#2E3192] hover:text-[#2E3192] text-white font-semibold px-8 py-3 rounded-md shadow hover:bg-gray-100 transition"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
