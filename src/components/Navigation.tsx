import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { cn } from '../lib/utils';

interface NavigationProps {
  navigationItems: Array<{
    id: string;
    icon: JSX.Element;
    target?: string;
  }>;
  activeSection: string;
  scrollToSection: (section: string) => void;
  language: 'en' | 'bn';
  setLanguage: (lang: 'en' | 'bn') => void;
}

const Navigation = ({
  navigationItems,
  activeSection,
  scrollToSection,
  language,
  setLanguage,
}: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0,
    initialInView: true,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // আইকন কালার ম্যাপিং
  const getIconColor = (id: string) => {
    switch (id.toLowerCase()) {
      case 'profile':
        return 'text-indigo-600';
      case 'education':
        return 'text-blue-600';
      case 'courses':
        return 'text-emerald-600';
      case 'experience':
        return 'text-amber-600';
      case 'certificates':
        return 'text-red-600';
      case 'skills':
        return 'text-purple-600';
      case 'family':
        return 'text-pink-600';
      case 'contact':
        return 'text-cyan-600';
      case 'share':
        return 'text-teal-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <motion.nav
      ref={ref}
      initial={{ y: -100 }}
      animate={{
        y: 0,
        backgroundColor: isScrolled
          ? 'rgba(255, 255, 255, 0.85)'
          : 'rgba(255, 255, 255, 0.95)',
        borderBottom: isScrolled 
          ? '1px solid rgba(0, 0, 0, 0.08)'
          : '1px solid rgba(0, 0, 0, 0.05)',
      }}
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        isScrolled ? 'backdrop-blur-lg' : 'backdrop-blur-md'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMenuOpen ? 'close' : 'menu'}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(243, 244, 246, 0.7)'
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection(item.target || item.id)}
                className={cn(
                  'flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300',
                  activeSection === (item.target || item.id)
                    ? 'bg-gray-100 text-gray-900 shadow-sm'
                    : 'text-gray-700 hover:text-gray-900'
                )}
              >
                <motion.div
                  animate={{
                    rotate: activeSection === (item.target || item.id) ? 360 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  className={`w-5 h-5 ${getIconColor(item.id)}`}
                >
                  {item.icon}
                </motion.div>
                <span className="font-medium text-sm">
                  {item.id.charAt(0).toUpperCase() + item.id.slice(1)}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Language Toggle Button */}
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 4px 14px rgba(99, 102, 241, 0.3)'
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
            className={cn(
              'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300',
              'bg-gradient-to-r from-indigo-500 to-purple-500 text-white',
              'hover:from-indigo-400 hover:to-purple-400',
              'focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-white'
            )}
          >
            {language === 'en' ? 'বাংলা' : 'English'}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: 1, 
                height: 'auto',
                backdropFilter: 'blur(20px)'
              }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden bg-white bg-opacity-90 backdrop-blur-xl border-t border-gray-100 mt-1"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigationItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      scrollToSection(item.target || item.id);
                      setIsMenuOpen(false);
                    }}
                    className={cn(
                      'w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300',
                      activeSection === (item.target || item.id)
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                    )}
                  >
                    <motion.div
                      animate={{
                        rotate: activeSection === (item.target || item.id) ? 360 : 0,
                      }}
                      transition={{ duration: 0.5 }}
                      className={`w-6 h-6 ${getIconColor(item.id)}`}
                    >
                      {item.icon}
                    </motion.div>
                    <span className="font-medium text-sm">
                      {item.id.charAt(0).toUpperCase() + item.id.slice(1)}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
