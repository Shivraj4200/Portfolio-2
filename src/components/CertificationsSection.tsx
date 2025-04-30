
import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type Certification = {
  title: string;
  issuer: string;
  date: string;
  skills: string[];
  link?: string;
  logo?: string;
};

const CertificationsSection = () => {
  const certifications: Certification[] = [
    {
      title: "Introduction to MongoDB (For Students)",
      issuer: "Mongo DB",
      date: "December 2024",
      skills: [" MongoDB", "Database Design", "NoSQL", "Data Modeling", "CRUD Operations"],
      link: "https://learn.mongodb.com/c/7o-U_hcRTwKu_Va5aL6i0Q",
    },
    {
      title: "Building Web Applications in PHP",
      issuer: "Coursera",
      date: "November 2024",
      skills: ["PHP", "Web Development", "MySQL", "Backend Development", "REST APIs"],
      link: "https://www.coursera.org/account/accomplishments/certificate/ZK65ZGOYJMGX",
    },
    {
      title: "React JS",
      issuer: "Infosys",
      date: "October 2024",
      skills: ["React", "JavaScript", "Frontend Development", "UI Components"],
      link: "https://ibb.co/BH0tKVVr",
    },
    {
      title: "Data Structures and Algorithms",
      issuer: "GeeksforGeeks",
      date: "July 2024",
      skills: [" Data Structures", "Algorithms", "Problem Solving", "Complexity Analysis"],
      link: "https://media.geeksforgeeks.org/courses/certificates/35f34aed3aaf3946a54b606dbe2961d8.pdf",
    }
  ];

  return (
    <section id="certifications" className="section bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="container mx-auto">
        <h2 className="section-title bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">Certifications & Courses</h2>
        <p className="section-subtitle">
          Continuous learning is essential in tech. Here are some professional certifications I've completed to stay current.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 pb-0">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <CardTitle className="text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{cert.title}</CardTitle>
                    <CardDescription className="text-gray-600">{cert.issuer}</CardDescription>
                  </div>
                  <Award className="text-blue-600 h-8 w-8" />
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-sm text-gray-500 mb-4">Completed: {cert.date}</p>
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-blue-700">Skills Gained:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-xs rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4">
                {cert.link && (
                  <Button variant="ghost" size="sm" className="flex items-center gap-1 text-blue-600 hover:text-purple-600 transition-colors" asChild>
                    <a href={cert.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={14} />
                      Verify Certificate
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
