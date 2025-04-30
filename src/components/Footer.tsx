
import React from 'react';
import { Github, Linkedin, Mail, Twitter, FileText } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="resume" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-3">Shivraj Jaiswal</h3>
            <p className="text-gray-400 mb-4">Full Stack Developer</p>
            
            <div className="flex space-x-4">
              <a
                href="https://github.com/Shivraj4200"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://github.com/Shivraj4200", "_blank", "noopener,noreferrer");
                }}
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/shivraj-jaiswal/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://www.linkedin.com/in/shivraj-jaiswal/", "_blank", "noopener,noreferrer");
                }}
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:jaisshivraj143@gmail.com"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("mailto:jaisshivraj143@gmail.com");
                }}
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <a 
              href="https://drive.google.com/file/d/1NqsF7CCx0WhnN54S9kYgiY6iMEyJI5pA/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mb-4 bg-white text-gray-900 px-6 py-3 rounded-md hover:bg-gray-200 transition-colors"
            >
              <FileText size={16} />
              Download Resume
            </a>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Shivraj Jaiswal. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
