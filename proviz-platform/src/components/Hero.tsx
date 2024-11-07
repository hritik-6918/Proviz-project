import React from 'react';
import { Brain, Sparkles, Code } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-4.0.3')] mix-blend-overlay opacity-10 bg-cover bg-center" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Shape the Future with AI
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join the next generation of AI innovators at Proviz School of AI. 
            Master cutting-edge technology and transform your career.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-indigo-900 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Apply Now
            </button>
            <button 
              onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View Programs
            </button>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
            <Brain className="h-12 w-12 mb-4 text-indigo-400" />
            <h3 className="text-xl font-semibold mb-2">Deep Learning</h3>
            <p className="text-gray-300">Master neural networks and advanced AI algorithms</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
            <Sparkles className="h-12 w-12 mb-4 text-indigo-400" />
            <h3 className="text-xl font-semibold mb-2">AI Applications</h3>
            <p className="text-gray-300">Build real-world AI solutions for complex problems</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
            <Code className="h-12 w-12 mb-4 text-indigo-400" />
            <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
            <p className="text-gray-300">Learn to create intelligent systems that learn and adapt</p>
          </div>
        </div>
      </div>
    </div>
  );
}