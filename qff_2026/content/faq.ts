export interface FaqItem {
    question: string;
    answer: string;
}

export const faqs: FaqItem[] = [
    {
        question: "Is it free?",
        answer: "Yes. Qiskit Fall Fest 2026 at MIT-ADT is completely free to attend."
    },
    {
        question: "Do I need a background in quantum mechanics?",
        answer: "No. Part 1 (Quantum 101) is designed specifically to introduce the core concepts from scratch. You only need a basic understanding of Python for Part 2."
    },
    {
        question: "Do I need my own quantum hardware?",
        answer: "No. The hands-on labs will run primarily on simulators, which is how most quantum development is done. We will use real IBM quantum hardware for specific demonstrations."
    },
    {
        question: "Will I get a certificate?",
        answer: "Yes, attendees who participate in both sessions will receive an official certificate of participation."
    },
    {
        question: "Can I attend if I'm not from MIT-ADT?",
        answer: "Yes! This event is open to students from any college or university."
    },
    {
        question: "What do I need to install beforehand?",
        answer: "You will need a laptop with Python and Qiskit installed. See the checklist section for detailed setup instructions."
    }
];
