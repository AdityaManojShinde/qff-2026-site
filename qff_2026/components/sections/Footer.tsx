import SectionContainer from "@/components/common/SectionContainer";
/*
*
* TODO: Add more content to the footer, such as social media links, contact information, or additional navigation links. You can also add styling to make the footer more visually appealing.
*
* */
export default function Footer() {
    return (
        <footer className="bg-foreground text-white border-t border-purple-950">
            <SectionContainer>
                <div className={"flex flex-col items-center justify-center py-8 text-center gap-2"}>
                    <h3 className={"text-lg font-semibold"}>Qiskit Fall Fest 2026</h3>
                    <p className={"text-xs sm:text-sm text-purple-200/80 max-w-2xl font-light"}>
                        Qiskit and Qiskit Fall Fest are IBM marks. This event is organized by QQuEST at MIT Art, Design and Technology University, Pune.
                    </p>
                    <p className={"text-xs text-purple-300/50 mt-1 font-mono"}>
                        &copy; {new Date().getFullYear()} Qiskit Fall Fest 2026. All rights reserved.
                    </p>
                </div>
            </SectionContainer>
        </footer>
    );
}