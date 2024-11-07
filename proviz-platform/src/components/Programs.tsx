import React from 'react';
import { BookOpen, Users, Clock, Trophy } from 'lucide-react';

const programs = [
  {
    title: 'AI Fundamentals',
    duration: '3 months',
    level: 'Beginner',
    description: 'Master the basics of artificial intelligence and machine learning.',
    features: ['Python Programming', 'Data Structures', 'Basic ML Algorithms']
  },
  {
    title: 'Advanced Machine Learning',
    duration: '6 months',
    level: 'Intermediate',
    description: 'Deep dive into advanced ML concepts and real-world applications.',
    features: ['Deep Learning', 'Neural Networks', 'Computer Vision']
  },
  {
    title: 'AI Engineering',
    duration: '12 months',
    level: 'Advanced',
    description: 'Become an AI engineer capable of building complex systems.',
    features: ['MLOps', 'AI Architecture', 'Production Deployment']
  }
];

export default function Programs() {
  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully crafted programs designed to take you from basics to mastery
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
                <div className="flex items-center space-x-2 text-gray-600 mb-4">
                  <Clock className="h-5 w-5" />
                  <span>{program.duration}</span>
                  <span className="mx-2">•</span>
                  <Trophy className="h-5 w-5" />
                  <span>{program.level}</span>
                </div>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <ul className="space-y-3 mb-8">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <BookOpen className="h-5 w-5 text-indigo-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}