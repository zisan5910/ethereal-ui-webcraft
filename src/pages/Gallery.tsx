import { useState } from 'react';
import { Play, X, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'education', 'environment', 'community', 'events'];

  const photos = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
      category: 'education',
      title: 'Digital Literacy Workshop',
      date: '2024-03-10',
      location: 'Chittagong',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1574263867128-95bc9c01306a?w=800&h=600&fit=crop',
      category: 'environment',
      title: 'Tree Plantation Drive',
      date: '2024-03-15',
      location: 'Dhaka',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
      category: 'community',
      title: 'Health Awareness Campaign',
      date: '2024-03-05',
      location: 'Sylhet',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
      category: 'events',
      title: 'Youth Leadership Summit',
      date: '2024-02-28',
      location: 'Dhaka',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=600&fit=crop',
      category: 'education',
      title: 'Women Empowerment Workshop',
      date: '2024-02-20',
      location: 'Barisal',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
      category: 'environment',
      title: 'Clean Water Initiative',
      date: '2024-02-15',
      location: 'Rajshahi',
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop',
      category: 'community',
      title: 'Youth Entrepreneurship Fair',
      date: '2024-02-10',
      location: 'Khulna',
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
      category: 'events',
      title: 'Community Clean-up Drive',
      date: '2024-02-05',
      location: 'Chattogram',
    },
  ];

  const videos = [
    {
      id: 1,
      title: 'Youth Hope Bangladesh Introduction',
      embedId: 'cKwXmNDWJHM',
      thumbnail: 'https://img.youtube.com/vi/cKwXmNDWJHM/maxresdefault.jpg',
      description: 'Learn about our mission, vision, and impact across Bangladesh.',
    },
    {
      id: 2,
      title: 'Tree Plantation Success Story',
      embedId: 'cKwXmNDWJHM', // Using same video for demo
      thumbnail: 'https://images.unsplash.com/photo-1574263867128-95bc9c01306a?w=800&h=450&fit=crop',
      description: 'Witness the impact of our environmental conservation efforts.',
    },
    {
      id: 3,
      title: 'Digital Skills Training Program',
      embedId: 'cKwXmNDWJHM', // Using same video for demo
      thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=450&fit=crop',
      description: 'How we are bridging the digital divide through education.',
    },
  ];

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'education': return 'bg-blue-100 text-blue-700';
      case 'environment': return 'bg-green-100 text-green-700';
      case 'community': return 'bg-purple-100 text-purple-700';
      case 'events': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent-green/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Photo &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-green ml-3">
                Video Gallery
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our journey through images and videos that capture the impact we're making across Bangladesh.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Photo Gallery</h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="capitalize"
                >
                  {category === 'all' ? 'All Photos' : category}
                </Button>
              ))}
            </div>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPhotos.map((photo) => (
              <div 
                key={photo.id}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(photo.src)}
              >
                <img 
                  src={photo.src} 
                  alt={photo.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <Badge className={`${getCategoryColor(photo.category)} mb-2`}>
                      {photo.category}
                    </Badge>
                    <h3 className="text-white font-semibold text-sm mb-1">{photo.title}</h3>
                    <div className="flex items-center text-white/80 text-xs space-x-3">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(photo.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {photo.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Video Gallery</h2>
            <p className="text-xl text-muted-foreground">
              Watch our stories come to life through these inspiring videos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div 
                key={video.id}
                className="group bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                    <Button
                      variant="ghost"
                      size="lg"
                      className="bg-white/90 hover:bg-white text-primary rounded-full p-4"
                      onClick={() => window.open(`https://www.youtube.com/watch?v=${video.embedId}`, '_blank')}
                    >
                      <Play className="h-8 w-8" />
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Want to Be Featured in Our Gallery?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join our programs and events to become part of the positive change we're creating across Bangladesh.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90"
            >
              Join Our Next Event
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Follow Us on Facebook
            </Button>
          </div>
        </div>
      </section>

      {/* Image Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            <img 
              src={selectedImage} 
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;