import { Calendar, MapPin, Clock, Users, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Youth Leadership Summit 2024',
      description: 'A comprehensive leadership development program for young changemakers across Bangladesh.',
      date: '2024-04-20',
      time: '9:00 AM - 5:00 PM',
      location: 'Dhaka Convention Center',
      type: 'Conference',
      capacity: 500,
      registered: 350,
      fee: 'Free',
      highlights: ['Keynote Speakers', 'Networking Sessions', 'Workshop Tracks', 'Certificate'],
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop',
    },
    {
      id: 2,
      title: 'Clean Water Initiative Launch',
      description: 'Community-driven project to provide clean water access in rural areas.',
      date: '2024-04-25',
      time: '10:00 AM - 3:00 PM',
      location: 'Rajshahi District',
      type: 'Community Project',
      capacity: 200,
      registered: 150,
      fee: 'Free',
      highlights: ['Community Engagement', 'Technical Training', 'Implementation Planning'],
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=250&fit=crop',
    },
    {
      id: 3,
      title: 'Women Empowerment Workshop',
      description: 'Skills development and entrepreneurship training for women in rural communities.',
      date: '2024-05-01',
      time: '11:00 AM - 4:00 PM',
      location: 'Barisal Community Center',
      type: 'Workshop',
      capacity: 100,
      registered: 75,
      fee: 'Free',
      highlights: ['Skill Training', 'Business Planning', 'Microfinance Guidance', 'Mentorship'],
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&h=250&fit=crop',
    },
    {
      id: 4,
      title: 'Digital Skills Training Program',
      description: 'Computer literacy and digital skills training for underprivileged youth.',
      date: '2024-05-15',
      time: '2:00 PM - 6:00 PM',
      location: 'Chittagong IT Center',
      type: 'Training',
      capacity: 80,
      registered: 60,
      fee: 'Free',
      highlights: ['Basic Computing', 'Internet Skills', 'Online Safety', 'Job Preparation'],
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop',
    },
  ];

  const pastEvents = [
    {
      title: 'Tree Plantation Drive',
      date: '2024-03-15',
      location: 'Dhaka',
      participants: 200,
      impact: '1,000 trees planted',
      category: 'Environment',
    },
    {
      title: 'Digital Literacy Workshop',
      date: '2024-03-10',
      location: 'Chittagong',
      participants: 150,
      impact: '150 people trained',
      category: 'Education',
    },
    {
      title: 'Health Awareness Campaign',
      date: '2024-03-05',
      location: 'Sylhet',
      participants: 300,
      impact: '300 people reached',
      category: 'Health',
    },
    {
      title: 'Youth Entrepreneurship Fair',
      date: '2024-02-28',
      location: 'Rajshahi',
      participants: 250,
      impact: '50 business ideas presented',
      category: 'Skill Development',
    },
    {
      title: 'Community Clean-up Drive',
      date: '2024-02-20',
      location: 'Barisal',
      participants: 180,
      impact: '5 tons of waste collected',
      category: 'Environment',
    },
    {
      title: 'Women Leadership Conference',
      date: '2024-02-15',
      location: 'Khulna',
      participants: 120,
      impact: '120 women empowered',
      category: 'Empowerment',
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'conference': return 'bg-primary/10 text-primary';
      case 'workshop': return 'bg-accent-orange/10 text-accent-orange';
      case 'training': return 'bg-accent-green/10 text-accent-green';
      case 'community project': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'environment': return 'bg-green-100 text-green-700';
      case 'education': return 'bg-blue-100 text-blue-700';
      case 'health': return 'bg-red-100 text-red-700';
      case 'skill development': return 'bg-orange-100 text-orange-700';
      case 'empowerment': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent-orange/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Events &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-orange ml-3">
                News
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with our latest events, workshops, and community activities that are making a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Upcoming Events</h2>
            <p className="text-xl text-muted-foreground">
              Join us in our upcoming events and be part of the positive change.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={getTypeColor(event.type)}>
                      {event.type}
                    </Badge>
                  </div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 text-center min-w-[60px]">
                    <div className="text-xs font-semibold text-primary">
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'short' }).toUpperCase()}
                    </div>
                    <div className="text-lg font-bold text-foreground">
                      {new Date(event.date).getDate()}
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {event.title}
                  </CardTitle>
                  <p className="text-muted-foreground">{event.description}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      {event.registered}/{event.capacity}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Event Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {event.highlights.map((highlight, index) => (
                        <span 
                          key={index}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div>
                      <span className="text-sm text-muted-foreground">Registration: </span>
                      <span className="font-semibold text-accent-green">{event.fee}</span>
                    </div>
                    
                    <Button 
                      variant="default" 
                      className="group/btn"
                      onClick={() => window.open('https://forms.google.com/your-event-registration-form', '_blank')}
                    >
                      Register Now
                      <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:scale-110" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Past Events</h2>
            <p className="text-xl text-muted-foreground">
              Look back at the successful events and their impact on our communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 shadow-md bg-card">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getCategoryColor(event.category)}>
                      {event.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {new Date(event.date).toLocaleDateString()}
                    </span>
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground">{event.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-3">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                  
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    {event.participants} participants
                  </div>
                  
                  <div className="bg-accent-green/10 rounded-lg p-3">
                    <p className="text-sm font-semibold text-accent-green">
                      Impact: {event.impact}
                    </p>
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
            Don't Miss Out on Our Next Event!
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Stay connected with us to get notified about upcoming events and opportunities to make a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 group"
              onClick={() => window.open('https://forms.google.com/your-event-notification-form', '_blank')}
            >
              Get Event Updates
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              View All Events
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;