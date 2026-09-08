import SectionContainer from "@/components/common/SectionContainer";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SpeakerCard } from "@/components/ui/SpeakerCard";
import { speakers } from "@/content/speakers";

export default function SectionSpeakers() {
    return (
        <section id="speakers" className="py-20 lg:py-32 bg-background">
            <SectionContainer>

                    <SectionLabel number="06" label="Speakers" />
                    <h2 className="text-3xl md:text-5xl font-bold mb-12">Speakers</h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {speakers.map((speaker) => (
                            <SpeakerCard key={speaker.id} speaker={speaker} />
                        ))}
                    </div>

            </SectionContainer>
        </section>
    );
}