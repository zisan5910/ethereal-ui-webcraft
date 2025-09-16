import { Users, Eye, Target, Heart, Award, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import logo from '@/assets/logo.jpg';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission Driven',
      description: 'Every action we take is guided by our commitment to creating positive change in communities.',
    },
    {
      icon: Heart,
      title: 'Compassionate',
      description: 'We approach every project with empathy, understanding, and genuine care for those we serve.',
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'We believe in the power of working together to achieve greater impact than any individual effort.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest standards in all our programs and maintain transparency in our work.',
    },
  ];

  const team = [
    {
      name: 'মো. মোমিন মোরশেদ',
      role: 'প্রতিষ্ঠাতা ও পরিচালক',
      description: 'যুব ক্ষমতায়ন এবং কমিউনিটি উন্নয়নে অনুপ্রেরণাদায়ক নেতা।',
    },
    {
      name: 'মো. রিদওয়ান মাহমুদ জিসান',
      role: 'ডেভেলপার ও আইটি সাপোর্ট',
      description: 'প্রযুক্তি বিশেষজ্ঞ যিনি নিশ্চিত করেন আমাদের ডিজিটাল উপস্থিতি কার্যকরভাবে আমাদের মিশন পরিবেশন করে।',
      link: 'https://ridoan-zisan.netlify.app'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent-orange/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              About
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-orange ml-3">
                Youth Hope Bangladesh
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn about our journey, mission, and the passionate people behind our movement.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Youth Hope Bangladesh was born from a simple but powerful belief: that young people have 
                  the potential to transform their communities and create a better future for all.
                </p>
                <p>
                  Founded with the vision of empowering youth across Bangladesh, we started as a small 
                  group of passionate individuals who saw the untapped potential in their peers and 
                  decided to create a platform for positive change.
                </p>
                <p>
                  Today, we have grown into a movement that spans multiple communities, touching thousands 
                  of lives through our education, environmental, and skill development programs. Our 
                  journey continues as we work towards a more inclusive and prosperous Bangladesh.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={logo} 
                alt="Youth Hope Bangladesh" 
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-primary text-white rounded-2xl p-4 shadow-lg">
                <Award className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-primary/5 to-primary/10">
              <CardHeader className="pb-6">
                <div className="bg-primary rounded-2xl w-16 h-16 flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To empower young people across Bangladesh through comprehensive education, 
                  environmental awareness, and skill development programs that create sustainable 
                  positive impact in their communities.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-accent-orange/5 to-accent-orange/10">
              <CardHeader className="pb-6">
                <div className="bg-accent-orange rounded-2xl w-16 h-16 flex items-center justify-center mb-4">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  A Bangladesh where every young person has the opportunity to reach their full 
                  potential and contribute meaningfully to building a prosperous, sustainable, 
                  and inclusive society.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and shape our approach to creating change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 shadow-md">
                  <CardHeader className="pb-4">
                    <div className="bg-accent-green/10 rounded-2xl w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-accent-green/20 transition-colors">
                      <Icon className="h-8 w-8 text-accent-green" />
                    </div>
                    <CardTitle className="text-xl font-bold">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-accent-green/5 to-accent-orange/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The dedicated individuals who make our mission possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-card">
                <CardHeader className="text-center pb-4">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-gradient-to-br from-primary to-accent-orange flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                    <Users className="h-16 w-16 text-white" />
                  </div>
                  {member.link ? (
                    <a 
                      href={member.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block hover:text-primary transition-colors"
                    >
                      <CardTitle className="text-2xl font-bold text-foreground hover:text-primary transition-colors">{member.name}</CardTitle>
                    </a>
                  ) : (
                    <CardTitle className="text-2xl font-bold text-foreground">{member.name}</CardTitle>
                  )}
                  <p className="text-primary font-semibold">{member.role}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Impact So Far</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Numbers that reflect our commitment to creating positive change.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-6xl font-bold mb-2">500+</div>
              <div className="text-white/80 text-lg">Active Volunteers</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold mb-2">50+</div>
              <div className="text-white/80 text-lg">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold mb-2">25+</div>
              <div className="text-white/80 text-lg">Communities Served</div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold mb-2">10K+</div>
              <div className="text-white/80 text-lg">Lives Impacted</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;