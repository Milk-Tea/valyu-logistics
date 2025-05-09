import {useEffect} from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import Banner from "../components/Banner";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import heroImage from "../assets/about-hero.jpg";
import mining from "../assets/mining.jpg";

import missionImage from '../assets/mission.jpg';
import visionImage from '../assets/vision.jpg';
import Partners from '../components/Partners';

export default function AboutPage() {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);
  return (
    <Layout>
      <Hero
        title="From Pit to Port"
        subtitle="Seamless cross-border transport and logistics spanning the entire SADC region and supply chain."
        ctaLabel="Get Started"
        ctaHref="/get-started"
        imageSrc={heroImage}
      />
      <section className="flex flex-col lg:flex-row bg-gray-50 py-20 px-4 lg:px-12 gap-8 items-center">
        <div className="w-full lg:w-[70%]">
            <span className="inline-block text-sm font-medium text-[#1D6295] border border-[#1D6295] rounded-full px-4 py-1 mb-6">
                FOUNDED WITH A PURPOSE
            </span>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6 max-w-[80%]">
            Empowering Logistics Across the SADC Region
          </h2>

          <p className="text-[22px] font-light text-gray-700 leading-relaxed">
            Valyu Logistics (PTY) Ltd was established in 2023 by Director Winnie
            Chen Dong, who identified a gap in the market for expert support in
            supply chain and logistics management. With over 20 years of
            combined experience, our team is dedicated to delivering
            comprehensive, customized logistics solutions across a wide range of
            industries throughout the SADC region.
          </p>
        </div>
      </section>
      <img src={mining} className="h-[500px] w-full object-cover"/>
      <section className="bg-white py-20 px-6 md:px-12">
      <div className="text-start lg:text-center">
        <span className="inline-block text-sm font-medium text-gray-500 bg-gray-100 rounded-full px-4 py-1 mb-6">
          Mission & Vision
        </span>

        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Our Commitment
        </h2>

        <div className="grid gap-8 lg:gap-16 md:grid-cols-2 text-left">
          {/* Mission */}
          <div className="flex flex-col gap-6" data-aos="fade-up">
            <img
              src={missionImage}
              alt="Our Mission"
              className="w-full h-[300px] object-cover rounded-lg"
            />
            <div>
              <h3 className="text-[28px] font-semibold text-gray-800 mb-3">
                Our Mission
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the trusted logistics partner offering inclusive, efficient, and affordable transport
                solutions across the SADC region. We aim to build lasting partnerships grounded in transparency,
                safety, and performance.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="flex flex-col gap-6" data-aos="fade-up" data-aos-delay="100">
            <img
              src={visionImage}
              alt="Our Vision"
              className="w-full h-[300px] object-cover rounded-lg shadow-sm"
            />
            <div>
              <h3 className="text-[28px] font-semibold text-gray-800 mb-3">
                Our Vision
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To lead the logistics industry in delivering innovative and dependable supply chain services
                that give our clients a competitive edge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Partners />

      <Banner />
    </Layout>
  );
}
