'use client'

import React, { useEffect } from 'react'
import Header from '../components/Header'
import MyDigitalTwin from '../components/ui/MyDigitalTwin';

const AboutPage: React.FC = () => {
  useEffect(() => {
    // --- Intersection Observer for reveal animations ---
    if (typeof window !== 'undefined') {
      const revealElements = document.querySelectorAll('.reveal');
      const timelineItems = document.querySelectorAll('.timeline-item');
      const observer = new window.IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, {
        threshold: 0.1
      });
      revealElements.forEach(el => observer.observe(el));
      timelineItems.forEach(el => observer.observe(el));
      return () => observer.disconnect();
    }
  }, []);

  return (
    <>
      <Header />
      <main className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14 ">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:-mr-80 lg:-mr-96"
        />
        {/* section hero */}
        <section className="mx-auto max-w-7xl px-6 py-8 sm:py-16 lg:px-8">
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl mb-10 text-left w-full">
            I don't just build software. I build businesses, teams, and opportunities.
          </h1>
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 flex flex-col h-full justify-end items-start">
              <p className="text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 mb-0">
                Welcome.<br/> 
                This is my story—a journey from a hands-on builder to a global business leader, driven by a passion for technology and a relentless pursuit of growth. <br/>
                Let's explore how we can create value together.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                alt="About"
                src="https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
                className="aspect-6/5 w-full max-w-lg rounded-2xl object-cover"
              />
            </div>
          </div>
        </section>
        

        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />

        {/* My Journey Timeline Section */}
        <section className="py-20 sm:py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-center text-4xl font-bold mb-16 reveal">My Journey</h2>
            <div className="relative timeline-container">
              {/* The Builder at Heart */}
              <div className="timeline-item mb-16 flex flex-col md:flex-row items-center">
                <div className="timeline-dot"></div>
                <div className="w-full md:w-1/2 md:pr-8 text-center md:text-right reveal">
                  <p className="text-indigo-600 font-semibold">2002 - 2013</p>
                  <h3 className="text-3xl font-bold mt-1">The Builder at Heart</h3>
                  <p className="mt-4 text-gray-600">
                    My career began with a deep passion for creation. At companies like TMA Solutions and S3 Solution, I built my foundation, not just writing code in C/C++/Python, but architecting solutions for global tech giants like Nortel Networks, Alteon and Ruckus Wireless. This was where I learned that robust technology is the bedrock of any great business.
                  </p>
                </div>
                <div className="w-full md:w-1/2 mt-8 md:mt-0"></div>
              </div>
              {/* From Code to People */}
              <div className="timeline-item mb-16 flex flex-col md:flex-row-reverse items-center">
                <div className="timeline-dot"></div>
                <div className="w-full md:w-1/2 md:pl-8 text-center md:text-left reveal">
                  <p className="text-indigo-600 font-semibold">2016 - 2024</p>
                  <h3 className="text-3xl font-bold mt-1">From Code to People</h3>
                  <p className="mt-4 text-gray-600">
                    Founding Carptech Corp was my pivotal transition. I realized that to scale a product, you must first scale people and processes. I went from building software to building a 100+ employee company, navigating everything from P&L management to leading the team through the COVID-19 crisis. I learned that true leadership is about enabling others to succeed.
                  </p>
                </div>
                <div className="w-full md:w-1/2 mt-8 md:mt-0"></div>
              </div>
              {/* The Global Strategist */}
              <div className="timeline-item flex flex-col md:flex-row items-center">
                <div className="timeline-dot"></div>
                <div className="w-full md:w-1/2 md:pr-8 text-center md:text-right reveal">
                  <p className="text-indigo-600 font-semibold">2024 - Present</p>
                  <h3 className="text-3xl font-bold mt-1">The Global Strategist</h3>
                  <p className="mt-4 text-gray-600">
                    My recent roles at VNG and Titan Technology were about taking that leadership to a global scale—launching a subsidiary in the UAE, forging partnerships with giants like ARAMCO, and operating across complex international markets. Today, at WitData, I synthesize all these experiences to help businesses leverage data for digital transformation. I don't just manage; I create markets.
                  </p>
                </div>
                <div className="w-full md:w-1/2 mt-8 md:mt-0"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy & The Person Section */}
        <section className="py-20 sm:py-32 bg-gradient-to-b from-indigo-100/20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="reveal">
                <h2 className="text-4xl font-bold text-gray-900">My Philosophy</h2>
                <p className="mt-6 text-lg text-gray-600">
                  I believe that technology should be a force for empowerment, not complexity. My approach to leadership is rooted in creating clarity, fostering autonomy, and building resilient teams that can thrive in ambiguity. True growth is never just about the bottom line; it's about building sustainable value for customers, employees, and partners alike. It's a marathon, not a sprint.
                </p>
              </div>
              <div className="reveal">
                <h3 className="text-3xl font-bold text-center mb-8">...And a Lazy Triathlete</h3>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 max-w-md mx-auto w-full">
                  <img
                    src="/page-about/chay.jpg"
                    alt="A person running a marathon"
                    className="rounded-lg shadow-md aspect-[2/1] object-cover hover:scale-105 transition-transform duration-300 col-span-2 w-full"
                  />
                  <img
                    src="/page-about/dap.jpg"
                    alt="A person cycling on a mountain road"
                    className="rounded-lg shadow-md aspect-square object-cover hover:scale-105 transition-transform duration-300 w-full"
                  />
                  <img
                    src="/page-about/boi.jpg"
                    alt="A person swimming in the sea"
                    className="rounded-lg shadow-md aspect-square object-cover hover:scale-105 transition-transform duration-300 w-full"
                  />
                </div>
                <p className="text-center mt-4 text-gray-600 italic">Ironman finisher. It's my metaphor for business: success requires endurance, discipline, and knowing when to rest. The "lazy" part is the most important.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gemini AI Feature Section */}
        <MyDigitalTwin />
      </main>
    </>
  );
};

export default AboutPage
