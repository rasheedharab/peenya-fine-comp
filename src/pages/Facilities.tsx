import FacilitiesHero from '../components/FacilitiesHero';
import FacilityHighlights from '../components/FacilityHighlights';
import StampingCenter from '../components/StampingCenter';
import ToolingMachining from '../components/ToolingMachining';
import MetrologyLab from '../components/MetrologyLab';
import FacilitiesCTA from '../components/FacilitiesCTA';

export default function Facilities() {
  return (
    <>
      <FacilitiesHero />
      <FacilityHighlights />
      <StampingCenter />
      <ToolingMachining />
      <MetrologyLab />
      <FacilitiesCTA />
    </>
  );
}
