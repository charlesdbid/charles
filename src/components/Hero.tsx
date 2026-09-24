import React from 'react';
// @ts-ignore
import profileImg from '../profile.jpg';

// 1. Add "export" directly before "const Hero"
export const Hero: React.FC = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 py-8">
      {/* Left Column: Info & Social Links */}
      <div className="space-y-6 text-left max-w-xl">
        <h1 className="text-5xl font-black text-gray-900 tracking-tight leading-tight">
          HI, I'm Charles David Fernandez
        </h1>
        
        <p className="text-gray-600 text-lg font-normal leading-relaxed">
          Information Technology student with a passion for Figma Designer,
          networking, and technology integration.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-4 pt-2">
          {/* GitHub */}
          <a
            href="https://github.com/Jeason2004"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-white border border-gray-200 rounded-xl shadow-sm text-gray-700 hover:text-gray-900 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="https://web.facebook.com/jason.limpangog.98"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-white border border-gray-200 rounded-xl shadow-sm text-blue-600 hover:text-blue-700 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            aria-label="Facebook"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>

          {/* Gmail */}
          <a
            href="mailto:your-email@gmail.com"
            className="p-2.5 bg-white border border-gray-200 rounded-xl shadow-sm text-red-500 hover:text-red-600 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            aria-label="Gmail"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Right Column: Profile Image */}
      <div className="lg:col-span-5 flex justify-center">
        <div className="relative w-full max-w-md group cursor-pointer">
          <div className="aspect-square rounded-3xl overflow-hidden shadow-md transform transition-all duration-300 ease-in-out group-hover:translate-x-3 rotate-2 hover:rotate-0 bg-gray-200">
            <img
              src={profileImg as string}
              alt="Jeason Dinoy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// 2. Make sure "export default Hero;" is REMOVED from the end of the file