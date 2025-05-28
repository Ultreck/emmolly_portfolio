import React from 'react';
import { Code, PenTool, Server, Globe } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 mx-auto w-[80%] bg-white  dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            I'm a passionate developer with a keen eye for detail and a dedication to creating exceptional user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Hello! I'm <span className="font-semibold text-indigo-600 dark:text-indigo-400">Your Name</span>, a frontend developer based in San Francisco. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I graduated from University Name with a degree in Computer Science in 2020. Since then, I've been honing my skills in modern web technologies and have had the privilege of working with some amazing clients and teams.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me hiking, reading, or exploring new coffee shops. I believe in continuous learning and am always looking to expand my knowledge and skill set.
            </p>
            <div className="pt-4">
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                Let's Connect
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="text-indigo-600 dark:text-indigo-400 mb-4">
                <Code size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Frontend Development</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Building responsive websites with modern frameworks and clean code.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="text-indigo-600 dark:text-indigo-400 mb-4">
                <Server size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Backend Development</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Creating robust server-side applications and APIs.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="text-indigo-600 dark:text-indigo-400 mb-4">
                <PenTool size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">UI/UX Design</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Designing intuitive interfaces and seamless user experiences.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="text-indigo-600 dark:text-indigo-400 mb-4">
                <Globe size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Web Performance</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Optimizing websites for speed and accessibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;