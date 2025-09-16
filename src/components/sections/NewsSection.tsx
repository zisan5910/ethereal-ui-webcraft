import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: 'Tree Plantation Drive in Dhaka',
      excerpt: 'Successfully planted 1,000 trees across various locations in Dhaka with 200+ volunteers.',
      date: '2024-03-15',
      location: 'Dhaka',
      participants: 200,
      category: 'Environment',
      image: 'https://images.unsplash.com/photo-1574263867128-95bc9c01306a?w=400&h=250&fit=crop',
    },
    {
      id: 2,
      title: 'Digital Literacy Workshop',
      excerpt: 'Conducted a comprehensive digital skills training program for 150 underprivileged youth.',
      date: '2024-03-10',
      location: 'Chittagong',
      participants: 150,
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop',
    },
    {
      id: 3,
      title: 'Community Health Awareness',
      excerpt: 'Organized health checkup camps and awareness sessions in rural communities.',
      date: '2024-03-05',
      location: 'Sylhet',
      participants: 300,
      category: 'Health',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop',
    },
  ];

  const upcomingEvents = [
    {
      title: 'Youth Leadership Summit',
      date: '2024-04-20',
      location: 'Dhaka',
      type: 'Conference',
    },
    {
      title: 'Clean Water Initiative',
      date: '2024-04-25',
      location: 'Rajshahi',
      type: 'Community Project',
    },
    {
      title: 'Women Empowerment Workshop',
      date: '2024-05-01',
      location: 'Barisal',
      type: 'Workshop',
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Latest
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-orange ml-3">
              News & Events
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with our recent activities and upcoming events that are making a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activities */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-foreground mb-8">Recent Activities</h3>
            
            <div className="space-y-6">
              {news.map((item) => (
                <Card key={item.id} className="group hover:shadow-lg transition-all duration-300 bg-card border-0 shadow-sm">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-48 md:h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                      />
                    </div>
                    
                    <div className="md:w-2/3">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                            {item.category}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {new Date(item.date).toLocaleDateString()}
                          </span>
                        </div>
                        <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </h4>
                      </CardHeader>
                      
                      <CardContent className="pt-0">
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {item.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {item.location}
                            </div>
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              {item.participants}+ participants
                            </div>
                          </div>
                          
                          <Button variant="ghost" size="sm" className="group/btn">
                            Read More
                            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button variant="outline" size="lg">
                View All Activities
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Upcoming Events Sidebar */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Upcoming Events</h3>
            
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="p-4 bg-card border-0 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary rounded-lg p-2 flex-shrink-0">
                      <Calendar className="h-4 w-4 text-white" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground text-sm leading-tight mb-1">
                        {event.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mb-2">
                        {new Date(event.date).toLocaleDateString()} • {event.location}
                      </p>
                      <span className="text-xs font-medium text-accent-orange bg-accent-orange/10 px-2 py-1 rounded-full">
                        {event.type}
                      </span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="mt-6">
              <Button 
                variant="cta" 
                size="lg" 
                className="w-full"
                onClick={() => window.open('https://forms.google.com/your-event-registration-form', '_blank')}
              >
                Register for Events
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;