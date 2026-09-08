import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Decade from "@/components/sections/Decade";
import Myths from "@/components/sections/Myths";
import SectionSessions from "@/components/sections/SectionSessions";
import SectionSpeakers from "@/components/sections/SectionSpeakers";
import SectionSchedule from "@/components/sections/SectionSchedule";
import SectionFaq from "@/components/sections/SectionFaq";
import SectionChecklist from "@/components/sections/SectionChecklist";
import SectionVenue from "@/components/sections/SectionVenue";

export default function Home() {
  return (
    <div>
        <Hero/>
        <About/>
        <Decade/>
        <Myths/>
        <SectionSessions/>
        <SectionSpeakers/>
        <SectionSchedule/>
        <SectionFaq/>
        <SectionChecklist/>
        <SectionVenue/>
    </div>
  );
}