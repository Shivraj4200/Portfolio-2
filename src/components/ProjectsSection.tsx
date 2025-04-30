
import React from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

type Project = {
  name: string;
  description: string;
  problem: string;
  techStack: string[];
  features: string[];
  outcome: string;
  github?: string;
  demo?: string;
  image?: string;
};

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      name: "Fit Track - Fitness Management System",
      description: "A web application that helps users track their fitness goals, workouts, and nutrition.",
      problem: "Many fitness enthusiasts struggle to maintain a consistent workout and nutrition regimen due to lack of tracking.",
      techStack: ["PHP", "MySQL", "CSS", "Bootstrap"],
      features: [
        "Designed and optimized a responsive UI for cross-device accessibility, integrating intuitive dashboards for trainers andusers to manage fitness routines efficiently.",
        "Implemented secure user authentication, role-based access control, and real-time progress tracking using PHP and MySQL,ensuring data integrity and seamless user experience. ",
        "Developed a fitness management system enabling users to create personalized workout plans, tracknutrition, and monitor progress with interactive visualizations. ",
      ],
      outcome: " Achieved a 30% increase in user engagement and a 25% improvement in user retention within three months of launch.",
      github: "https://github.com/Shivraj4200/Fitness-Management-System",
      image: "/pic1.jpg",
    },
    {
      name: "Appointement Management System",
      description: "A web application that allows users to book and manage appointments with doctors according to their availability.",
      problem: " Patients often face challenges in scheduling appointments with doctors due to lack of real-time availability information.",
      techStack: ["React JS", "React Router", "CSS", "Bootstrap"],
      features: [
        "Developed a React-based Appointment Management System with authentication and role-based access for users and admins.",
        "Implemented dynamic appointment handling with add, edit, delete, and clear functionalities using React state management.",
        " Integrated React Toastify for real-time notifications and React Router for seamless navigation.",
      ],
      outcome: " Enhanced user experience with a 40% reduction in appointment booking time and improved admin management efficiency.",
      github: "https://github.com/Amangupta81/Appointment-App",
      image: "/pic2.png",
    },
    {
      name: "Weather App",
      description: "A web application that provides real-time weather updates and forecasts for any location.",
      problem: "Users often struggle to find accurate and timely weather information for their locations.",
      techStack: ["Node.js", "Express", "Open-Weather API"],
      features: [
        "Built a real-time weather application using Node.js and Express.js to retrieve and display weather data.",
        "Incorporated Open-Weather API to fetch weather details based on user-input city names.",
        "Configured CORS to enable secure cross-origin requests for seamless front-end integration.",
      ],
      outcome: " Delivered a user-friendly interface with accurate weather updates, achieving a 50% increase in user engagement.",
      github: "https://github.com/Shivraj4200/Weather-App",
      image: "/pic3.png",
    }
  ];

  return (
    <section id="projects" className="section bg-gradient-to-b from-purple-50 to-blue-50">
      <div className="container mx-auto">
        <h2 className="section-title bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">Featured Projects</h2>
        <p className="section-subtitle">
          Explore some of my recent work that showcases my technical skills and problem-solving approach.
        </p>
        
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="project-card flex flex-col md:flex-row overflow-hidden border border-blue-100 transition-all duration-300 transform hover:shadow-xl"
            >
              <div className={`md:w-1/2 flex items-center justify-center p-10 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="aspect-video w-full rounded-lg object-cover"
                  />
                ) : (
                  <div className="aspect-video w-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                    <Code size={64} className="text-white" />
                  </div>
                )}
              </div>
              
              <div className={`md:w-1/2 p-8 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{project.name}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2 text-blue-700">The Problem</h4>
                  <p className="text-gray-600">{project.problem}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2 text-blue-700">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 hover:from-blue-200 hover:to-purple-200 border-none">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2 text-blue-700">Key Features</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2 text-blue-700">Outcome</h4>
                  <p className="text-gray-600">{project.outcome}</p>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  {project.github && (
                    <Button variant="outline" className="border-blue-500 text-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 flex items-center gap-2" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        View Code
                      </a>
                    </Button>
                  )}
                  
                  {project.demo && (
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 flex items-center gap-2 border-none" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
