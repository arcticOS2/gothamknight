import { Card } from '@/components/ui/card';

const AboutSection = () => {
  const education = [
    {
      degree: "M.Sc. Statistics",
      institution: "IIT Kanpur",
      year: "2024 – Present",
      achievement: "Pursuing advanced statistical modeling and machine learning"
    },
    {
      degree: "B.Sc. (Hons.) Statistics",
      institution: "St. Xavier's College, Kolkata",
      year: "2023",
      achievement: "Graduated with honors in Statistics"
    },
    {
      degree: "Higher Secondary (12th)",
      institution: "Ramakrishna Mission Vidyapeeth, Purulia",
      year: "2020",
      achievement: "Top 1% rank in state board"
    },
    {
      degree: "Secondary (10th)",
      institution: "Marokhana High School",
      year: "2018",
      achievement: "Top 1% rank, IIT JAM AIR 30"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gotham-charcoal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-section-title text-batman-gold mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-batman-gold to-batman-gold-dark mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <h3 className="text-subsection text-text-primary mb-4">
              Data Scientist & Statistics Enthusiast
            </h3>
            <p className="text-text-secondary font-inter text-lg leading-relaxed">
              I'm a passionate 2nd-year M.Sc. Statistics student at IIT Kanpur with a deep fascination for 
              Machine Learning, Deep Learning, and Natural Language Processing. My journey in data science 
              is driven by the belief that data holds the power to solve real-world problems.
            </p>
            <p className="text-text-secondary font-inter text-lg leading-relaxed">
              When I'm not diving deep into datasets or building predictive models, you'll find me exploring 
              the latest movies or discussing cinematic storytelling. My goal is to become a successful data 
              analyst who bridges the gap between complex statistical concepts and actionable business insights.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <span className="px-4 py-2 bg-batman-gold text-gotham-dark rounded-lg font-montserrat font-semibold">
                Machine Learning
              </span>
              <span className="px-4 py-2 bg-gotham-gray text-batman-gold border border-batman-gold rounded-lg font-montserrat font-semibold">
                Deep Learning
              </span>
              <span className="px-4 py-2 bg-gotham-gray text-batman-gold border border-batman-gold rounded-lg font-montserrat font-semibold">
                NLP
              </span>
              <span className="px-4 py-2 bg-gotham-gray text-batman-gold border border-batman-gold rounded-lg font-montserrat font-semibold">
                Data Analysis
              </span>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            <h3 className="text-subsection text-text-primary mb-8">Educational Journey</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="card-batman relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-batman-gold to-batman-gold-dark rounded-l-xl"></div>
                  <div className="pl-6">
                    <h4 className="font-montserrat font-bold text-batman-gold text-lg mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-text-primary font-medium mb-2">{edu.institution}</p>
                    <p className="text-text-secondary text-sm mb-2">{edu.year}</p>
                    <p className="text-text-muted text-sm">{edu.achievement}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;