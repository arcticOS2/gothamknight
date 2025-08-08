const SkillsSection = () => {
  const programmingSkills = [
    { name: 'Python', icon: '🐍', level: 95 },
    { name: 'R', icon: '📊', level: 90 },
    { name: 'SQL', icon: '🗃️', level: 85 },
    { name: 'C', icon: '⚡', level: 80 },
    { name: 'LaTeX', icon: '📝', level: 85 },
    { name: 'HTML', icon: '🌐', level: 75 }
  ];

  const tools = [
    { name: 'TensorFlow', icon: '🧠' },
    { name: 'Power BI', icon: '📈' },
    { name: 'Scikit-Learn', icon: '🤖' },
    { name: 'BeautifulSoup', icon: '🕷️' },
    { name: 'Git', icon: '🔧' },
    { name: 'GitHub', icon: '🐙' }
  ];

  const interests = [
    { name: 'Machine Learning', icon: '🎯' },
    { name: 'Deep Learning', icon: '🚀' },
    { name: 'NLP', icon: '💬' },
    { name: 'Data Visualization', icon: '📊' },
    { name: 'Statistical Modeling', icon: '📐' },
    { name: 'Cinema Analysis', icon: '🎬' }
  ];

  return (
    <section id="skills" className="py-20 bg-gotham-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-section-title text-batman-gold mb-6">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-batman-gold to-batman-gold-dark mx-auto mb-8"></div>
          <p className="text-text-secondary font-inter text-lg max-w-3xl mx-auto">
            Equipped with cutting-edge tools and technologies to tackle complex data challenges
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Programming Languages */}
          <div className="space-y-6">
            <h3 className="text-subsection text-text-primary text-center mb-8">Programming Languages</h3>
            <div className="space-y-6">
              {programmingSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="font-montserrat font-semibold text-text-primary">{skill.name}</span>
                    </div>
                    <span className="text-batman-gold font-montserrat font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gotham-gray rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-batman-gold to-batman-gold-dark h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Libraries */}
          <div className="space-y-6">
            <h3 className="text-subsection text-text-primary text-center mb-8">Tools & Libraries</h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <div key={index} className="skill-icon">
                  <div className="text-center">
                    <div className="text-2xl mb-2">{tool.icon}</div>
                    <p className="text-sm font-montserrat font-medium">{tool.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Areas of Interest */}
          <div className="space-y-6">
            <h3 className="text-subsection text-text-primary text-center mb-8">Areas of Interest</h3>
            <div className="grid grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <div key={index} className="skill-icon">
                  <div className="text-center">
                    <div className="text-2xl mb-2">{interest.icon}</div>
                    <p className="text-sm font-montserrat font-medium text-center leading-tight">{interest.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Batman-style decorative elements */}
        <div className="flex justify-center mt-16">
          <div className="text-batman-gold text-6xl opacity-20 animate-pulse">🦇</div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;