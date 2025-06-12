
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Phone, MapPin } from 'lucide-react';

interface HeroProps {
  language: 'en' | 'bn';
  content: {
    [key: string]: {
      name: string;
      role: string;
      statement?: string;
      downloadCV?: string;
    };
  };
  scrollToSection: (section: string) => void;
}

const Hero = ({ language, content, scrollToSection }: HeroProps) => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Resume.pdf';
    link.download = 'Md Ridoan Mahmud Zisan.pdf';
    link.click();
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6"
            >
              {content[language].name}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-700 mb-8"
            >
              {content[language].role}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin size={18} className="text-blue-500" />
                <span>Bogura, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Mail size={18} className="text-green-500" />
                <span>ridoan.zisan@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Phone size={18} className="text-purple-500" />
                <span>+8801712525910</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={handleDownloadResume}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 flex items-center gap-2"
              >
                <Download size={20} />
                {language === 'en' ? 'Download Resume' : 'জীবনবৃত্তান্ত ডাউনলোড'}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                {language === 'en' ? 'Contact Me' : 'যোগাযোগ করুন'}
              </button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  boxShadow: [
                    '0 0 20px rgba(59, 130, 246, 0.3)',
                    '0 0 30px rgba(147, 51, 234, 0.3)',
                    '0 0 20px rgba(236, 72, 153, 0.3)',
                    '0 0 30px rgba(59, 130, 246, 0.3)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl"
              >
                <img
                  src="/profile.jpg"
                  alt={content[language].name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection('education')}
            className="text-gray-600 hover:text-purple-600 transition-colors"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown size={24} />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
