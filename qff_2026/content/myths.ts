export interface MythEntry {
  id: string;
  mythNumber: string;
  claim: string;
  reality: string;
  keyFacts: string[];
  source: string;
  sourceUrl?: string;
}

export const MYTHS_LIST: MythEntry[] = [
  {
    id: "superposition-parallelism",
    mythNumber: "01",
    claim: "Quantum computers evaluate every candidate solution simultaneously in parallel worlds.",
    reality: "Quantum algorithms rely on interference to amplify correct solutions, not parallel trials.\nMeasurement collapses the linear superposition of 2ⁿ states into one classical output.",
    keyFacts: [
      "State vector: |ψ⟩ = Σ α_x |x⟩ across 2ⁿ basis states",
      "Measurement yields 1 classical n-bit string with probability |α_x|²",
      "Computational speedup arises from interference, not simultaneous parallel trials"
    ],
    source: "Nielsen & Chuang, Quantum Computation and Quantum Information, Cambridge University Press (10th Anniv. Ed.)"
  },
  {
    id: "rsa-encryption-threat",
    mythNumber: "02",
    claim: "Quantum computers will break RSA-2048 and elliptic-curve cryptography within the next year.",
    reality: "Factoring 2048-bit RSA requires ~20 million noisy physical qubits under surface-code error correction.\nProduction QPUs today operate at 156 physical qubits (IBM Heron), placing Shor's algorithm years away.",
    keyFacts: [
      "RSA-2048 factoring budget: ~20 million physical qubits (8-hour runtime estimate)",
      "Current state of the art: 156 physical qubits (IBM Heron r2 architecture)",
      "NIST Post-Quantum Cryptography standards finalised in August 2024 (FIPS 203, 204, 205)"
    ],
    source: "Gidney & Ekerå, 'How to factor 2048 bit RSA integers in 8 hours using 20 million noisy qubits', Quantum 5, 433 (2021); NIST PQC Standards (Aug 2024)"
  },
  {
    id: "general-cpu-replacement",
    mythNumber: "03",
    claim: "Quantum processors will replace classical CPUs for general everyday software.",
    reality: "Quantum processors speed up specific mathematical problem classes (BQP), not everyday computing.\nFor general tasks, 5 GHz classical CPU clock cycles vastly outperform ~50 MHz quantum gate pulses.",
    keyFacts: [
      "Classical CPU clock speed: ~5.0 GHz (0.2 ns cycle time)",
      "Superconducting 2-qubit gate duration: ~30–100 ns (effective ~10–30 MHz)",
      "Speedups are complexity-class specific (BQP), not general clock improvements"
    ],
    source: "Aaronson, S., 'The Limits of Quantum Computers', Scientific American 298(3), 62-69 (2008)"
  },
  {
    id: "nisq-exact-simulation",
    mythNumber: "04",
    claim: "Current quantum processors simulate large molecules and chemistry with zero error.",
    reality: "NISQ devices face decoherence (T₁ ≈ 200–300 µs) and 2-qubit gate errors of ~0.1%.\nUtility experiments use error mitigation (ZNE) for expectation values, but exact simulation requires fault tolerance.",
    keyFacts: [
      "Coherence time limit: T₁ ≈ 200–300 µs on modern transmon hardware",
      "Two-qubit error rate: ≈ 0.1%–0.5% per CNOT / CZ gate",
      "Error mitigation (ZNE / PEC) extracts expectation values without full fault tolerance"
    ],
    source: "Kim et al., 'Evidence for the utility of quantum computing before fault tolerance', Nature 618, 500–505 (2023)"
  }
];
