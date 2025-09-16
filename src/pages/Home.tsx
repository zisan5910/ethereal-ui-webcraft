import HeroSection from '@/components/sections/HeroSection';
import VideoSection from '@/components/sections/VideoSection';
import MissionSection from '@/components/sections/MissionSection';
import ProgramsSection from '@/components/sections/ProgramsSection';
import NewsSection from '@/components/sections/NewsSection';
import CTASection from '@/components/sections/CTASection';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <VideoSection />
      <MissionSection />
      <ProgramsSection />
      <NewsSection />
      <CTASection />
    </main>
  );
};

export default Home;