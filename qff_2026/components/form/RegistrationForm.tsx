"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import { Loader2 } from "lucide-react";

import { registrationSchema, type RegistrationInput } from "@/lib/registration-schema";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

// Validation rules live in lib/registration-schema.ts and are shared with
// app/api/register/route.ts — don't redefine them here, that's how the two
// quietly drift apart.
type FormData = RegistrationInput;

// Adjust these to match the actual year and session options for your event.
const YEAR_OPTIONS = ["1st Year", "2nd Year", "3rd Year", "4th Year", "Other"];
const SESSION_OPTIONS = [
    { value: "morning", label: "Morning Session" },
    { value: "afternoon", label: "Afternoon Session" },
    { value: "full-day", label: "Full Day (both sessions)" },
];

const FORM_ID = "registration-form";

export default function RegistrationForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

    const form = useForm<FormData>({
        resolver: zodResolver(registrationSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            college: "",
            year: "",
            session: "",
        },
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        setSubmitError(null);
        setSubmitSuccess(null);
        try {
            const res = await fetch("/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            const body = await res.json();

            // fetch() only rejects on a network failure — a 400/503 response still
            // resolves normally, so this check is the only thing standing between a
            // genuinely failed registration and a user who thinks it succeeded.
            if (!res.ok || body.ok === false) {
                setSubmitError(body.message ?? "Something went wrong. Please try again.");
                return;
            }

            setSubmitSuccess(
                body.duplicate
                    ? "You're already registered for Qiskit Fall Fest 2026 — no need to submit again."
                    : "You're registered! We'll be in touch closer to the event."
            );
            form.reset();
        } catch (err) {
            console.error(err);
            setSubmitError("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="mx-auto w-full max-w-xl px-4 py-10">
            <Card>
                <CardHeader>
                    <CardTitle>Qwiskit Fall Fest 2026 Registration</CardTitle>
                    <CardDescription>
                        Fill in your details below to reserve your spot. All fields are
                        required unless marked optional.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form id={FORM_ID} onSubmit={form.handleSubmit(onSubmit)}>
                        <FieldGroup className="gap-6">
                            <div className="grid gap-6 sm:grid-cols-2">
                                <Controller
                                    name="name"
                                    control={form.control}
                                    render={({ field, fieldState }) => (
                                        <Field
                                            data-invalid={fieldState.invalid}
                                            className="sm:col-span-2"
                                        >
                                            <FieldLabel htmlFor={field.name}>Full name</FieldLabel>
                                            <Input
                                                {...field}
                                                id={field.name}
                                                aria-invalid={fieldState.invalid}
                                                placeholder="Jane Doe"
                                                autoComplete="name"
                                            />
                                            {fieldState.invalid && (
                                                <FieldError errors={[fieldState.error]} />
                                            )}
                                        </Field>
                                    )}
                                />

                                <Controller
                                    name="email"
                                    control={form.control}
                                    render={({ field, fieldState }) => (
                                        <Field data-invalid={fieldState.invalid}>
                                            <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                                            <Input
                                                {...field}
                                                id={field.name}
                                                type="email"
                                                aria-invalid={fieldState.invalid}
                                                placeholder="jane@college.edu"
                                                autoComplete="email"
                                            />
                                            {fieldState.invalid && (
                                                <FieldError errors={[fieldState.error]} />
                                            )}
                                        </Field>
                                    )}
                                />

                                <Controller
                                    name="phone"
                                    control={form.control}
                                    render={({ field, fieldState }) => (
                                        <Field data-invalid={fieldState.invalid}>
                                            <FieldLabel htmlFor={field.name}>
                                                Phone number
                                            </FieldLabel>
                                            <Input
                                                {...field}
                                                id={field.name}
                                                type="tel"
                                                aria-invalid={fieldState.invalid}
                                                placeholder="98765 43210"
                                                autoComplete="tel"
                                            />
                                            {fieldState.invalid && (
                                                <FieldError errors={[fieldState.error]} />
                                            )}
                                        </Field>
                                    )}
                                />

                                <Controller
                                    name="college"
                                    control={form.control}
                                    render={({ field, fieldState }) => (
                                        <Field
                                            data-invalid={fieldState.invalid}
                                            className="sm:col-span-2"
                                        >
                                            <FieldLabel htmlFor={field.name}>College</FieldLabel>
                                            <Input
                                                {...field}
                                                id={field.name}
                                                aria-invalid={fieldState.invalid}
                                                placeholder="MIT ADT University"
                                            />
                                            {fieldState.invalid && (
                                                <FieldError errors={[fieldState.error]} />
                                            )}
                                        </Field>
                                    )}
                                />

                                <Controller
                                    name="year"
                                    control={form.control}
                                    render={({ field, fieldState }) => (
                                        <Field data-invalid={fieldState.invalid}>
                                            <FieldLabel htmlFor={field.name}>
                                                Year of study
                                            </FieldLabel>
                                            <Select
                                                name={field.name}
                                                value={field.value}
                                                onValueChange={field.onChange}
                                            >
                                                <SelectTrigger
                                                    id={field.name}
                                                    aria-invalid={fieldState.invalid}
                                                    className="w-full"
                                                >
                                                    <SelectValue placeholder="Select year" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {YEAR_OPTIONS.map((year) => (
                                                        <SelectItem key={year} value={year}>
                                                            {year}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            {fieldState.invalid && (
                                                <FieldError errors={[fieldState.error]} />
                                            )}
                                        </Field>
                                    )}
                                />

                                <Controller
                                    name="session"
                                    control={form.control}
                                    render={({ field, fieldState }) => (
                                        <Field data-invalid={fieldState.invalid}>
                                            <FieldLabel htmlFor={field.name}>Session</FieldLabel>
                                            <Select
                                                name={field.name}
                                                value={field.value}
                                                onValueChange={field.onChange}
                                            >
                                                <SelectTrigger
                                                    id={field.name}
                                                    aria-invalid={fieldState.invalid}
                                                    className="w-full"
                                                >
                                                    <SelectValue placeholder="Select session" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {SESSION_OPTIONS.map((session) => (
                                                        <SelectItem
                                                            key={session.value}
                                                            value={session.value}
                                                        >
                                                            {session.label}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            {fieldState.invalid && (
                                                <FieldError errors={[fieldState.error]} />
                                            )}
                                        </Field>
                                    )}
                                />
                            </div>

                            {submitError && (
                                <p className="text-sm text-destructive">{submitError}</p>
                            )}
                            {submitSuccess && (
                                <p className="text-sm" style={{ color: "var(--accent-correction)" }}>
                                    {submitSuccess}
                                </p>
                            )}
                        </FieldGroup>
                    </form>
                </CardContent>

                <CardFooter>
                    <Button
                        type="submit"
                        form={FORM_ID}
                        className="w-full"
                        disabled={isSubmitting}
                    >
                        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        {isSubmitting ? "Registering..." : "Register"}
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}