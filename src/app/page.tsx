
import HeroSection from '../components/HeroSection';
import NewCollection from '../components/NewCollection';
import CeramicCollection from '../components/CeramicCollection';
import Bestsellers from '../components/Bestsellers';
import Workshop from '../components/Workshop';
import OurEmployees from '../components/OurEmployees';
import OurStory from '../components/OurStory';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Bestsellers />
      <NewCollection />
      <Workshop />
      <OurEmployees />
      <CeramicCollection />
      <OurStory />
    </>
  );
}
