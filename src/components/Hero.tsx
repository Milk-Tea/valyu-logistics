import React from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, ctaLabel, ctaHref, imageSrc }) => {
  return (
    <section className="relative mt-[-113px] h-[600px] w-full max-w-[1530px] mx-auto overflow-hidden">
      {imageSrc && (
        <img
          src={imageSrc}
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover z-0 scale-x-[-1]"
        />
      )}
      <div className="relative z-10 h-full w-full bg-black/30 flex items-center px-4 md:px-12">
        <div className="text-white max-w-2xl mt-[113px]">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{title}</h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-white mb-6 font-montserrat">{subtitle}</p>
          )}
          {ctaLabel && ctaHref && (
            <a
              href={ctaHref}
              className="inline-block bg-[#2E3192] hover:text-[#2E3192] text-white font-semibold px-8 py-3 rounded-md shadow hover:bg-gray-100 transition"
            >
              {ctaLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
