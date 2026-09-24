import React from 'react';
// @ts-ignore
import profileImg from '../profile.jpg';

export const Skills: React.FC = () => {
  const skillList = [
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  ];

  return (
    <section id="skills" className="pt-8 border-t border-gray-900 space-y-8">
      {/* Section Title */}
      <h2 className="text-4xl font-extrabold text-gray-900 uppercase tracking-wider">
        SKILLS
      </h2>

      {/* Skills Grid - Moves sideways on hover */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {skillList.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 ease-in-out hover:translate-x-2 cursor-pointer"
          >
            <img src={skill.icon} alt={skill.name} className="w-8 h-8 object-contain" />
            <span className="font-semibold text-gray-800 text-sm">{skill.name}</span>
          </div>
        ))}
      </div>

      {/* Contacts Bar */}
      <div className="pt-6">
        <h3 className="text-right text-xl font-extrabold text-gray-900 uppercase mb-4">
          CONTACTS
        </h3>
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* User ID Badge with sideways photo animation */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-lg overflow-hidden bg-gray-200 transition-transform duration-300 ease-in-out group-hover:translate-x-2">
              <img src={profileImg as string} alt="Charles David" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="font-extrabold text-gray-900 text-sm leading-tight">Charles David</p>
              <p className="text-xs text-gray-500 font-medium">BSIT 3B</p>
            </div>
          </div>

          {/* Contact Details */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-xl shadow-sm text-sm font-semibold text-gray-800">
              <span className="text-red-500 font-bold">M</span>
              <span>charlesdavid1445@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-xl shadow-sm text-sm font-semibold text-gray-800">
              <span>📞</span>
              <span>+63 9777431150</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <footer className="pt-8 border-t border-gray-900 text-center text-xs text-gray-500">
        Copyright © 2026 Charles David. All rights reserved.
      </footer>
    </section>
  );
};