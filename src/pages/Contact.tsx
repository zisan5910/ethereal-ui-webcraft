import { Mail, Phone, MapPin, Facebook, Send, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'ইমেইল',
      primary: 'youthhopebangladesh@gmail.com',
      description: 'প্রশ্ন বা মতামত পাঠান',
      action: 'mailto:youthhopebangladesh@gmail.com',
      color: 'text-primary',
    },
    {
      icon: Phone,
      title: 'ফোন/পেমেন্ট',
      primary: '01886959350',
      description: 'বিকাশ/নগদে দান করুন',
      action: 'tel:+8801886959350',
      color: 'text-accent-green',
    },
    {
      icon: Facebook,
      title: 'ফেসবুক',
      primary: 'YouthHopeBD',
      description: 'আমাদের কার্যক্রম দেখুন',
      action: 'https://www.facebook.com/YouthHopeBD',
      color: 'text-blue-600',
    },
    {
      icon: MapPin,
      title: 'ঠিকানা',
      primary: 'ম্যাপ দেখুন',
      description: 'আমাদের অবস্থান',
      action: 'https://maps.app.goo.gl/RMYoVJh8Zv34SiY29',
      color: 'text-accent-orange',
    },
  ];

  const officeHours = [
    { day: 'সোমবার - বৃহস্পতিবার', hours: 'সকাল ৯টা - বিকাল ৬টা' },
    { day: 'শুক্রবার', hours: 'সকাল ৯টা - বিকাল ৫টা' },
    { day: 'শনিবার', hours: 'সকাল ১০টা - বিকাল ৪টা' },
    { day: 'রবিবার', hours: 'পূর্ব নিয়োগে' },
  ];

  const faqs = [
    {
      question: 'যুব হোপ বাংলাদেশে স্বেচ্ছাসেবক কিভাবে হব?',
      answer: 'আমাদের স্বেচ্ছাসেবক আবেদন ফর্ম পূরণ করুন। দক্ষতা ও সময়ের ভিত্তিতে বিভিন্ন সুযোগ রয়েছে।',
    },
    {
      question: 'স্বেচ্ছাসেবক হতে কী যোগ্যতা লাগে?',
      answer: 'সব ধরনের মানুষকে স্বাগতম। মূল প্রয়োজন উৎসাহ, প্রতিশ্রুতি এবং সামাজিক পরিবর্তনের আগ্রহ।',
    },
    {
      question: 'কিভাবে দান করব?',
      answer: '০১৮৮৬৯৫৯৩৫০ নম্বরে বিকাশ/নগদে দান করুন অথবা অন্যান্য পদ্ধতির জন্য যোগাযোগ করুন।',
    },
    {
      question: 'স্বেচ্ছাসেবক সনদ পাব?',
      answer: 'হ্যাঁ, কর্মসূচি সম্পন্নকারী সবাই অংশগ্রহণ সনদ ও সুপারিশপত্র পাবেন।',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-primary/5 to-accent-orange/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-medium text-foreground mb-3 font-[Noto_Sans_Bengali]">
              যোগাযোগ
            </h1>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto font-[Noto_Sans_Bengali]">
              প্রশ্ন, অংশীদারিত্ব, বা আমাদের মিশনে যোগদানের জন্য আমাদের সাথে যোগাযোগ করুন
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="group hover:shadow-md transition-all duration-300 border text-center">
                  <CardHeader className="pb-3">
                    <div className="bg-muted rounded-lg w-12 h-12 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/10 transition-colors">
                      <Icon className={`h-6 w-6 ${info.color}`} />
                    </div>
                    <CardTitle className="text-base font-medium font-[Noto_Sans_Bengali]">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-muted-foreground text-xs font-[Noto_Sans_Bengali]">{info.description}</p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full text-xs font-[Noto_Sans_Bengali]"
                      onClick={() => window.open(info.action, '_blank')}
                    >
                      {info.primary}
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
              <h3 className="text-2xl font-bold text-foreground mb-2">যোগাযোগ ফর্ম</h3>
              <p className="text-muted-foreground">
                আমাদের সাথে যোগাযোগ করতে নিচের ফর্মটি পূরণ করুন।
              </p>
            </div>
            
            {/* Embedded Form */}
            <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSdYourFormId/viewform?embedded=true"
                width="100%" 
                height="100%"
                frameBorder="0" 
                marginHeight={0}
                marginWidth={0}
                className="w-full h-full"
                title="Contact Form"
              >
                Loading...
              </iframe>
            </div>
            
            <p className="text-sm text-muted-foreground mt-4">
              ফর্ম লোড না হলে <a href="https://forms.google.com/your-contact-form" target="_blank" rel="noopener noreferrer" className="text-primary underline">এখানে ক্লিক করুন</a>।
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

          <div className="bg-card rounded-2xl p-8 shadow-lg">
            <MapPin className="h-16 w-16 text-accent-orange mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-foreground mb-4">আমাদের অবস্থান</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              বগুড়া, বাংলাদেশে আমাদের প্রধান কার্যালয় অবস্থিত। নিচের মানচিত্রে আমাদের অবস্থান দেখুন।
            </p>
            
            {/* Google Maps Embed */}
            <div className="w-full rounded-lg overflow-hidden shadow-lg mb-6">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115860.77945582692!2d89.287835854917!3d24.841662159966887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc54e7e81df441%3A0x27133ed921fe73f4!2sBogura!5e0!3m2!1sen!2sbd!4v1758002201402!5m2!1sen!2sbd" 
                width="100%" 
                height="400" 
                style={{border:0}} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Youth Hope Bangladesh Location"
              />
            </div>
            
            <Button 
              variant="default" 
              size="lg"
              onClick={() => window.open('https://maps.app.goo.gl/RMYoVJh8Zv34SiY29', '_blank')}
            >
              গুগল ম্যাপে দেখুন
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