import { GraduationCap, Leaf, Briefcase, Megaphone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ProgramsSection = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: 'Education Support',
      description: 'Providing scholarships, tutoring, and educational resources to underprivileged students across Bangladesh.',
      features: ['Scholarship Programs', 'Free Tutoring', 'Learning Materials', 'Mentorship'],
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Leaf,
      title: 'Environmental Awareness',
      description: 'Leading tree plantation drives, clean-up campaigns, and environmental education programs.',
      features: ['Tree Plantation', 'Clean-up Drives', 'Eco Education', 'Green Initiatives'],
      color: 'text-accent-green',
      bgColor: 'bg-green-50',
    },
    {
      icon: Briefcase,
      title: 'Skill Development',
      description: 'Offering vocational training, digital literacy, and entrepreneurship programs for youth.',
      features: ['Vocational Training', 'Digital Skills', 'Entrepreneurship', 'Job Placement'],
      color: 'text-accent-orange',
      bgColor: 'bg-orange-50',
    },
    {
      icon: Megaphone,
      title: 'Awareness Campaigns',
      description: 'Conducting campaigns on health, education, women empowerment, and social issues.',
      features: ['Health Awareness', 'Social Issues', 'Women Empowerment', 'Community Outreach'],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-green to-accent-orange ml-3">
              Programs
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive programs designed to create meaningful impact in communities across Bangladesh.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md bg-gradient-card"
              >
                <CardHeader className="pb-4">
                  <div className={`${program.bgColor} rounded-2xl w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`h-8 w-8 ${program.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">{program.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{program.description}</p>
                  
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="ghost" size="sm" className="group/btn p-0 h-auto">
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary to-accent-orange rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Make a Difference?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our programs and be part of the change you want to see in Bangladesh.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 group"
            >
              Join Our Programs
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              View All Programs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;