"use client";

import { useState, useEffect, useCallback } from "react";

interface CountdownProps {
    /** The target date to count down to (e.g., "2026-11-03T09:00:00+05:30") */
    targetDate: string | Date;
    /** Optional CSS classes for custom margins or overriding styles */
    className?: string;
}

export default function Countdown({ targetDate, className = "" }: CountdownProps) {
    // Parse the date once when the component mounts
    const targetTime = new Date(targetDate).getTime();

    // useCallback ensures this function isn't recreated on every render
    const getTimeLeft = useCallback(() => {
        const now = new Date().getTime();
        const difference = targetTime - now;

        if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000),
        };
    }, [targetTime]);

    const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

    useEffect(() => {
        const timerId = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);

        return () => clearInterval(timerId);
    }, [getTimeLeft]);

    const pad = (num: number) => String(num).padStart(2, "0");

    return (
        // Added the optional className prop here so parents can control spacing
        <div className={`flex gap-5 sm:gap-7 lg:gap-8 min-h-15 ${className}`}>
            {/* Days */}
            <div className="flex flex-col items-start">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold tabular-nums">
                    {pad(timeLeft.days)}
                </div>
                <div className="text-secondary text-[10px] sm:text-xs lg:text-sm">DAYS</div>
            </div>

            {/* Hours */}
            <div className="flex flex-col items-start">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold tabular-nums">
                    {pad(timeLeft.hours)}
                </div>
                <div className="text-secondary text-[10px] sm:text-xs lg:text-sm">HRS</div>
            </div>

            {/* Minutes */}
            <div className="flex flex-col items-start">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold tabular-nums">
                    {pad(timeLeft.minutes)}
                </div>
                <div className="text-secondary text-[10px] sm:text-xs lg:text-sm">MIN</div>
            </div>

            {/* Seconds */}
            <div className="flex flex-col items-start">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold tabular-nums">
                    {pad(timeLeft.seconds)}
                </div>
                <div className="text-secondary text-[10px] sm:text-xs lg:text-sm">SEC</div>
            </div>
        </div>
    );
}