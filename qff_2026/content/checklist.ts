export interface ChecklistItem {
    id: string;
    title: string;
    description: string;
}

export const checklist: ChecklistItem[] = [
    {
        id: "account",
        title: "1. Create an IBM Quantum Account",
        description: "You'll need this to access real hardware and advanced simulators. Go to quantum.ibm.com and sign up. Do this before you arrive."
    },
    {
        id: "laptop",
        title: "2. Bring your laptop",
        description: "Part 2 is fully hands-on. Bring your laptop and charger. We will provide Wi-Fi access."
    },
    {
        id: "install",
        title: "3. Install Python & Qiskit",
        description: "Ensure you have Python 3.10+ installed. Then open your terminal and run: pip install qiskit[visualization]"
    }
];
