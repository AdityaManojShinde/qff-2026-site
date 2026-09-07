import SectionContainer from "@/components/common/SectionContainer";
import { SectionLabel } from "@/components/ui/SectionLabel";
import Image from "next/image";

export default function SectionVenue() {
    return (
        <section id="venue" className="py-20 lg:py-32">
            <SectionContainer>
                <div className="max-w-5xl mx-auto">
                    <SectionLabel number="11" label="Venue" />
                    <h2 className="text-3xl md:text-5xl font-bold mb-12">Getting Here</h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div className="flex flex-col">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                MIT Art, Design and Technology University
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Rajbaug, Loni Kalbhor, Pune, Maharashtra 412201.
                            </p>

                            <h4 className="text-lg font-bold text-gray-900 mb-2">Contacts</h4>
                            <p className="text-gray-700 mb-1">QQuEST Team</p>
                            <a href="mailto:qquest@mitadt.edu.in" className="text-primary hover:underline">
                                qquest@mitadt.edu.in
                            </a>
                        </div>
                        
                        <div className="relative w-full aspect-square md:aspect-video lg:aspect-square bg-gray-100 border border-gray-200 overflow-hidden">
                            <Image 
                                src="/mit_adt_venue.jpg" 
                                alt="Map of MIT-ADT University Campus" 
                                fill 
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </section>
    );
}
