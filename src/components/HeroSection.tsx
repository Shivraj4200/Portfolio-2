
import React from 'react';
import { Download, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16 bg-gradient-to-b from-white to-blue-50">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-100 opacity-50" />
        <div className="absolute top-1/2 -left-48 w-96 h-96 rounded-full bg-purple-50 opacity-70" />
      </div>
      
      <div className="container mx-auto px-6 z-10 animate-fade-in">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-3/5">
            <p className="text-portfolio-blue font-medium mb-4">Full Stack Developer</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Shivraj Jaiswal</span>
              <span className="wave ml-2">👋</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              B.Tech in Computer Science with expertise in creating scalable applications using modern frontend and backend technologies. Committed to delivering efficient solutions and eager to explore emerging tools in AI and cloud technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-2 border-none" asChild>
                <a href="https://drive.google.com/file/d/1NqsF7CCx0WhnN54S9kYgiY6iMEyJI5pA/view?usp=sharing" >
                  <Download size={16} />
                  Download Resume
                </a>
              </Button>
              <Button variant="outline" className="border-2 border-blue-500 text-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 flex items-center gap-2" asChild>
                <a href="#projects">
                  View Projects
                </a>
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center shadow-lg">
                <div className="w-60 h-60 md:w-76 md:h-76 rounded-full bg-white overflow-hidden relative">
                  <img
                    src="/mee.jpg"
                    alt="Hero"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-full shadow-lg">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 rounded-full">
                  <code>{"<coder/>"}</code>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#skills" className="text-gray-500 hover:text-blue-600 transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
