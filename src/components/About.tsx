import React from 'react';
// @ts-ignore
import profileImg from '../profile.jpg';

export const About: React.FC = () => {
  return (
    <section id="about" className="pt-8 border-t border-gray-900">
      <h2 className="text-4xl font-extrabold text-gray-900 uppercase tracking-wider mb-8">
        ABOUT ME
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left Side: Photo with Sideways Hover Effect */}
        <div className="md:col-span-5 flex justify-center">
          <div className="w-full max-w-xs group cursor-pointer">
            <div className="w-full aspect-square rounded-2xl overflow-hidden bg-gray-200 transition-transform duration-300 ease-in-out group-hover:translate-x-3 shadow-md">
              <img
                src={profileImg as string}
                alt="Charles David Fernandez"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Side: Bio Card & Hire Button */}
        <div className="md:col-span-7 flex flex-col items-end space-y-6">
          <div className="bg-aqua border border-gray-300 rounded-2xl p-6 shadow-md text-blue-800 text-base leading-relaxed">
           Hello, I am Charles David Fernandez, 21-year-old Information Technology student from Cogon, Cordova, Cebu. I am passionate about technology, particularly in the areas of software development, networking, and digital innovation. I enjoy expanding my knowledge by learning new skills and exploring emerging technologies. In my free time, I like playing basketball, engaging in creative digital projects, and discovering new tools that enhance productivity and creativity.

          </div>

          <button className="px-6 py-2 bg-white border border-gray-300 rounded-xl shadow-md text-gray-900 font-bold uppercase hover:bg-gray-50 transition-colors">
            HIRE ME!
          </button>
        </div>
      </div>
    </section>
  );
};