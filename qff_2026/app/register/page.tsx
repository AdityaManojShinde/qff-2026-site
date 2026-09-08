import SectionContainer from "@/components/common/SectionContainer";
import RegistrationForm from "@/components/form/RegistrationForm";


export const metadata = {
    title: "Register | Qiskit Fall Fest 2026",
    description: "Secure your spot for the Qiskit Fall Fest 2026 at MIT-ADT University.",
};

export default function RegisterPage() {
    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-20 lg:pt-40 lg:pb-32">
            <SectionContainer>
                <div className="max-w-3xl mx-auto flex flex-col gap-10">

                    {/* Header Section */}
                    <div className="flex flex-col gap-4">
                        <div className="text-primary font-mono text-sm font-semibold">
                            JOIN THE EVENT
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                            Reserve your spot.
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Join us on <span className="font-semibold text-gray-900">November 3, 2026</span> at MIT Art, Design and Technology University for a day of hands-on quantum computing. Registration is free and open to students from all universities.
                        </p>
                    </div>

                    {/* Registration Form */}
                    <RegistrationForm />

                </div>
            </SectionContainer>
        </div>
    );
}