import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import SectionSchedule from "@/components/sections/SectionSchedule";
import SectionChecklist from "@/components/sections/SectionChecklist";
import SectionVenue from "@/components/sections/SectionVenue";
import SectionFaq from "@/components/sections/SectionFaq";

{/* add sections here, every section component should have a SectionContainer wrapper for consistent spacing and alignment */}

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
    </div>
  );
}
