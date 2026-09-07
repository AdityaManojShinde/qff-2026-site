import SectionContainer from "@/components/common/SectionContainer";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { checklist } from "@/content/checklist";

export default function SectionChecklist() {
    return (
        <section id="checklist" className="py-20 lg:py-32">
            <SectionContainer>
                <div className="max-w-4xl mx-auto">
                    <SectionLabel number="10" label="Checklist" />
                    <h2 className="text-3xl md:text-5xl font-bold mb-12">Pre-event Checklist</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {checklist.map((item) => (
                            <div key={item.id} className="flex flex-col bg-gray-50 p-6 border border-gray-200">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                                <p className="text-gray-700">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionContainer>
        </section>
    );
}
