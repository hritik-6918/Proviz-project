import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-indigo-600" />
            <span className="font-bold text-xl text-gray-900">Proviz School of AI</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-indigo-600 transition-colors">About</a>
            <a href="#programs" className="text-gray-700 hover:text-indigo-600 transition-colors">Programs</a>
            <a href="#testimonials" className="text-gray-700 hover:text-indigo-600 transition-colors">Testimonials</a>
            <button 
              onClick={() => window.scrollTo({ top: document.getElementById('apply')?.offsetTop, behavior: 'smooth' })}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}