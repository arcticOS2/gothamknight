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
    <section id="home" className="min-h-screen hero-background flex items-center justify-center relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${gothamBg})` }}
      />
      
      {/* Animated Bat Signal */}
      <div className="absolute top-20 right-20 text-batman-gold text-8xl opacity-10 animate-float hidden lg:block">
        🦇
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-hero text-text-primary mb-4 animate-glow">
            ARPAN SAMANTA
          </h1>
          <p className="text-xl md:text-2xl font-montserrat font-medium text-batman-gold tracking-wide mb-2">
            M.Sc. Statistics | IIT Kanpur
          </p>
          <p className="text-lg md:text-xl text-text-secondary font-inter max-w-3xl mx-auto leading-relaxed">
            Turning Data Into Actionable Insights
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
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

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-batman-gold text-2xl">↓</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;