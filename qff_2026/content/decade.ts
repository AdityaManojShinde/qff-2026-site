export interface DecadeEntry {
  year: number;
  claimed: string;
  achieved: string;
  source: string;
  highlight?: boolean;
}

export const DECADE_TIMELINE: DecadeEntry[] = [
  {
    year: 2016,
    claimed: "Cloud quantum access will instantly enable commercial quantum supremacy.",
    achieved: "IBM placed a 5-qubit transmon processor (IBM Q Experience) on the public cloud. Over 100,000 users ran basic single- and two-qubit circuits in year one.",
    source: "IBM Research Announcement (May 2016)"
  },
  {
    year: 2017,
    claimed: "50-qubit universal processors will immediately solve commercial chemistry.",
    achieved: "IBM deployed 16-qubit and 20-qubit processors and constructed a 50-qubit prototype. The open-source Qiskit SDK was released to the developer community.",
    source: "IBM Quantum Roadmap & Qiskit 0.4 Release (2017)"
  },
  {
    year: 2018,
    claimed: "Noisy quantum devices will replace classical algorithms in logistics by 2020.",
    achieved: "John Preskill formalised the 'NISQ' (Noisy Intermediate-Scale Quantum) era, establishing that 50–100 qubit machines without error correction are constrained by gate errors.",
    source: "Preskill, J., 'Quantum Computing in the NISQ era and beyond', Quantum 2, 79 (2018)"
  },
  {
    year: 2019,
    claimed: "Quantum supremacy means classical supercomputers are now obsolete.",
    achieved: "Google's Sycamore (53 qubits) completed random circuit sampling in 200 seconds; IBM demonstrated classical tensor-network simulation on Summit in 2.5 days.",
    source: "Arute et al., Nature 574, 505–510 (2019); Pednault et al., arXiv:1910.09534"
  },
  {
    year: 2020,
    claimed: "Doubling qubit counts every twelve months is the sole metric of capability.",
    achieved: "IBM introduced Quantum Volume (QV), reaching QV 64 on the 27-qubit Falcon processor, proving gate fidelity and coherence dictate computational reach above qubit count alone.",
    source: "Jurcevic et al., Quantum Sci. Technol. 6, 025020 (2021)"
  },
  {
    year: 2021,
    claimed: "127-qubit Eagle processor breaks the 100-qubit threshold for unconstrained algorithms.",
    achieved: "IBM deployed the 127-qubit Eagle processor using a heavy-hex lattice; experiments showed raw circuit depth remained bounded below 30 layers without active error mitigation.",
    source: "IBM Quantum Summit (November 2021)"
  },
  {
    year: 2022,
    claimed: "433-qubit Osprey marks the immediate end of classical simulation for physical systems.",
    achieved: "IBM unveiled the 433-qubit Osprey processor; the research community demonstrated that crosstalk scales with density, shifting R&D focus toward dynamic circuits and mitigation.",
    source: "IBM Quantum Summit (November 2022)"
  },
  {
    year: 2023,
    claimed: "Utility scale requires millions of physical qubits with full fault tolerance.",
    achieved: "Kim et al. demonstrated quantum utility on the 127-qubit Eagle processor, simulating 100-qubit kicked Ising models at depth 60 using Zero-Noise Extrapolation (ZNE).",
    source: "Kim et al., 'Evidence for the utility of quantum computing before fault tolerance', Nature 618, 500–505 (2023)"
  },
  {
    year: 2024,
    claimed: "Quantum software stacks have achieved their final architecture.",
    achieved: "Qiskit 1.0 launched with a Rust-based core, delivering a 16x speedup in circuit transpilation and a 39x reduction in memory footprint compared to version 0.45.",
    source: "Qiskit 1.0 Release Notes (IBM Quantum, February 2024)"
  },
  {
    year: 2025,
    claimed: "Fault-tolerant logical qubits will remain theoretical for another decade.",
    achieved: "Demonstrations of error-suppressed logical operations using distance-3 to distance-7 surface and qLDPC codes; Heron r2 (156 qubits) became the workhorse production system.",
    source: "IBM Quantum Development Roadmap (2025)"
  },
  {
    year: 2026,
    claimed: "Quantum computing is an inaccessible specialty reserved for theoretical physics labs.",
    achieved: "Qiskit Fall Fest 2026 at MIT-ADT Pune: 300 undergraduate students write circuits, transpile gates, measure noise, and execute code directly on IBM Heron 156-qubit QPUs.",
    source: "Qiskit Fall Fest 2026, QQuEST × MIT-ADT (3 November 2026)",
    highlight: true
  }
];
