import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Skills } from '../components/Skills';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans flex justify-center py-10 px-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col">
        
        {/* Top Window Bar */}
        <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-100">
          <span className="w-3 h-3 rounded-full bg-red-400 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-green-400 inline-block"></span>
        </div>

        <div className="p-8 md:p-16 space-y-16">
          <Navbar />
          
          <div id="home">
            <Hero />
          </div>

          <div id="about">
            <About />
          </div>

          <div id="skills">
            <Skills />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;