"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";
import { Loader2 } from "lucide-react";

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

const formSchema = z.object({
    name: z.string().min(2, "Full name must be at least 2 characters"),
    email: z.email("Please enter a valid email"),
    phone: z.string().min(10, "Please enter a valid phone number"),
    college: z.string().min(2, "College name is required"),
    year: z.string().min(1, "Year of study is required"),
    session: z.string().min(1, "Please select a session"),
});

type FormData = z.infer<typeof formSchema>;

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

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
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
        try {
            console.log("Form Submitted:", data);
            // Add your API submission logic here
            await fetch("/api/register", { method: "POST", body: JSON.stringify(data) });
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