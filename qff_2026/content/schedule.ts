export interface ScheduleItem {
    id: string;
    timeIso: string;
    title: string;
    description?: string;
}

// 3 November 2026
// UTC times: 09:30 IST is 04:00 UTC
export const schedule: ScheduleItem[] = [
    {
        id: "checkin",
        timeIso: "2026-11-03T04:00:00Z",
        title: "Check-in & Welcome",
        description: "Arrive, find a seat, and connect to Wi-Fi."
    },
    {
        id: "part1",
        timeIso: "2026-11-03T04:30:00Z",
        title: "Part 1: Quantum 101",
        description: "What quantum computing actually is, what it's genuinely useful for, and what it is not."
    },
    {
        id: "break",
        timeIso: "2026-11-03T06:30:00Z",
        title: "Lunch Break",
    },
    {
        id: "part2",
        timeIso: "2026-11-03T07:30:00Z",
        title: "Part 2: Hands-on with Qiskit",
        description: "Building circuits, transpilation, noise, and running on simulators."
    },
    {
        id: "challenge",
        timeIso: "2026-11-03T09:30:00Z",
        title: "Coding Challenge & Wrap-up",
        description: "A short challenge to test what you've learned."
    }
];
