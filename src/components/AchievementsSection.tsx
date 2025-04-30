
import React from 'react';
import { Trophy, Medal, Star } from 'lucide-react';

type Achievement = {
  title: string;
  organization: string;
  date: string;
  description: string;
  icon: 'trophy' | 'medal' | 'star';
};

const AchievementsSection = () => {
  const achievements: Achievement[] = [
    {
      title: "Problem Solving",
      organization: "GeeksForGeeks",
      date: "July 2024",
      description: "400+ questions solved on GeeksForGeeks with institutional rank of 422.",
      icon: 'trophy'
    },
    {
      title: "5-Star Rating",
      organization: "Hackerrank",
      date: "May 2024",
      description: "Achieved a 5-star rating in problem-solving on HackerRank by solving complex algorithmic challenges.",
      icon: 'medal'
    }
  ];

  const getIcon = (iconType: string) => {
    switch(iconType) {
      case 'trophy': return <Trophy className="w-8 h-8" />;
      case 'medal': return <Medal className="w-8 h-8" />;
      case 'star': return <Star className="w-8 h-8" />;
      default: return <Trophy className="w-8 h-8" />;
    }
  };

  return (
    <section id="achievements" className="section bg-gradient-to-b from-purple-50 to-blue-50">
      <div className="container mx-auto">
        <h2 className="section-title bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">Achievements & Recognition</h2>
        <p className="section-subtitle">
          Notable accomplishments from competitions, academic achievements, and professional recognition.
        </p>
        
        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-lg shrink-0">
                  {getIcon(achievement.icon)}
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {achievement.organization} • {achievement.date}
                  </p>
                  <p className="text-gray-700">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
