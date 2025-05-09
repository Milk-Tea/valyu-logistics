import React from 'react';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import About from './components/About';
import Services from './components/Services';
import Banner from './components/Banner';
import Layout from './components/Layout';
import heroImage from './assets/hero2.jpg';

export default function App() {
  return (
    <Layout>
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
    </Layout>
  );
}
