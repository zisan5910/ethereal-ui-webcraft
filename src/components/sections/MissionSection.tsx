import { Eye, Target, Heart, Users } from 'lucide-react';

const MissionSection = () => {
  const items = [
    {
      icon: Target,
      title: 'আমাদের লক্ষ্য',
      description: 'শিক্ষা, দক্ষতা উন্নয়ন এবং সমাজ উন্নয়ন কর্মসূচির মাধ্যমে বাংলাদেশের তরুণদের ক্ষমতায়ন করা যা স্থায়ী ইতিবাচক প্রভাব সৃষ্টি করে।',
    },
    {
      icon: Eye,
      title: 'আমাদের স্বপ্ন',
      description: 'এমন একটি বাংলাদেশ যেখানে প্রতিটি তরুণের তাদের পূর্ণ সম্ভাবনায় পৌঁছানোর এবং তাদের সমাজে অর্থবহ অবদান রাখার সুযোগ রয়েছে।',
    },
    {
      icon: Heart,
      title: 'আমাদের মূল্যবোধ',
      description: 'সততা, অন্তর্ভুক্তি, উদ্ভাবন এবং প্রভাব আমাদের সকল কাজকে নির্দেশনা দেয় যখন আমরা সবার জন্য একটি উজ্জ্বল ভবিষ্যৎ গড়তে কাজ করি।',
    },
    {
      icon: Users,
      title: 'আমাদের প্রভাব',
      description: 'সহযোগিতামূলক প্রচেষ্টা এবং তরুণ নেতৃত্বাধীন উদ্যোগের মাধ্যমে আমরা একসময়ে একটি প্রকল্পের মাধ্যমে সমাজ পরিবর্তন করছি।',
    },
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            তরুণ শক্তির মাধ্যমে
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-orange ml-3">
              পরিবর্তন আনয়ন
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            আমাদের মিশন এই বিশ্বাসের উপর ভিত্তি করে যে তরুণরা সমাজে ইতিবাচক পরিবর্তনের জন্য অনুঘটক।
          </p>
        </div>

        {/* Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="group bg-card rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-border/50"
              >
                <div className="bg-primary/10 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-primary rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">৫০০+</div>
              <div className="text-primary-foreground/80">সক্রিয় স্বেচ্ছাসেবক</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">৫০+</div>
              <div className="text-primary-foreground/80">সম্পন্ন প্রকল্প</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">২৫+</div>
              <div className="text-primary-foreground/80">সেবিত সমাজ</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">১০হাজার+</div>
              <div className="text-primary-foreground/80">প্রভাবিত জীবন</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;