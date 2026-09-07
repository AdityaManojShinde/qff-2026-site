import SectionContainer from "@/components/common/SectionContainer";

export default function About() {
    return (
        <section id={"about"} className="bg-white ">
            <SectionContainer>
                <div className={"flex items-start justify-between pt-20 pb-20 text-slate-900"}>
                    <div className={"text-sm font-mono text-primary"}>
                        02 / What this is
                    </div>
                    <div className={"flex flex-col gap-4 max-w-2xl"}>
                        <h3 className={" font-bold text-2xl"}>A global student event, hosted locally</h3>
                        <p className={"font-light"}>
                            Qiskit Fall Fest is a series of student-run quantum computing events supported by IBM, held each fall at universities worldwide.
                        </p>
                        <p className={"font-light"}>
                            This one is organized by QQuEST at MIT-ADT Pune and open to students from any college. You do not need to attend MIT-ADT to register.
                        </p>
                    </div>
                </div>
            </SectionContainer>
        </section>
    );
}