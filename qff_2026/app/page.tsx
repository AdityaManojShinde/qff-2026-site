import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
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
        <Decade/>
        <Myths/>
    </div>
  );
}
