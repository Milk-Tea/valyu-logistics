import React from 'react';
import { useStoryblok, StoryblokComponent } from '@storyblok/react';
import HeaderNavigation from './components/HeaderNavigation';
import Hero from './components/Hero';
import heroImage from './assets/hero2.jpg';
import WhyUs from './components/WhyUs';
import Services from './components/Services';
import Banner from './components/Banner';
import Footer from './components/Footer';
import About from './components/About';

export default function App() {
  const story = useStoryblok('home', {
    version: 'draft',
    resolve_relations: [],
  });

  const navItems = [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Services', href: '/services' },
  ];

  if (!story?.content) return <div>Loading...</div>;

  return (
    <div className="max-w-[1530px] mx-auto">
      <HeaderNavigation navItems={navItems} />
      <Hero
        title="From Pit to Port"
        subtitle="Seamless cross-border transport and logistics spanning the entire SADC region and supply chain."
        ctaLabel="Get Started"
        ctaHref="/get-started"
        imageSrc={heroImage}
      />
      <WhyUs />
      <About />
      <Services />
      <Banner />
      <Footer />
      <StoryblokComponent blok={story.content} />
    </div>
  );
}
