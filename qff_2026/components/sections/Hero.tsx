import SectionContainer from "@/components/common/SectionContainer";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// TODO: change image url to brand image

export default function Hero() {
    return (
        <section
            className="bg-foreground min-h-screen flex items-center justify-center py-20 lg:py-0"
            id="hero"
        >
            {/* Plain, non-flex wrapper: keeps SectionContainer's own mx-auto from
                fighting the flex parent's stretch/grow, so its width behaves
                identically here and inside Navbar. */}
            <div className="w-full">
                <SectionContainer>
                    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16 text-white">

                        {/* Hero Content */}
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

                            {/* Countdown */}
                            <div className="flex mt-8 sm:mt-10 gap-5 sm:gap-7 lg:gap-8">

                                {/* Days */}
                                <div className="flex flex-col items-start">
                                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                                        56
                                    </div>
                                    <div className="text-secondary text-[10px] sm:text-xs lg:text-sm">
                                        DAYS
                                    </div>
                                </div>

                                {/* Hours */}
                                <div className="flex flex-col items-start">
                                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                                        15
                                    </div>
                                    <div className="text-secondary text-[10px] sm:text-xs lg:text-sm">
                                        HRS
                                    </div>
                                </div>

                                {/* Minutes */}
                                <div className="flex flex-col items-start">
                                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                                        07
                                    </div>
                                    <div className="text-secondary text-[10px] sm:text-xs lg:text-sm">
                                        MIN
                                    </div>
                                </div>

                                {/* Seconds */}
                                <div className="flex flex-col items-start">
                                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                                        56
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

                        {/* Hero Image */}
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