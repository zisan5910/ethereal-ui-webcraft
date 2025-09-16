import { Heart, Shield, Users, TrendingUp, ArrowRight, CheckCircle, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Donate = () => {
  const impactStats = [
    {
      icon: Users,
      value: '10,000+',
      label: 'Lives Impacted',
      description: 'People directly benefited from our programs',
    },
    {
      icon: TrendingUp,
      value: '50+',
      label: 'Projects Completed',
      description: 'Successful community development initiatives',
    },
    {
      icon: Heart,
      value: '25+',
      label: 'Communities Served',
      description: 'Villages and districts reached across Bangladesh',
    },
    {
      icon: Shield,
      value: '100%',
      label: 'Transparency',
      description: 'All donations tracked and reported publicly',
    },
  ];

  const donationMethods = [
    {
      method: 'Bkash',
      number: '01886959350',
      icon: '💳',
      description: 'Send money directly via Bkash mobile banking',
      steps: ['Dial *247#', 'Select Send Money', 'Enter 01886959350', 'Enter amount', 'Confirm transaction'],
    },
    {
      method: 'Nagad',
      number: '01886959350',
      icon: '📱',
      description: 'Transfer funds through Nagad mobile financial service',
      steps: ['Dial *167#', 'Select Send Money', 'Enter 01886959350', 'Enter amount', 'Confirm with PIN'],
    },
    {
      method: 'Bank Transfer',
      number: 'Contact Us',
      icon: '🏦',
      description: 'Direct bank transfer for larger donations',
      steps: ['Contact us for bank details', 'Make transfer', 'Send receipt via email', 'Receive confirmation'],
    },
  ];

  const impactAreas = [
    {
      title: 'Education Support',
      description: 'Scholarships, school supplies, and digital literacy programs for underprivileged students.',
      impact: 'BDT 5,000 can provide education support for 1 student for 6 months',
      color: 'border-blue-200 bg-blue-50',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      title: 'Environmental Conservation',
      description: 'Tree plantation, clean water initiatives, and environmental awareness campaigns.',
      impact: 'BDT 2,000 can plant and maintain 50 trees for environmental conservation',
      color: 'border-green-200 bg-green-50',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
    },
    {
      title: 'Skill Development',
      description: 'Vocational training, entrepreneurship programs, and job placement assistance.',
      impact: 'BDT 3,000 can provide vocational training for 1 person for 3 months',
      color: 'border-orange-200 bg-orange-50',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
    },
    {
      title: 'Community Health',
      description: 'Health awareness campaigns, medical camps, and healthcare support programs.',
      impact: 'BDT 4,000 can organize health camp serving 100 community members',
      color: 'border-red-200 bg-red-50',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
    },
  ];

  const transparencyFeatures = [
    'Monthly financial reports published online',
    'Photo/video documentation of all projects',
    'Direct communication with beneficiaries',
    'Third-party audited accounts annually',
    'Real-time project updates via social media',
    'Donor appreciation and recognition programs',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent-orange/20 to-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-8">
              <Badge className="bg-accent-orange/10 text-accent-orange border-accent-orange/20 text-lg px-4 py-2">
                Your Donation Makes a Difference
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Support Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-orange to-primary ml-3">
                Mission
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12">
              Help us continue our work in education, environmental conservation, and community development 
              across Bangladesh. Every donation, no matter the size, creates lasting impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                variant="donate" 
                size="xl" 
                className="group min-w-[250px] text-lg shadow-lg hover:shadow-xl"
                onClick={() => {
                  // Create embedded form container
                  const formContainer = document.createElement('div');
                  formContainer.innerHTML = `
                    <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 9999; display: flex; align-items: center; justify-content: center; padding: 20px;">
                      <div style="background: white; border-radius: 12px; width: 100%; max-width: 800px; height: 90vh; position: relative;">
                        <button onclick="this.parentElement.parentElement.remove()" style="position: absolute; top: 15px; right: 15px; background: #ef4444; color: white; border: none; border-radius: 50%; width: 30px; height: 30px; cursor: pointer; font-size: 18px; display: flex; align-items: center; justify-content: center;">×</button>
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdYourDonationFormId/viewform?embedded=true" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" style="border-radius: 12px;">Loading...</iframe>
                      </div>
                    </div>
                  `;
                  document.body.appendChild(formContainer);
                }}
              >
                দান করুন
                <Heart className="ml-2 h-6 w-6 transition-transform group-hover:scale-110" />
              </Button>
              
              <Button 
                variant="outline" 
                size="xl" 
                className="group min-w-[250px] text-lg border-2"
              >
                Learn About Impact
                <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Impact</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how your donations are creating positive change across Bangladesh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg text-center">
                  <CardHeader className="pb-4">
                    <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-10 w-10 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                    <CardTitle className="text-xl font-bold">{stat.label}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">{stat.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Donation Methods */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              How to
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-orange to-primary ml-3">
                Donate
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose your preferred method to make a secure donation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {donationMethods.map((method, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="pb-6 text-center">
                  <div className="text-6xl mb-4">{method.icon}</div>
                  <CardTitle className="text-2xl font-bold text-foreground">{method.method}</CardTitle>
                  <div className="text-xl font-bold text-primary bg-primary/10 rounded-lg py-2 px-4 inline-block">
                    {method.number}
                  </div>
                  <p className="text-muted-foreground mt-2">{method.description}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <h4 className="font-semibold text-foreground">How to donate:</h4>
                  <ol className="space-y-2">
                    {method.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start text-sm text-muted-foreground">
                        <span className="bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">
                          {stepIndex + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>

                  <Button 
                    variant="outline" 
                    className="w-full group/btn mt-6"
                    onClick={() => window.open('https://forms.google.com/your-donation-form', '_blank')}
                  >
                    Donate via {method.method}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Where Your Money Goes</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your donations support these key areas of our work across Bangladesh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {impactAreas.map((area, index) => (
              <Card key={index} className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 ${area.color}`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`${area.iconBg} rounded-2xl w-16 h-16 flex items-center justify-center`}>
                      <DollarSign className={`h-8 w-8 ${area.iconColor}`} />
                    </div>
                    <CardTitle className="text-2xl font-bold text-foreground">{area.title}</CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                  
                  <div className="bg-white/50 rounded-lg p-4 border border-white/20">
                    <p className="text-sm font-semibold text-foreground">Impact Example:</p>
                    <p className="text-sm text-muted-foreground mt-1">{area.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent-green/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Complete
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-green ml-3">
                  Transparency
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                We believe in complete transparency about how your donations are used. 
                Every penny is tracked and accounted for.
              </p>
              
              <div className="space-y-4">
                {transparencyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-accent-green flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="border-0 shadow-xl bg-gradient-card">
              <CardHeader className="text-center pb-6">
                <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">Donation Transparency</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent-green mb-2">95%</div>
                  <p className="text-muted-foreground">Goes directly to programs</p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">5%</div>
                  <p className="text-muted-foreground">Administrative costs</p>
                </div>
                
                <div className="text-center bg-white/50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-foreground mb-2">Fund Allocation Guarantee</p>
                  <p className="text-xs text-muted-foreground">
                    We commit to spending at least 95% of all donations directly on program activities.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-accent-orange via-primary to-accent-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto">
            Your donation today will help us continue our mission of empowering communities 
            and creating positive change across Bangladesh.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              variant="hero" 
              size="xl"
              className="bg-white text-primary hover:bg-white/90 group min-w-[300px] text-lg"
              onClick={() => window.open('https://forms.google.com/your-donation-form', '_blank')}
            >
              Donate Now
              <Heart className="ml-2 h-6 w-6 transition-transform group-hover:scale-110" />
            </Button>
            
            <Button 
              variant="outline" 
              size="xl"
              className="border-white text-white hover:bg-white hover:text-primary min-w-[300px] text-lg border-2"
            >
              Contact for Large Donations
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <p className="text-white/80 text-sm">Bkash/Nagad</p>
              <p className="text-white font-bold text-lg">01886959350</p>
            </div>
            <div className="text-center">
              <p className="text-white/80 text-sm">Email</p>
              <p className="text-white font-bold text-lg">youthhopebangladesh@gmail.com</p>
            </div>
            <div className="text-center">
              <p className="text-white/80 text-sm">Tax Benefits</p>
              <p className="text-white font-bold text-lg">Receipts Provided</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;