import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'arpans24@iitk.ac.in',
      link: 'mailto:arpans24@iitk.ac.in'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+91-7076648870',
      link: 'tel:+917076648870'
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/arcticOS2',
      link: 'https://github.com/arcticOS2'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/arcticos',
      link: 'https://linkedin.com/in/arcticos'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gotham-charcoal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-section-title text-batman-gold mb-6">Contact Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-batman-gold to-batman-gold-dark mx-auto mb-8"></div>
          <p className="text-text-secondary font-inter text-lg max-w-3xl mx-auto">
            Ready to collaborate on your next data science project? Let's connect and turn your data into insights.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-subsection text-text-primary mb-8">Get In Touch</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="card-batman">
                  <div className="flex items-center space-x-6">
                    <div className="skill-icon w-14 h-14">
                      <span className="text-2xl">{info.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-montserrat font-semibold text-batman-gold mb-1">
                        {info.label}
                      </h4>
                      <a 
                        href={info.link}
                        className="text-text-primary hover:text-batman-gold transition-colors duration-300 font-inter"
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Additional Info */}
            <Card className="card-batman mt-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🦇</div>
                <h4 className="font-montserrat font-bold text-batman-gold mb-2">
                  Data Scientist by Day, Movie Enthusiast by Night
                </h4>
                <p className="text-text-secondary font-inter">
                  Always excited to discuss data science projects, statistical modeling, 
                  or the latest blockbuster movies!
                </p>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="space-y-8">
            <h3 className="text-subsection text-text-primary mb-8">Send a Message</h3>
            
            <Card className="card-batman">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-text-primary font-montserrat font-medium mb-2">
                      Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gotham-gray border-gotham-light-gray text-text-primary focus:border-batman-gold focus:ring-batman-gold"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-text-primary font-montserrat font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-gotham-gray border-gotham-light-gray text-text-primary focus:border-batman-gold focus:ring-batman-gold"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-text-primary font-montserrat font-medium mb-2">
                    Subject *
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gotham-gray border-gotham-light-gray text-text-primary focus:border-batman-gold focus:ring-batman-gold"
                    placeholder="Project Collaboration"
                  />
                </div>

                <div>
                  <label className="block text-text-primary font-montserrat font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full bg-gotham-gray border-gotham-light-gray text-text-primary focus:border-batman-gold focus:ring-batman-gold resize-none"
                    placeholder="Tell me about your project and how I can help..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="btn-batman w-full text-lg py-4"
                >
                  Send Message 🚀
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;