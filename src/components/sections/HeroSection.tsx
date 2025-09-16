import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&h=1080&fit=crop&crop=center"
          alt="Youth volunteers working together"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-4 leading-tight font-[Noto_Sans_Bengali]">
            তরুণদের ক্ষমতায়ন,
            <span className="block text-white/95">
              আশার নির্মাণ
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-sm md:text-base text-white/80 mb-6 max-w-2xl mx-auto leading-relaxed font-[Noto_Sans_Bengali]">
            শিক্ষা, পরিবেশ সচেতনতা এবং যুব উন্নয়ন কর্মসূচির মাধ্যমে বাংলাদেশে ইতিবাচক পরিবর্তন আনতে আমাদের সাথে যোগ দিন
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button 
              variant="volunteer" 
              size="default" 
              className="group font-[Noto_Sans_Bengali]"
              onClick={() => navigate('/volunteer')}
            >
              স্বেচ্ছাসেবক হন
              <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="donate" 
              size="default" 
              className="group font-[Noto_Sans_Bengali]"
              onClick={() => navigate('/donate')}
            >
              দান করুন
              <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-5 h-8 border border-white/40 rounded-full flex justify-center">
            <div className="w-0.5 h-2 bg-white/60 rounded-full mt-1.5 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;