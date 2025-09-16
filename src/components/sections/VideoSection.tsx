import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VideoSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            আমাদের
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-orange ml-3">
              গল্প দেখুন
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ইউথ হোপ বাংলাদেশের যাত্রা এবং আমাদের কমিউনিটিতে প্রভাব সম্পর্কে জানুন
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/cKwXmNDWJHM"
              title="Youth Hope Bangladesh Introduction"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent-orange/20 rounded-full blur-2xl"></div>
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="group bg-background border-2 border-primary text-primary hover:bg-primary hover:text-white"
            onClick={() => window.open('https://youtu.be/cKwXmNDWJHM', '_blank')}
          >
            <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            YouTube এ দেখুন
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;