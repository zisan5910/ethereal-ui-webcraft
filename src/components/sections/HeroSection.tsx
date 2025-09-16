import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import ImageCarousel from './ImageCarousel';

const HeroSection = () => {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel */}
      <ImageCarousel />

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            তরুণদের ক্ষমতায়ন,
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              আশার নির্মাণ
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            শিক্ষা, পরিবেশ সচেতনতা এবং যুব উন্নয়ন কর্মসূচির মাধ্যমে সমগ্র বাংলাদেশে ইতিবাচক পরিবর্তন আনতে আমাদের সাথে যোগ দিন।
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="xl" 
              className="group min-w-[200px]"
              onClick={() => window.open('https://forms.google.com/your-volunteer-form', '_blank')}
            >
              স্বেচ্ছাসেবক হিসেবে যোগদান
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="donate" 
              size="xl" 
              className="group min-w-[200px]"
              onClick={() => window.open('https://forms.google.com/your-donation-form', '_blank')}
            >
              এখনই দান করুন
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;