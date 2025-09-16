import { Users, Heart, Handshake, Gift, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const GetInvolved = () => {
  const benefits = [
    {
      icon: Heart,
      title: 'Make Real Impact',
      description: 'Directly contribute to positive changes in communities across Bangladesh.',
    },
    {
      icon: Users,
      title: 'Build Networks',
      description: 'Connect with like-minded individuals who share your passion for social change.',
    },
    {
      icon: CheckCircle,
      title: 'Develop Skills',
      description: 'Gain valuable experience in project management, leadership, and community work.',
    },
    {
      icon: Gift,
      title: 'Personal Growth',
      description: 'Experience personal satisfaction and growth through meaningful volunteer work.',
    },
  ];

  const volunteerOpportunities = [
    {
      title: 'Field Coordinator',
      commitment: '10-15 hours/week',
      description: 'Lead projects in local communities and coordinate with team members.',
      skills: ['Leadership', 'Communication', 'Project Management'],
    },
    {
      title: 'Education Volunteer',
      commitment: '5-8 hours/week',
      description: 'Teach digital skills, English, or other subjects to underprivileged students.',
      skills: ['Teaching', 'Patience', 'Subject Knowledge'],
    },
    {
      title: 'Environmental Advocate',
      commitment: '6-10 hours/week',
      description: 'Participate in tree plantation, cleanup drives, and environmental awareness campaigns.',
      skills: ['Environmental Awareness', 'Community Engagement'],
    },
    {
      title: 'Social Media Manager',
      commitment: '3-5 hours/week',
      description: 'Help spread our message through social media and digital content creation.',
      skills: ['Social Media', 'Content Creation', 'Design'],
    },
  ];

  const partnershipLevels = [
    {
      title: 'Community Partner',
      description: 'Local businesses and organizations supporting specific projects.',
      benefits: ['Local recognition', 'CSR fulfillment', 'Community impact'],
      minCommitment: 'BDT 10,000/year',
    },
    {
      title: 'Strategic Partner',
      description: 'Medium to large organizations with ongoing collaboration.',
      benefits: ['Brand visibility', 'Employee engagement', 'Joint initiatives'],
      minCommitment: 'BDT 50,000/year',
    },
    {
      title: 'Impact Partner',
      description: 'Major corporations driving large-scale social change.',
      benefits: ['National recognition', 'Leadership positions', 'Custom programs'],
      minCommitment: 'BDT 200,000/year',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent-orange/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Get
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-orange ml-3">
                Involved
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Join our mission to create positive change across Bangladesh. Whether as a volunteer 
              or partner, your contribution makes a difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="volunteer" 
                size="lg" 
                className="group"
                onClick={() => window.open('https://forms.google.com/your-volunteer-form', '_blank')}
              >
                Become a Volunteer
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="group"
                onClick={() => window.open('https://forms.google.com/your-partnership-form', '_blank')}
              >
                Partner with Us
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Why Join Us?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the benefits of being part of the Youth Hope Bangladesh community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 shadow-md text-center">
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

      {/* Volunteer Opportunities */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Volunteer
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-green to-primary ml-3">
                Opportunities
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find the perfect volunteer role that matches your skills and availability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {volunteerOpportunities.map((opportunity, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 shadow-md">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl font-bold text-foreground">{opportunity.title}</CardTitle>
                    <span className="text-sm text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full">
                      {opportunity.commitment}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{opportunity.description}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Required Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {opportunity.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="text-xs bg-accent-green/10 text-accent-green px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full group/btn"
                    onClick={() => window.open('https://forms.google.com/your-volunteer-form', '_blank')}
                  >
                    Apply for This Role
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
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
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Partnership
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-orange to-primary ml-3">
                Opportunities
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join hands with us to amplify your social impact and reach more communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipLevels.map((level, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg relative overflow-hidden">
                {index === 1 && (
                  <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                    Popular
                  </div>
                )}
                
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl font-bold text-foreground text-center">{level.title}</CardTitle>
                  <p className="text-muted-foreground text-center">{level.description}</p>
                  <div className="text-center mt-4">
                    <span className="text-2xl font-bold text-primary">{level.minCommitment}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Benefits Include:</h4>
                    <ul className="space-y-2">
                      {level.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-accent-green mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    variant={index === 1 ? "default" : "outline"} 
                    className="w-full group/btn"
                    onClick={() => window.open('https://forms.google.com/your-partnership-form', '_blank')}
                  >
                    Become Partner
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Your involvement, whether as a volunteer or partner, directly contributes to building 
            a better Bangladesh. Join us today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="xl"
              className="bg-white text-primary hover:bg-white/90 group min-w-[250px]"
              onClick={() => window.open('https://forms.google.com/your-getinvolved-form', '_blank')}
            >
              Get Started Today
              <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline" 
              size="xl"
              className="border-white text-white hover:bg-white hover:text-primary min-w-[250px]"
            >
              Contact Us First
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;