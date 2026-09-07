"use client";

import React, { useState, useEffect, useRef } from "react";
import SectionContainer from "@/components/common/SectionContainer";
import { MYTHS_LIST, MythEntry } from "@/content/myths";
import { 
  RotateCcw, 
  Check, 
  FileText, 
  Binary,
  ArrowRight
} from "lucide-react";

type MeasureState = "unmeasured" | "measuring" | "collapsed";

const QUANTUM_SYMBOLS = [
  "|0⟩", "|1⟩", "|+⟩", "|−⟩", "01101", "10010", 
  "|ψ⟩", "H|0⟩", "CNOT", "ZNE", "α|0⟩+β|1⟩", "11001",
  "|00⟩", "10110", "√½", "⊗", "10001", "01011"
];

function QuantumCard({ myth }: { myth: MythEntry }) {
  const [state, setState] = useState<MeasureState>("unmeasured");
  const [scrambleText, setScrambleText] = useState<string>("");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleMeasure = () => {
    if (state === "measuring") return;

    // Check prefers-reduced-motion
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setState("collapsed");
      return;
    }

    setState("measuring");
    let count = 0;
    const maxTicks = 12;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      count++;
      const randSymbols = Array.from({ length: 6 }, () => 
        QUANTUM_SYMBOLS[Math.floor(Math.random() * QUANTUM_SYMBOLS.length)]
      ).join(" ");
      setScrambleText(randSymbols);

      if (count >= maxTicks) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setState("collapsed");
      }
    }, 40);
  };

  const handleReset = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setState("unmeasured");
    setScrambleText("");
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div 
      className={`border rounded-xl transition-all duration-300 overflow-hidden ${
        state === "collapsed"
          ? "bg-slate-900 border-[#FF7EB6]/60 shadow-lg text-white ring-1 ring-[#FF7EB6]/30"
          : state === "measuring"
          ? "bg-slate-950 border-primary shadow-md text-white animate-pulse"
          : "bg-white dark:bg-card border-border hover:border-primary/40 shadow-xs"
      }`}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-border/40 bg-slate-50/50 dark:bg-slate-900/30">
        <span className="font-mono text-xs font-bold px-2.5 py-1 bg-primary/10 text-primary rounded-md">
          MYTH {myth.mythNumber}
        </span>

        {/* Reset Action (only in collapsed state) */}
        {state === "collapsed" && (
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-md transition-colors cursor-pointer"
            title="Reset to unmeasured state"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        )}
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-7">
        {/* The Claim */}
        <div className="mb-5">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-1.5">
            The Headline Claim
          </div>
          <h3 className={`text-lg sm:text-xl font-bold leading-snug ${state === "collapsed" ? "text-slate-200" : "text-foreground"}`}>
            &ldquo;{myth.claim}&rdquo;
          </h3>
        </div>

        {/* Interactive Reveal Area */}
        {state === "unmeasured" && (
          <div 
            onClick={handleMeasure}
            className="p-4 sm:p-5 rounded-lg border border-dashed border-primary/30 bg-primary/5 hover:bg-primary/10 cursor-pointer transition-colors flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
              <Binary className="w-5 h-5 text-primary shrink-0" />
              <div className="text-sm">
                Tap to measure and reveal the factual correction.
              </div>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleMeasure();
              }}
              className="whitespace-nowrap flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold text-white bg-primary hover:bg-primary/90 active:scale-95 rounded-md transition-all shadow-xs shrink-0 cursor-pointer"
            >
              <span>MEASURE</span>
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </button>
          </div>
        )}

        {state === "measuring" && (
          <div className="p-6 rounded-lg bg-slate-900 border border-primary/50 text-center font-mono text-primary text-sm sm:text-base flex flex-col items-center justify-center gap-2">
            <div className="text-xs uppercase tracking-widest text-[#FF7EB6] font-bold">
              Measuring Quantum State...
            </div>
            <div className="text-base sm:text-lg font-bold tracking-widest text-slate-300">
              {scrambleText || "010110 100101 |0⟩ ⊗ |1⟩"}
            </div>
          </div>
        )}

        {state === "collapsed" && (
          <div className="mt-4 pt-5 border-t border-slate-800 space-y-4 animate-in fade-in duration-300">
            {/* Reality Banner */}
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#FF7EB6]">
              <Check className="w-4 h-4 text-[#FF7EB6]" />
              Verifiable Reality (Collapsed)
            </div>

            {/* Reality Explanation - 2 clean lines */}
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal whitespace-pre-line">
              {myth.reality}
            </p>

            {/* Source */}
            <div className="pt-2 text-xs font-mono text-slate-400 flex items-center gap-1.5 flex-wrap">
              <FileText className="w-3.5 h-3.5 text-[#FF7EB6]" />
              <span className="text-slate-400 font-semibold">Source:</span>
              <span className="text-slate-300">{myth.source}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Myths() {
  const [measuredAll, setMeasuredAll] = useState(false);
  const [triggerKey, setTriggerKey] = useState(0);

  const handleMeasureAll = () => {
    setMeasuredAll(true);
    setTriggerKey((k) => k + 1);
  };

  return (
    <section id="myths" className="bg-white dark:bg-background py-20 lg:py-28 border-t border-border">
      <SectionContainer>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-3xl">
            <div className="text-xs sm:text-sm font-mono text-primary tracking-wider uppercase font-semibold">
              04 / The Record, Corrected
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 tracking-tight">
              Myths vs. Reality: Measuring the Truth
            </h2>
            <p className="text-muted-foreground mt-4 text-base sm:text-lg leading-relaxed">
              Most quantum outreach repeats the same four misconceptions. Part 1 of this fest
              corrects them with verified physics and concrete hardware numbers.
            </p>
          </div>

          {/* Measure All Trigger */}
          <div className="self-start md:self-end">
            <button
              onClick={handleMeasureAll}
              className="px-4 py-2.5 bg-primary/10 hover:bg-primary/20 text-primary font-mono text-xs sm:text-sm font-bold rounded-lg border border-primary/30 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>MEASURE ALL MYTHS</span>
            </button>
          </div>
        </div>

        {/* Myths Grid */}
        <div key={triggerKey} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {MYTHS_LIST.map((myth) => (
            <QuantumCard key={myth.id} myth={myth} />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
