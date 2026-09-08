"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export default function RegistrationForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // TODO: Replace with your actual submission logic (e.g., fetch to an API or Formspree)
        // const formData = new FormData(e.currentTarget);

        // Simulating network request
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSuccess(true);
    };

    if (isSuccess) {
        return (
            <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">Registration Received!</h3>
                <p>Thank you for registering for Qiskit Fall Fest 2026. We will send a confirmation email with further details shortly.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-sm">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="fullName" className="text-sm font-semibold text-gray-900">
                        Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Jane Doe"
                    />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-900">
                        Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="jane@example.com"
                    />
                </div>
            </div>

            {/* University / College */}
            <div className="flex flex-col gap-2">
                <label htmlFor="university" className="text-sm font-semibold text-gray-900">
                    University / College <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    id="university"
                    name="university"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="e.g. MIT-ADT University"
                />
            </div>

            {/* Experience Level */}
            <div className="flex flex-col gap-2">
                <label htmlFor="experience" className="text-sm font-semibold text-gray-900">
                    Quantum Computing Experience <span className="text-red-500">*</span>
                </label>
                <select
                    id="experience"
                    name="experience"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                >
                    <option defaultValue={"none"} disabled selected>Select your experience level</option>
                    <option value="none">None - I&#39;m completely new!</option>
                    <option value="beginner">Beginner - I know the basics (qubits, gates)</option>
                    <option value="intermediate">Intermediate - I&#39;ve used Qiskit before</option>
                    <option value="advanced">Advanced - I build quantum algorithms</option>
                </select>
            </div>

            {/* Expectations */}
            <div className="flex flex-col gap-2">
                <label htmlFor="expectations" className="text-sm font-semibold text-gray-900">
                    What are you hoping to learn or achieve at the event?
                </label>
                <textarea
                    id="expectations"
                    name="expectations"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-y"
                    placeholder="Tell us a bit about why you want to attend..."
                />
            </div>

            {/* Submit Button */}
            <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto self-start mt-2 rounded-none px-10 py-6 text-lg"
            >
                {isSubmitting ? "Submitting..." : "Complete Registration"}
            </Button>

            <p className="text-xs text-gray-500 mt-2">
                By registering, you agree to abide by the Qiskit Fall Fest Code of Conduct.
            </p>
        </form>
    );
}