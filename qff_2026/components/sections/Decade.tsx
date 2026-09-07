"use client";

import React, { useState } from "react";
import SectionContainer from "@/components/common/SectionContainer";
import { DECADE_TIMELINE, DecadeEntry } from "@/content/decade";
import { ArrowUpRight, Calendar, CheckCircle2 } from "lucide-react";

export default function Decade() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const displayEntries: DecadeEntry[] = selectedYear
    ? DECADE_TIMELINE.filter((item) => item.year === selectedYear)
    : DECADE_TIMELINE;

  return (
    <section id="decade" className="bg-background py-20 lg:py-28 border-t border-border">
      <SectionContainer>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-3xl">
            <div className="text-xs sm:text-sm font-mono text-primary tracking-wider uppercase font-semibold">
              03 / A Decade of Quantum (2016–2026)
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 tracking-tight">
              Ten years of claims versus verifiable reality
            </h2>
            <p className="text-muted-foreground mt-4 text-base sm:text-lg leading-relaxed">
              Every phase of quantum computing has arrived with headlines. Here is the documented
              trajectory of what was promised, what was achieved, and why 2026 matters.
            </p>
          </div>

          {/* Quick Year Selector Filter */}
          <div className="flex items-center flex-wrap gap-1.5 p-1 bg-white/70 dark:bg-card/70 backdrop-blur-xs rounded-lg border border-border self-start md:self-end">
            <button
              onClick={() => setSelectedYear(null)}
              className={`px-3 py-1.5 text-xs font-mono rounded-md transition-colors ${
                selectedYear === null
                  ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              All (2016–2026)
            </button>
            {DECADE_TIMELINE.map((item) => (
              <button
                key={item.year}
                onClick={() => setSelectedYear(item.year)}
                className={`px-2.5 py-1.5 text-xs font-mono rounded-md transition-colors ${
                  selectedYear === item.year
                    ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                    : item.highlight
                    ? "text-primary font-bold hover:bg-primary/10"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.year}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Stream */}
        <div className="relative">
          {/* Vertical circuit spine line */}
          <div className="hidden lg:block absolute left-8 -translate-x-1/2 top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary/30 via-primary/50 to-primary/80" />

          <div className="space-y-6 sm:space-y-8">
            {displayEntries.map((item) => {
              const isHighlight = item.highlight;
              return (
                <div
                  key={item.year}
                  className={`relative lg:pl-20 transition-all ${
                    isHighlight
                      ? "ring-2 ring-primary/40 rounded-xl"
                      : ""
                  }`}
                >
                  {/* Timeline Node on Spine */}
                  <div
                    className={`hidden lg:flex absolute left-8 top-8 -translate-x-1/2 w-7 h-7 rounded-full items-center justify-center text-xs font-mono font-bold z-10 ${
                      isHighlight
                        ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                        : "bg-white border-2 border-primary text-primary shadow-xs"
                    }`}
                  >
                    {DECADE_TIMELINE.findIndex((e) => e.year === item.year) + 1}
                  </div>

                  {/* Card Container */}
                  <div
                    className={`bg-white dark:bg-card border rounded-xl p-5 sm:p-7 shadow-xs hover:shadow-md transition-shadow ${
                      isHighlight
                        ? "border-primary/50 bg-gradient-to-br from-white via-purple-50/20 to-pink-50/20"
                        : "border-border"
                    }`}
                  >
                    {/* Card Header */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-border/70">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary font-mono font-bold text-sm sm:text-base rounded-md">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.year}
                        </span>
                        {isHighlight && (
                          <span className="px-2.5 py-1 bg-pink-100 dark:bg-pink-950/50 text-pink-700 dark:text-pink-300 text-xs font-semibold rounded-full border border-pink-200">
                            QFF 2026 Event Year
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Claims vs Achievements Comparison Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
                      {/* What was claimed */}
                      <div className="flex flex-col justify-between bg-slate-50 dark:bg-slate-900/40 rounded-lg p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800">
                        <div>
                          <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2">
                            What Was Claimed
                          </div>
                          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 italic leading-relaxed">
                            &ldquo;{item.claimed}&rdquo;
                          </p>
                        </div>
                      </div>

                      {/* What was achieved */}
                      <div className="flex flex-col justify-between bg-purple-50/50 dark:bg-purple-950/20 rounded-lg p-4 sm:p-5 border border-purple-200/70 dark:border-purple-900/50">
                        <div>
                          <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-primary font-semibold mb-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                            What Was Achieved
                          </div>
                          <p className="text-sm sm:text-base text-foreground font-medium leading-relaxed">
                            {item.achieved}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Source Citation Footer */}
                    <div className="mt-5 pt-3 border-t border-border/50 flex items-center justify-between flex-wrap gap-2 text-xs text-muted-foreground font-mono">
                      <span className="flex items-center gap-1">
                        <ArrowUpRight className="w-3.5 h-3.5 text-primary" />
                        <span className="text-slate-500">Source:</span> {item.source}
                      </span>
                      <span className="text-[11px] text-slate-400">Verified record</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
