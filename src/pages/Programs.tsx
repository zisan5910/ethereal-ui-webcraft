import { GraduationCap, Leaf, Briefcase, Megaphone, ArrowRight, Calendar, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Programs = () => {
  const ongoingProjects = [
    {
      id: 1,
      title: 'Digital Literacy for Rural Youth',
      category: 'Education',
      description: 'Providing computer and internet skills training to young people in remote areas.',
      location: 'Sylhet Division',
      participants: 200,
      startDate: '2024-01-15',
      endDate: '2024-06-30',
      status: 'ongoing',
      progress: 75,
      icon: GraduationCap,
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop',
    },
    {
      id: 2,
      title: 'Clean Rivers Initiative',
      category: 'Environment',
      description: 'Community-led river cleanup and water conservation awareness program.',
      location: 'Multiple Districts',
      participants: 500,
      startDate: '2024-02-01',
      endDate: '2024-12-31',
      status: 'ongoing',
      progress: 60,
      icon: Leaf,
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=250&fit=crop',
    },
    {
      id: 3,
      title: 'Youth Entrepreneurship Hub',
      category: 'Skill Development',
      description: 'Supporting young entrepreneurs with training, mentorship, and funding guidance.',
      location: 'Dhaka & Chittagong',
      participants: 150,
      startDate: '2024-03-01',
      endDate: '2024-08-31',
      status: 'ongoing',
      progress: 45,
      icon: Briefcase,
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=250&fit=crop',
    },
  ];

  const completedProjects = [
    {
      title: 'Tree Plantation Campaign 2023',
      category: 'Environment',
      description: 'Successfully planted 5,000 trees across 10 districts.',
      participants: 800,
      completedDate: '2023-12-15',
      impact: '5,000 trees planted',
    },
    {
      title: 'Women Tech Training',
      category: 'Skill Development',
      description: 'Trained 300 women in basic computer skills and online freelancing.',
      participants: 300,
      completedDate: '2023-11-30',
      impact: '85% job placement rate',
    },
    {
      title: 'Health Awareness Campaign',
      category: 'Health',
      description: 'Conducted health checkups and awareness sessions in rural areas.',
      participants: 1200,
      completedDate: '2023-10-20',
      impact: '1,200 people reached',
    },
  ];

  const futurePlans = [
    {
      title: 'Green Energy Education',
      description: 'Solar power training and renewable energy awareness program.',
      launchDate: 'Q3 2024',
      expectedParticipants: 400,
    },
    {
      title: 'Youth Mental Health Initiative',
      description: 'Mental health support and counseling services for young people.',
      launchDate: 'Q4 2024',
      expectedParticipants: 600,
    },
    {
      title: 'Tech Innovation Challenge',
      description: 'Annual competition to solve local problems through technology.',
      launchDate: 'Q1 2025',
      expectedParticipants: 1000,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-green ml-3">
                Programs
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive initiatives designed to create lasting positive impact across Bangladesh.
            </p>
          </div>
        </div>
      </section>

      {/* Ongoing Projects */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ongoing Projects</h2>
            <p className="text-xl text-muted-foreground">
              Current initiatives making a difference in communities across Bangladesh.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {ongoingProjects.map((project) => {
              const Icon = project.icon;
              return (
                <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
                  <div className="relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 text-foreground">
                        {project.category}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-primary text-white rounded-lg p-2">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {project.location}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {project.participants} participants
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(project.startDate).toLocaleDateString()} - {new Date(project.endDate).toLocaleDateString()}
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-semibold text-primary">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <Button variant="ghost" className="w-full group/btn">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Completed Projects */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Completed Projects</h2>
            <p className="text-xl text-muted-foreground">
              Successful initiatives that have created lasting impact in our communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 shadow-md bg-card">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="border-accent-green text-accent-green">
                      {project.category}
                    </Badge>
                    <Badge variant="secondary" className="bg-green-50 text-green-700">
                      Completed
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">{project.title}</CardTitle>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardHeader>

                <CardContent className="space-y-3">
                  <div className="text-sm text-muted-foreground">
                    <div className="flex items-center mb-2">
                      <Users className="h-4 w-4 mr-2" />
                      {project.participants} participants
                    </div>
                    <div className="flex items-center mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      Completed: {new Date(project.completedDate).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <div className="bg-accent-green/10 rounded-lg p-3">
                    <p className="text-sm font-semibold text-accent-green">Impact: {project.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Future Plans */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Future Plans</h2>
            <p className="text-xl text-muted-foreground">
              Upcoming initiatives that will expand our impact and reach even more communities.
            </p>
          </div>

          <div className="space-y-8">
            {futurePlans.map((plan, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-gradient-card">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                    <div className="flex-1 mb-4 md:mb-0">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{plan.title}</h3>
                      <p className="text-muted-foreground mb-4">{plan.description}</p>
                      <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          Launch: {plan.launchDate}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2" />
                          Expected: {plan.expectedParticipants} participants
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-shrink-0">
                      <Badge variant="outline" className="border-accent-orange text-accent-orange bg-accent-orange/10">
                        Coming Soon
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Want to Be Part of Our Programs?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join us in creating positive change through our various programs and initiatives.
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
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;