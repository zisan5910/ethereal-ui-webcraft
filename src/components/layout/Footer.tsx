import { Link } from 'react-router-dom';
import { Facebook, Mail, Phone, MapPin, Heart } from 'lucide-react';
import logo from '@/assets/logo.jpg';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Donation', href: '/donate' },
    { name: 'Contact', href: '/contact' },
  ];

  const programs = [
    { name: 'Education Support', href: '/programs#education' },
    { name: 'Environment', href: '/programs#environment' },
    { name: 'Skill Development', href: '/programs#skills' },
    { name: 'Awareness Campaigns', href: '/programs#awareness' },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={logo} 
                alt="Youth Hope Bangladesh" 
                className="h-12 w-12 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-xl font-bold text-white">Youth Hope Bangladesh</h3>
                <p className="text-sm text-gray-300">Building a better tomorrow</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering young minds and communities through education, environmental awareness, 
              and skill development programs across Bangladesh.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-primary" />
                <a 
                  href="mailto:youthhopebangladesh@gmail.com" 
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  youthhopebangladesh@gmail.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-primary" />
                <span className="text-gray-300">01886959350</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Facebook size={18} className="text-primary" />
                <a 
                  href="https://www.facebook.com/YouthHopeBD" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Follow us on Facebook
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-primary" />
                <a 
                  href="https://maps.app.goo.gl/RMYoVJh8Zv34SiY29" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  View Location
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Our Programs</h4>
            <ul className="space-y-2">
              {programs.map((program) => (
                <li key={program.name}>
                  <Link 
                    to={program.href} 
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-300 text-sm">
                © {new Date().getFullYear()} Youth Hope Bangladesh. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
