import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Users, Calendar, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.jpg';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'হোম', href: '/', icon: Heart },
    { name: 'আমাদের সম্পর্কে', href: '/about', icon: Users },
    { name: 'কার্যক্রম', href: '/programs', icon: Calendar },
    { name: 'যোগদান', href: '/get-involved', icon: Users },
    { name: 'ইভেন্ট', href: '/events', icon: Calendar },
    { name: 'গ্যালারি', href: '/gallery', icon: Calendar },
    { name: 'যোগাযোগ', href: '/contact', icon: Phone },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src={logo} 
              alt="Youth Hope Bangladesh" 
              className="h-8 w-8 rounded-md object-cover"
            />
            <div className="hidden sm:block">
              <span className="text-base font-medium text-primary font-[Noto_Sans_Bengali]">যুব হোপ</span>
              <span className="text-sm text-muted-foreground ml-1">বাংলাদেশ</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-primary font-[Noto_Sans_Bengali] ${
                  isActive(item.href) 
                    ? 'text-primary' 
                    : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="volunteer" size="sm" asChild className="font-[Noto_Sans_Bengali]">
              <Link to="/volunteer">স্বেচ্ছাসেবক</Link>
            </Button>
            <Button variant="donate" size="sm" asChild className="font-[Noto_Sans_Bengali]">
              <Link to="/donate">দান</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 font-[Noto_Sans_Bengali] ${
                    isActive(item.href)
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon size={16} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
            
            {/* Mobile CTA Buttons */}
            <div className="pt-3 space-y-2">
              <Button variant="volunteer" size="default" className="w-full font-[Noto_Sans_Bengali]" asChild>
                <Link to="/volunteer" onClick={() => setIsOpen(false)}>
                  স্বেচ্ছাসেবক হন
                </Link>
              </Button>
              <Button variant="donate" size="default" className="w-full font-[Noto_Sans_Bengali]" asChild>
                <Link to="/donate" onClick={() => setIsOpen(false)}>
                  দান করুন
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;