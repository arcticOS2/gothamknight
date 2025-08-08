import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PortfolioSection = () => {
  const projects = [
    {
      title: 'Cinema Ticket Sales Prediction',
      description: 'Developed sophisticated regression models to predict movie ticket sales with exceptional accuracy, helping theaters optimize their revenue strategies.',
      tech: ['Python', 'Scikit-Learn', 'Pandas', 'Matplotlib'],
      metrics: ['R² Score: 87%', 'RMSE: 12.5%', 'Feature Engineering: 15+ variables'],
      icon: '🎬',
      github: 'https://github.com/arcticOS2/cinema-prediction'
    },
    {
      title: 'Amazon Stock Price Forecasting',
      description: 'Implemented advanced time-series modeling using ARIMA and ARIMAX to forecast stock prices with high precision for investment decisions.',
      tech: ['R', 'Time Series', 'ARIMA', 'ARIMAX'],
      metrics: ['Accuracy: 91%', 'MAE: 2.8%', 'Forecast Horizon: 30 days'],
      icon: '📈',
      github: 'https://github.com/arcticOS2/amazon-stock-forecast'
    },
    {
      title: 'Google Play Store Apps Analysis',
      description: 'Comprehensive analysis of 10,000+ mobile applications with interactive R Shiny dashboard, providing insights for app developers and marketers.',
      tech: ['R', 'Shiny', 'ggplot2', 'Data Mining'],
      metrics: ['10,000+ Apps Analyzed', 'UX Improvement: 60%', 'Interactive Dashboard'],
      icon: '📱',
      github: 'https://github.com/arcticOS2/playstore-analysis'
    },
    {
      title: 'Movie Verdict Detector',
      description: 'Built an advanced NLP model to analyze movie reviews and predict sentiment with exceptional accuracy, featuring a comprehensive Power BI dashboard.',
      tech: ['Python', 'NLP', 'TensorFlow', 'Power BI'],
      metrics: ['Accuracy: 92%', 'F1-Score: 0.89', 'Power BI Dashboard'],
      icon: '🎭',
      github: 'https://github.com/arcticOS2/movie-sentiment'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gotham-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-section-title text-batman-gold mb-6">Portfolio</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-batman-gold to-batman-gold-dark mx-auto mb-8"></div>
          <p className="text-text-secondary font-inter text-lg max-w-3xl mx-auto">
            Showcasing data science projects that deliver real-world impact and insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card relative p-8 h-full group">
              <div className="space-y-6">
                {/* Project Icon */}
                <div className="skill-icon w-16 h-16">
                  <span className="text-3xl">{project.icon}</span>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-montserrat font-bold text-batman-gold group-hover:animate-glow transition-all duration-300">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-text-secondary font-inter leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="space-y-3">
                  <h4 className="text-text-primary font-montserrat font-semibold">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-gotham-gray text-batman-gold border border-batman-gold/30 rounded-full text-sm font-montserrat"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Metrics */}
                <div className="space-y-3">
                  <h4 className="text-text-primary font-montserrat font-semibold">Key Achievements:</h4>
                  <div className="space-y-2">
                    {project.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-batman-gold rounded-full"></div>
                        <span className="text-text-secondary font-inter">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* GitHub Link */}
                <Button 
                  className="btn-batman-outline w-full group-hover:btn-batman transition-all duration-300"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  View on GitHub →
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Portfolio CTA */}
        <div className="text-center mt-16">
          <p className="text-text-secondary font-inter text-lg mb-6">
            Want to see more projects and detailed code?
          </p>
          <Button 
            className="btn-batman text-lg px-10 py-4"
            onClick={() => window.open('https://github.com/arcticOS2', '_blank')}
          >
            Visit My GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;