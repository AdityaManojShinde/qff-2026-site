import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import SectionSchedule from "@/components/sections/SectionSchedule";
import SectionChecklist from "@/components/sections/SectionChecklist";
import SectionVenue from "@/components/sections/SectionVenue";
import SectionFaq from "@/components/sections/SectionFaq";

{/* add sections here, every section component should have a SectionContainer wrapper for consistent spacing and alignment */}

import Decade from "@/components/sections/Decade";
import Myths from "@/components/sections/Myths";

{/* add sections here, every section component should have a SectionContainer wrapper for consistent spacing and alignment */}

// Todo: Add Hero Section -> done
// Todo: Add About Section -> done
// Todo: Add Decade Section (03) -> done
// Todo: Add Myths Section (04) -> done
// Todo: Add Schedule section
// Todo: Add Speakers Section
// Todo: Add FAQ Section

export default function Home() {
  return (
    <div>
        {/*Add Sections Here*/}
        <Hero/>
        <About/>
        <SectionSchedule/>
        <SectionChecklist/>
        <SectionFaq/>
        <SectionVenue/>
        <Decade/>
        <Myths/>
    </div>
  );
}
