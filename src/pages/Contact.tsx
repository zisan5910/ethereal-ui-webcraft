import { Mail, Phone, MapPin, Facebook, Send, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      primary: 'youthhopebangladesh@gmail.com',
      description: 'Send us your questions or feedback',
      action: 'mailto:youthhopebangladesh@gmail.com',
      color: 'text-primary',
    },
    {
      icon: Phone,
      title: 'Call or Mobile Payment',
      primary: '01886959350',
      description: 'Bkash/Nagad available for donations',
      action: 'tel:+8801886959350',
      color: 'text-accent-green',
    },
    {
      icon: Facebook,
      title: 'Follow Us',
      primary: 'YouthHopeBD',
      description: 'Stay updated with our latest activities',
      action: 'https://www.facebook.com/YouthHopeBD',
      color: 'text-blue-600',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      primary: 'View Location',
      description: 'Find us on the map',
      action: 'https://maps.app.goo.gl/RMYoVJh8Zv34SiY29',
      color: 'text-accent-orange',
    },
  ];

  const officeHours = [
    { day: 'Monday - Thursday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Friday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'By Appointment' },
  ];

  const faqs = [
    {
      question: 'How can I volunteer with Youth Hope Bangladesh?',
      answer: 'You can join us by filling out our volunteer application form. We have various opportunities based on your skills and availability.',
    },
    {
      question: 'What are the requirements to volunteer?',
      answer: 'We welcome volunteers from all backgrounds. The main requirements are enthusiasm, commitment, and a passion for social change.',
    },
    {
      question: 'How can I donate to your organization?',
      answer: 'You can donate through Bkash/Nagad to 01886959350, or contact us for other donation methods including bank transfers.',
    },
    {
      question: 'Do you provide volunteer certificates?',
      answer: 'Yes, we provide certificates of participation and recognition letters for volunteers who complete our programs.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent-orange/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Get In
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-orange ml-3">
                Touch
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We'd love to hear from you. Reach out to us for questions, partnerships, or to join our mission.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 shadow-md text-center">
                  <CardHeader className="pb-4">
                    <div className="bg-muted rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
                      <Icon className={`h-8 w-8 ${info.color}`} />
                    </div>
                    <CardTitle className="text-xl font-bold">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm">{info.description}</p>
                    <Button 
                      variant="outline" 
                      className="w-full group/btn"
                      onClick={() => window.open(info.action, '_blank')}
                    >
                      {info.primary}
                      <Send className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Hours */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-r from-primary/10 to-accent-orange/10 rounded-lg p-8 text-center">
                    <div className="mb-6">
                      <Send className="h-16 w-16 text-primary mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-foreground mb-2">Contact Form</h3>
                      <p className="text-muted-foreground">
                        Click the button below to open our contact form and send us your message.
                      </p>
                    </div>
                    
                    <Button 
                      variant="default" 
                      size="lg" 
                      className="group"
                      onClick={() => window.open('https://forms.google.com/your-contact-form', '_blank')}
                    >
                      Open Contact Form
                      <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                    
                    <p className="text-sm text-muted-foreground mt-4">
                      The form will open in a new tab for your convenience.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Office Hours & Quick Info */}
            <div className="space-y-8">
              {/* Office Hours */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/10 rounded-lg p-2">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold">Office Hours</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                      <span className="text-muted-foreground font-medium">{schedule.day}</span>
                      <span className="text-foreground font-semibold">{schedule.hours}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-accent-green/5 to-primary/5">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-accent-green/10 rounded-lg p-2">
                      <Users className="h-6 w-6 text-accent-green" />
                    </div>
                    <CardTitle className="text-xl font-bold">Response Time</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent-green mb-2">24 Hours</div>
                    <p className="text-muted-foreground text-sm">Average email response time</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">500+</div>
                    <p className="text-muted-foreground text-sm">Messages responded to monthly</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions about Youth Hope Bangladesh.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
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

      {/* Map & Location */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Find Us</h2>
            <p className="text-xl text-muted-foreground">
              Visit our office or find us at one of our community events.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-lg text-center">
            <MapPin className="h-16 w-16 text-accent-orange mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Location</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We operate across multiple locations in Bangladesh. Click below to view our main office location and 
              the areas where our programs are active.
            </p>
            
            <Button 
              variant="default" 
              size="lg"
              onClick={() => window.open('https://maps.app.goo.gl/RMYoVJh8Zv34SiY29', '_blank')}
            >
              View on Google Maps
              <MapPin className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Involved?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Don't wait! Contact us today and become part of the positive change happening across Bangladesh.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => window.open('https://forms.google.com/your-contact-form', '_blank')}
            >
              Contact Us Now
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => window.open('https://forms.google.com/your-volunteer-form', '_blank')}
            >
              Join as Volunteer
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;