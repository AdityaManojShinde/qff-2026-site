"use client";

import SectionContainer from "@/components/common/SectionContainer";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
// TODO: change image url to brand image

const EVENT_DATE_ISO = "2026-11-03T04:00:00Z"; // matches content/schedule.ts check-in time

function getTimeRemaining() {
    const diff = Math.max(new Date(EVENT_DATE_ISO).getTime() - Date.now(), 0);
    return {
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
    };
}

function useCountdown() {
    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const update = () => setTime(getTimeRemaining());

        update();

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
        }

        const id = setInterval(update, 1000);

        return () => clearInterval(id);
    }, []);

    return time;
}

export default function Hero() {
    const { days, hours, minutes, seconds } = useCountdown();

    return (
        <section
            className="bg-foreground min-h-screen flex items-center justify-center py-20 lg:py-0"
            id="hero"
        >
            <div className="w-full">
                <SectionContainer>
                    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16 text-white">

                        <div className="flex flex-col items-start justify-center w-full lg:max-w-3xl">

                            <div className="text-purple-300 font-mono text-xs sm:text-sm">
                                01 / Overview
                            </div>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mt-4 sm:mt-5">
                                Qiskit Fall Fest 2026
                            </h1>

                            <p className="text-base sm:text-lg lg:text-xl mt-4 sm:mt-5 text-purple-300 leading-relaxed">
                                <span className="text-destructive font-bold">
                                    3 November 2026
                                </span>{" "}
                                MIT Art, Design and Technology University, Pune
                            </p>

                            <p className="text-base sm:text-lg lg:text-xl mt-4 sm:mt-5 leading-relaxed max-w-2xl">
                                A one-day quantum computing event: two sessions,
                                real IBM hardware, no hype.
                            </p>

                            <div className="flex mt-8 sm:mt-10 gap-5 sm:gap-7 lg:gap-8">

                                <div className="flex flex-col items-start">
                                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                                        {String(days).padStart(2, "0")}
                                    </div>
                                    <div className="text-secondary text-[10px] sm:text-xs lg:text-sm">
                                        DAYS
                                    </div>
                                </div>

                                <div className="flex flex-col items-start">
                                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                                        {String(hours).padStart(2, "0")}
                                    </div>
                                    <div className="text-secondary text-[10px] sm:text-xs lg:text-sm">
                                        HRS
                                    </div>
                                </div>

                                <div className="flex flex-col items-start">
                                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                                        {String(minutes).padStart(2, "0")}
                                    </div>
                                    <div className="text-secondary text-[10px] sm:text-xs lg:text-sm">
                                        MIN
                                    </div>
                                </div>

                                <div className="flex flex-col items-start">
                                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                                        {String(seconds).padStart(2, "0")}
                                    </div>
                                    <div className="text-secondary text-[10px] sm:text-xs lg:text-sm">
                                        SEC
                                    </div>
                                </div>
                            </div>

                            <Button className="rounded-none py-5 sm:py-6 px-8 sm:px-10 mt-8 sm:mt-10">
                                Register
                                <ArrowRight />
                            </Button>
                        </div>

                        <div className="shrink-0">
                            <Image
                                loading={"eager"}
                                height={300}
                                width={300}
                                alt="Qskit Brand Logo"
                                src="/brand/qiskit_white.svg"
                                className="w-48 sm:w-60 md:w-72 lg:w-75 h-auto"
                            />
                        </div>
                    </div>
                </SectionContainer>
            </div>
        </section>
    );
}