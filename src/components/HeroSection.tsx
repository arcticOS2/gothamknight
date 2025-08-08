import { Button } from '@/components/ui/button';
import gothamBg from '@/assets/gotham-hero-bg.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen hero-background flex items-center justify-between relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${gothamBg})` }}
      />
      
      {/* Hero Content - Left Side */}
      <div className="relative z-10 px-6 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-hero text-text-primary mb-4 animate-glow">
            ARPAN SAMANTA
          </h1>
          <p className="text-xl md:text-2xl font-montserrat font-medium text-batman-gold tracking-wide mb-2">
            M.Sc. Statistics | IIT Kanpur
          </p>
          <p className="text-lg md:text-xl text-text-secondary font-inter max-w-3xl leading-relaxed">
            Turning Data Into Actionable Insights
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <Button
            onClick={() => scrollToSection('portfolio')}
            className="btn-batman text-lg px-10 py-6"
          >
            View My Work
          </Button>
          <Button
            onClick={() => scrollToSection('contact')}
            className="btn-batman-outline text-lg px-10 py-6"
          >
            Contact Me
          </Button>
        </div>
      </div>

      {/* Profile Image - Right Side */}
      <div className="relative z-10 hidden lg:block mr-16">
        <div className="w-80 h-80 rounded-full overflow-hidden ring-4 ring-batman-gold/30 shadow-glow">
          <img 
            src="/lovable-uploads/aed592af-6605-4689-befb-479e63c42579.png" 
            alt="Arpan Samanta Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-batman-gold text-2xl">↓</div>
      </div>
    </section>
  );
};

export default HeroSection;