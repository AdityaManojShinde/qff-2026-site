import SectionContainer from "@/components/common/SectionContainer";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/content/faq";

export default function SectionFaq() {
    return (
        <section id="faq" className="py-20 lg:py-32 bg-foreground">
            <SectionContainer>

                    <SectionLabel number="09" label="FAQ" />
                    <h2 className="text-3xl md:text-5xl font-bold mb-12">Frequently Asked Questions</h2>
                    <Accordion className="w-full">
                        {faqs.map((faq, idx) => (
                            <AccordionItem key={idx} value={`item-${idx}`}>
                                <AccordionTrigger className="text-left text-lg font-semibold text-secondary">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-white leading-relaxed text-base">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

            </SectionContainer>
        </section>
    );
}
