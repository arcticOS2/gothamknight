import { Card } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: '📊',
      title: 'Data Analysis & Visualization',
      description: 'Transform raw data into meaningful insights through comprehensive statistical analysis and compelling visualizations using Python, R, and Power BI.',
      features: ['Statistical Modeling', 'Data Cleaning', 'Interactive Dashboards', 'Trend Analysis']
    },
    {
      icon: '🤖',
      title: 'Machine Learning Model Development',
      description: 'Design and implement predictive models tailored to your business needs, from regression analysis to advanced ensemble methods.',
      features: ['Predictive Analytics', 'Model Optimization', 'Feature Engineering', 'Performance Evaluation']
    },
    {
      icon: '📈',
      title: 'Dashboard Creation',
      description: 'Create interactive and user-friendly dashboards using Power BI and R Shiny to help stakeholders make data-driven decisions.',
      features: ['Real-time Dashboards', 'Custom Visualizations', 'User Experience Design', 'Business Intelligence']
    },
    {
      icon: '🧠',
      title: 'Deep Learning Solutions',
      description: 'Leverage neural networks and deep learning techniques to solve complex problems in computer vision, NLP, and time series forecasting.',
      features: ['Neural Networks', 'TensorFlow Implementation', 'Natural Language Processing', 'Computer Vision']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gotham-charcoal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-section-title text-batman-gold mb-6">Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-batman-gold to-batman-gold-dark mx-auto mb-8"></div>
          <p className="text-text-secondary font-inter text-lg max-w-3xl mx-auto">
            Comprehensive data science solutions to unlock the power of your data
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="project-card relative p-8 h-full">
              <div className="space-y-6">
                {/* Service Icon */}
                <div className="skill-icon w-20 h-20 mx-auto">
                  <span className="text-4xl">{service.icon}</span>
                </div>

                {/* Service Title */}
                <h3 className="text-2xl font-montserrat font-bold text-batman-gold text-center">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-text-secondary font-inter leading-relaxed text-center">
                  {service.description}
                </p>

                {/* Service Features */}
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-batman-gold rounded-full"></div>
                      <span className="text-text-primary font-inter">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-text-secondary font-inter text-lg mb-6">
            Ready to transform your data into actionable insights?
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-batman text-lg px-10 py-4"
          >
            Let's Work Together
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;