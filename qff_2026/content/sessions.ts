export interface Session {
    id: string;
    order: number;
    title: string;
    duration: string;
    format: string;
    description: string;
    audience: string;
}

// Descriptions kept consistent with content/schedule.ts Part 1 / Part 2 entries.
export const sessions: Session[] = [
    {
        id: "quantum-101",
        order: 1,
        title: "Quantum 101",
        duration: "~2 hours",
        format: "Talk",
        description:
            "What quantum computing actually is, what it's genuinely useful for, and what it is not. No physics or programming background assumed.",
        audience: "Anyone, no prerequisites"
    },
    {
        id: "hands-on-qiskit",
        order: 2,
        title: "Hands-on with Qiskit",
        duration: "~2 hours",
        format: "Workshop, laptop required",
        description:
            "Building circuits, transpilation, noise, and running on simulators, with a closing coding challenge. Basic Python assumed.",
        audience: "Attendees of Quantum 101, or anyone comfortable with Python basics"
    }
];