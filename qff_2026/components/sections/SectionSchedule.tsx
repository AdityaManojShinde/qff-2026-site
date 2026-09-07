import SectionContainer from "@/components/common/SectionContainer";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScheduleRow } from "@/components/ui/ScheduleRow";
import { schedule } from "@/content/schedule";

export default function SectionSchedule() {
    return (
        <section id="schedule" className="py-20 lg:py-32 bg-gray-50">
            <SectionContainer>
                <div className="max-w-4xl mx-auto">
                    <SectionLabel number="07" label="Schedule" />
                    <h2 className="text-3xl md:text-5xl font-bold mb-12">Event Schedule</h2>
                    <div className="flex flex-col">
                        {schedule.map((item) => (
                            <ScheduleRow 
                                key={item.id} 
                                timeIso={item.timeIso} 
                                title={item.title} 
                                description={item.description} 
                            />
                        ))}
                    </div>
                </div>
            </SectionContainer>
        </section>
    );
}
