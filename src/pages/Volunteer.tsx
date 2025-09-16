import { Heart, Users, Award, Globe, ArrowRight, CheckCircle, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Volunteer = () => {
  const benefits = [
    {
      icon: Heart,
      title: 'Social Impact',
      description: 'Make a real difference in communities across Bangladesh through meaningful projects.',
    },
    {
      icon: Award,
      title: 'Skill Development',
      description: 'Gain valuable experience in leadership, project management, and community engagement.',
    },
    {
      icon: Users,
      title: 'Network Building',
      description: 'Connect with like-minded individuals and build lasting professional relationships.',
    },
    {
      icon: Globe,
      title: 'Personal Growth',
      description: 'Experience personal satisfaction and growth through volunteer service.',
    },
  ];

  const testimonials = [
    {
      name: 'Fatima Rahman',
      role: 'Education Volunteer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      quote: 'Volunteering with Youth Hope Bangladesh has been life-changing. Teaching digital skills to rural students has not only helped them but also enriched my own understanding of community service.',
      rating: 5,
      location: 'Dhaka',
    },
    {
      name: 'Mohammad Karim',
      role: 'Environmental Advocate',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      quote: 'Being part of tree plantation drives and environmental campaigns has given me a sense of purpose. Together, we are creating a greener Bangladesh for future generations.',
      rating: 5,
      location: 'Chittagong',
    },
    {
      name: 'Rashida Begum',
      role: 'Community Coordinator',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      quote: 'Leading community projects has enhanced my leadership skills tremendously. The experience has been invaluable for my personal and professional development.',
      rating: 5,
      location: 'Sylhet',
    },
  ];

  const requirements = [
    'Age 16 or above',
    'Passion for social change',
    'Commitment to program completion',
    'Basic communication skills',
    'Willingness to learn and adapt',
    'Team collaboration mindset',
  ];

  const applicationProcess = [
    {
      step: 1,
      title: 'Submit Application',
      description: 'Fill out our online volunteer application form with your details and interests.',
    },
    {
      step: 2,
      title: 'Interview Process',
      description: 'Participate in a brief interview to discuss your motivations and available time.',
    },
    {
      step: 3,
      title: 'Orientation Session',
      description: 'Attend our orientation to learn about our programs and volunteer guidelines.',
    },
    {
      step: 4,
      title: 'Start Volunteering',
      description: 'Begin your volunteer journey and start making a positive impact!',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 bg-gradient-to-br from-primary/5 to-accent-green/5 overflow-hidden">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl md:text-3xl font-medium text-foreground mb-3 font-[Noto_Sans_Bengali]">
            স্বেচ্ছাসেবক হন
          </h1>
          
          <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto mb-8 font-[Noto_Sans_Bengali]">
            শিক্ষা, পরিবেশ সংরক্ষণ এবং কমিউনিটি উন্নয়নের মাধ্যমে একটি উন্নত বাংলাদেশ গড়তে আমাদের সাথে যোগ দিন
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="volunteer" 
              size="default" 
              className="group font-[Noto_Sans_Bengali]"
              onClick={() => {
                // Create embedded form container
                const formContainer = document.createElement('div');
                formContainer.innerHTML = `
                  <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 9999; display: flex; align-items: center; justify-content: center; padding: 20px;">
                    <div style="background: white; border-radius: 12px; width: 100%; max-width: 800px; height: 90vh; position: relative;">
                      <button onclick="this.parentElement.parentElement.remove()" style="position: absolute; top: 15px; right: 15px; background: #ef4444; color: white; border: none; border-radius: 50%; width: 30px; height: 30px; cursor: pointer; font-size: 18px; display: flex; align-items: center; justify-content: center;">×</button>
                      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdYourVolunteerFormId/viewform?embedded=true" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" style="border-radius: 12px;">Loading...</iframe>
                    </div>
                  </div>
                `;
                document.body.appendChild(formContainer);
              }}
            >
              আবেদন করুন
              <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Volunteer Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Volunteer With Us?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the incredible benefits of being part of our volunteer community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg text-center">
                  <CardHeader className="pb-4">
                    <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Volunteer Stories */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Volunteer
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-green to-primary ml-3">
                Stories
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from our amazing volunteers about their experiences and impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg relative overflow-hidden">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="h-12 w-12 text-primary" />
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover shadow-md"
                    />
                    <div>
                      <CardTitle className="text-lg font-bold text-foreground">{testimonial.name}</CardTitle>
                      <p className="text-sm text-primary font-semibold">{testimonial.role}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                  
                  {/* Star Rating */}
                  <div className="flex space-x-1 mt-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements & Process */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Requirements */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Volunteer Requirements
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                We welcome volunteers from all backgrounds. Here's what we look for:
              </p>
              
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-accent-green flex-shrink-0" />
                    <span className="text-muted-foreground">{requirement}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button 
                  variant="volunteer" 
                  size="lg" 
                  className="group"
                  onClick={() => window.open('https://forms.google.com/your-volunteer-form', '_blank')}
                >
                  Apply to Volunteer
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            {/* Application Process */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Application Process
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Getting started is easy! Follow these simple steps:
              </p>
              
              <div className="space-y-6">
                {applicationProcess.map((process, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-primary rounded-full w-10 h-10 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {process.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{process.title}</h3>
                      <p className="text-muted-foreground">{process.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Common questions about volunteering with Youth Hope Bangladesh.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'How much time commitment is required?',
                answer: 'We offer flexible volunteering opportunities ranging from 3-15 hours per week depending on the role and your availability.',
              },
              {
                question: 'Do I need any special qualifications?',
                answer: 'No special qualifications are required. We provide training and support based on your role. Enthusiasm and commitment are most important.',
              },
              {
                question: 'Will I receive a certificate?',
                answer: 'Yes, all volunteers who complete their commitment receive a certificate of participation and a recommendation letter if needed.',
              },
              {
                question: 'Can I volunteer remotely?',
                answer: 'Yes, we have both field-based and remote volunteering opportunities including social media management, content creation, and online tutoring.',
              },
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary via-accent-green to-accent-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Change Lives?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto">
            Your journey as a changemaker starts here. Join hundreds of volunteers who are already 
            making a difference across Bangladesh.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              variant="hero" 
              size="xl"
              className="bg-white text-primary hover:bg-white/90 group min-w-[300px] text-lg"
              onClick={() => window.open('https://forms.google.com/your-volunteer-form', '_blank')}
            >
              Apply as Volunteer
              <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline" 
              size="xl"
              className="border-white text-white hover:bg-white hover:text-primary min-w-[300px] text-lg border-2"
            >
              Contact Us First
            </Button>
          </div>
          
          <p className="text-white/80 mt-8">
            Have questions? Email us at <a href="mailto:youthhopebangladesh@gmail.com" className="underline">youthhopebangladesh@gmail.com</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;