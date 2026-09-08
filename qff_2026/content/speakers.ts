export interface Speaker {
    id: string;
    name: string;
    role: string;
    affiliation: string;
    bio: string;
    session: string;   // references a Session id
    isPlaceholder: boolean; // true = not yet confirmed, must be swapped before launch
}

// PLACEHOLDER CONTENT — team has approved placeholders for now (see PR description).
// isPlaceholder: true must stay true until IBM confirms the actual speaker,
// at which point replace name/role/affiliation/bio and flip this to false.
export const speakers: Speaker[] = [
    {
        id: "speaker-placeholder-1",
        name: "Speaker Name TBA",
        role: "Quantum Researcher",
        affiliation: "IBM Quantum",
        bio: "Speaker bio pending confirmation. This is placeholder content and will be replaced once IBM confirms the delegate for this event.",
        session: "quantum-101",
        isPlaceholder: true
    }
];