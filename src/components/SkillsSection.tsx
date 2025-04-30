
import React from 'react';
import { 
  Layout, 
  Server, 
  Database,
  Code
} from 'lucide-react';
import { 
  Html5, 
  Css3, 
  Javascript,
  ReactIcon, 
  NodeJs, 
  Mysql, 
  Mongodb
} from './SkillIcons';

type Skill = {
  name: string;
  icon: React.ReactNode;
};

type SkillCategory = {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
};

const SkillsSection = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      icon: <Layout className="w-6 h-6" />,
      skills: [
        { name: 'React.js', icon: <ReactIcon className="w-8 h-8 text-blue-400" /> },
        { name: 'Next.js', icon: <Code className="w-8 h-8 text-black" /> },
        { name: 'HTML5', icon: <Html5 className="w-8 h-8 text-orange-600" /> },
        { name: 'CSS3/SASS', icon: <Css3 className="w-8 h-8 text-blue-500" /> },
        { name: 'Tailwind CSS', icon: <Code className="w-8 h-8 text-cyan-400" /> },
      ]
    },
    {
      title: 'Backend',
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: 'Node.js', icon: <NodeJs className="w-8 h-8 text-green-600" /> },
        { name: 'Express.js', icon: <Server className="w-8 h-8 text-gray-600" /> },
        { name: 'Django', icon: <Code className="w-8 h-8 text-green-800" /> },
        { name: 'FastAPI', icon: <Server className="w-8 h-8 text-green-500" /> },
      ]
    },
    {
      title: 'Databases',
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: 'MySQL', icon: <Mysql className="w-8 h-8 text-blue-700" /> },
        { name: 'MongoDB', icon: <Mongodb className="w-8 h-8 text-green-600" /> },
        { name: 'PostgreSQL', icon: <Database className="w-8 h-8 text-blue-500" /> },
        { name: 'Redis', icon: <Database className="w-8 h-8 text-red-500" /> },
      ]
    },
  ];

  return (
    <section id="skills" className="section bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="container mx-auto">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
          My technical toolkit encompasses a diverse range of frameworks and tools that I've mastered for building full-stack applications.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-blue-100"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex flex-col items-center p-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg hover:from-blue-100 hover:to-purple-100 transition-all duration-300 transform hover:scale-105">
                    <div className="mb-2">{skill.icon}</div>
                    <span className="text-sm font-medium text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center gap-3">
          {[
          ].map((tag, index) => (
            <span key={index} className="skill-tag bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 hover:from-blue-200 hover:to-purple-200 transition-colors">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
