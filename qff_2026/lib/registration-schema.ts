import * as z from "zod";

// Single source of truth for what a valid registration looks like — imported by
// RegistrationForm.tsx (client-side UX) AND app/api/register/route.ts (the check
// that actually matters, since client-side validation alone can always be bypassed
// with a raw curl/fetch). Keeping one copy means the two can't quietly drift apart.
// session stays a plain (non-enum) string, not z.enum([...]): the form's default
// state before anything is picked is "", and RegistrationForm.tsx's defaultValues
// needs a value that type-checks against this schema — z.enum() has no "" member,
// z.string().min(1) does the same runtime job (empty is rejected on submit) without
// fighting react-hook-form's typing.
export const registrationSchema = z.object({
    name: z.string().min(2, "Full name must be at least 2 characters"),
    email: z.email("Please enter a valid email"),
    phone: z.string().min(10, "Please enter a valid phone number"),
    college: z.string().min(2, "College name is required"),
    year: z.string().min(1, "Year of study is required"),
    session: z.string().min(1, "Please select a session"),
});

export type RegistrationInput = z.infer<typeof registrationSchema>;

// The client's session labels ("Morning"/"Afternoon"/"Full Day") describe TIME OF
// DAY, but the schedule (content/sessions.ts) names the sessions by CONTENT
// (Quantum 101, Hands-on with Qiskit). This mapping bridges the two so the database
// stores the meaningful value, not the time-of-day one — but the real fix is
// reconciling the form's option labels with content/sessions.ts so there's only
// one vocabulary for this across the site. Flagging, not fixing here.
//
// Partial, not Record<string, string>: session is a plain string above (see note),
// so an unrecognized value is a real possibility the server must handle, not a type
// error that can't happen. app/api/register/route.ts checks for `undefined` here
// and rejects with INVALID_INPUT rather than letting it reach the database.
export const SESSION_CHOICE_MAP: Partial<Record<string, string>> = {
    morning: "q101",
    afternoon: "handson",
    "full-day": "both",
};
