const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gotham-dark border-t border-gotham-gray py-12">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6">
          {/* Logo and Name */}
          <div className="space-y-4">
            <button
              onClick={scrollToTop}
              className="text-batman-gold text-4xl hover:animate-glow transition-all duration-300"
            >
              🦇
            </button>
            <h3 className="text-2xl font-montserrat font-bold text-batman-gold">
              Arpan Samanta
            </h3>
            <p className="text-text-secondary font-inter max-w-2xl mx-auto">
              M.Sc. Statistics at IIT Kanpur | Transforming Data into Actionable Insights
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center space-x-8 py-6">
            {[
              { name: 'GitHub', url: 'https://github.com/arcticOS2' },
              { name: 'LinkedIn', url: 'https://linkedin.com/in/arcticos' },
              { name: 'Email', url: 'mailto:arpans24@iitk.ac.in' }
            ].map((link, index) => (
              <a
                key={index}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : undefined}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-text-secondary hover:text-batman-gold transition-colors duration-300 font-montserrat font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="border-t border-gotham-gray pt-6">
            <p className="text-text-muted font-inter text-sm">
              © {currentYear} Arpan Samanta. All rights reserved. | Built with passion for data science and cinema.
            </p>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="mt-8 btn-batman-outline px-6 py-3 text-sm"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;