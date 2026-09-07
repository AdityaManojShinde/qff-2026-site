import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import SectionSchedule from "@/components/sections/SectionSchedule";
import SectionSessions from "@/components/sections/SectionSessions";
import SectionSpeakers from "@/components/sections/SectionSpeakers";
import SectionChecklist from "@/components/sections/SectionChecklist";
import SectionVenue from "@/components/sections/SectionVenue";
import SectionFaq from "@/components/sections/SectionFaq";
import Decade from "@/components/sections/Decade";
import Myths from "@/components/sections/Myths";

export default function Home() {
  return (
    <div>
        <Hero/>
        <About/>
        <SectionSessions/>
        <SectionSpeakers/>
        <SectionSchedule/>
        <SectionChecklist/>
        <SectionFaq/>
        <SectionVenue/>
        <Decade/>
        <Myths/>
    </div>
  );
}