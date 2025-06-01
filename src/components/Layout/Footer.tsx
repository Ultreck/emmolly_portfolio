import React from 'react';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Dribbble, 
  Mail, 
  MapPin, 
  Phone 
} from 'lucide-react';
import { socialLinks } from '../../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <Github size={20} />;
      case 'linkedin':
        return <Linkedin size={20} />;
      case 'twitter':
        return <Twitter size={20} />;
      case 'dribbble':
        return <Dribbble size={20} />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Portfolio</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-sm">
            Skilled in building robust, scalable, and user-friendly applications from frontend to backend. I combine design precision with backend efficiency to deliver complete, production-ready solutions
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  aria-label={link.platform}
                >
                  {getIconComponent(link.icon)}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#resume" 
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Resume
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="mr-3 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-600 dark:text-gray-300">adetutuemmanueloluwatayese@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="mr-3 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-600 dark:text-gray-300">+2347064778921</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-600 dark:text-gray-300">Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;