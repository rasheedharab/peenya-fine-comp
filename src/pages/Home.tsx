import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Capabilities from '../components/Capabilities';
import Philosophy from '../components/Philosophy';
import VideoSection from '../components/VideoSection';
import Partners from '../components/Partners';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Capabilities />
      <Philosophy />
      <VideoSection />
      <Partners />
      <CTA />
    </>
  );
}
