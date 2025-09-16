import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Users, Handshake } from 'lucide-react';

const CTASection = () => {
  const actions = [
    {
      icon: Users,
      title: 'Become a Volunteer',
      description: 'Join our community of passionate volunteers and make a direct impact in your community.',
      buttonText: 'Join as Volunteer',
      buttonVariant: 'volunteer' as const,
      href: 'https://forms.google.com/your-volunteer-form',
    },
    {
      icon: Handshake,
      title: 'Partner with Us',
      description: 'Collaborate with us to amplify your impact and reach more communities together.',
      buttonText: 'Become Partner',
      buttonVariant: 'default' as const,
      href: 'https://forms.google.com/your-partnership-form',
    },
    {
      icon: Heart,
      title: 'Support Our Mission',
      description: 'Your donation helps us continue our work and expand our reach to more communities.',
      buttonText: 'Donate Now',
      buttonVariant: 'donate' as const,
      href: 'https://forms.google.com/your-donation-form',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent-orange/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Ready to Create
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-orange ml-3">
              Change?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Join thousands of young changemakers who are already transforming communities across Bangladesh. 
            Your journey to make a difference starts here.
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <div 
                key={index}
                className="group bg-card rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border/50"
              >
                <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-10 w-10 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">{action.title}</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">{action.description}</p>
                
                <Button 
                  variant={action.buttonVariant}
                  size="lg"
                  className="group/btn min-w-[200px]"
                  onClick={() => window.open(action.href, '_blank')}
                >
                  {action.buttonText}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="relative bg-gradient-to-r from-primary via-accent-orange to-accent-green rounded-3xl p-8 md:p-12 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20"></div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Together, We Build a Better Bangladesh
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Every small action creates ripples of change. Be part of something bigger than yourself.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="xl"
                className="bg-white text-primary hover:bg-white/90 group min-w-[250px]"
                onClick={() => window.open('https://forms.google.com/your-getinvolved-form', '_blank')}
              >
                Get Involved Today
                <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="xl"
                className="border-white text-white hover:bg-white hover:text-primary min-w-[250px]"
              >
                Learn About Our Impact
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Have questions? We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8">
            <a 
              href="mailto:youthhopebangladesh@gmail.com" 
              className="text-primary hover:text-primary-dark transition-colors font-medium"
            >
              youthhopebangladesh@gmail.com
            </a>
            <a 
              href="tel:+8801886959350" 
              className="text-primary hover:text-primary-dark transition-colors font-medium"
            >
              01886959350 (Bkash/Nagad)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;