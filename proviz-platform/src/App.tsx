import React, { useState } from 'react';
import ApplicationForm from './components/ApplicationForm';
import { GraduationCap, Brain, Users, Award } from 'lucide-react';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Proviz School of AI</span>
            </div>
            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Apply Now
            </button>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Shape the Future with</span>
              <span className="block text-indigo-600">Artificial Intelligence</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Join the next generation of AI innovators. Learn from industry experts and build the future of technology.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-6 w-6 text-indigo-600" />
                <h3 className="ml-2 text-lg font-semibold">Expert Instructors</h3>
              </div>
              <p className="text-gray-600">Learn from industry professionals with years of experience in AI and machine learning.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-indigo-600" />
                <h3 className="ml-2 text-lg font-semibold">Small Class Sizes</h3>
              </div>
              <p className="text-gray-600">Personalized attention with small class sizes and hands-on project experience.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-indigo-600" />
                <h3 className="ml-2 text-lg font-semibold">Industry Recognition</h3>
              </div>
              <p className="text-gray-600">Graduate with credentials recognized by leading tech companies worldwide.</p>
            </div>
          </div>
        </section>

        {/* Application Form Modal */}
        <ApplicationForm 
          isOpen={isFormOpen} 
          onClose={() => setIsFormOpen(false)} 
        />
      </main>

      {/* Footer */}
      <footer className="bg-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center text-gray-500">
            <p>&copy; 2024 Proviz School of AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;