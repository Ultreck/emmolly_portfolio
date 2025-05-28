import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { skills } from '../../constants';

const SkillsSection: React.FC = () => {
  // Group skills by category
  type Skill = typeof skills[number];
  const skillsByCategory = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  // Format category names for display
  const formatCategoryName = (name: string) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  // Colors for the pie chart segments
  const COLORS = ['#4F46E5', '#818CF8', '#A5B4FC', '#C7D2FE'];

  return (
    <section id="skills" className="mx-auto w-[80%] py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Here are some of the technologies and tools I work with on a regular basis.
          </p>
        </div>

        <div className="space-y-16">
          {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
            <div key={category}>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
                {formatCategoryName(category)}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {categorySkills.map((skill, index) => (
                  <div key={skill.name} className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="text-center mb-4">
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                        {skill.name}
                      </h4>
                    </div>
                    <div className="h-48 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={[
                              { name: skill.name, value: skill.level },
                              { name: 'Remaining', value: 100 - skill.level }
                            ]}
                            cx="50%"
                            cy="50%"
                            innerRadius={35}
                            outerRadius={60}
                            startAngle={90}
                            endAngle={-270}
                            dataKey="value"
                          >
                            <Cell fill={COLORS[index % COLORS.length]} />
                            <Cell fill="#E5E7EB" />
                          </Pie>
                          <Tooltip 
                            formatter={(value: number) => [`${value}%`, 'Proficiency']}
                            contentStyle={{
                              backgroundColor: 'rgba(255, 255, 255, 0.9)',
                              border: 'none',
                              borderRadius: '8px',
                              boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                            }}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="text-center mt-4">
                      <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            And many more! I'm always learning and expanding my skill set.
          </p>
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            See My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;