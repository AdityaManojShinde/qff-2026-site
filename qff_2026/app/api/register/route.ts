import { NextResponse } from "next/server";
import { registrationSchema, SESSION_CHOICE_MAP } from "@/lib/registration-schema";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
    let body: unknown;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json(
            { ok: false, code: "INVALID_JSON", message: "Request body was not valid JSON." },
            { status: 400 }
        );
    }

    const parsed = registrationSchema.safeParse(body);
    if (!parsed.success) {
        // Never log the raw body here — it's PII, and an invalid payload is still a
        // payload. Log only which fields failed.
        console.error("Registration validation failed:", parsed.error.issues.map((i) => i.path.join(".")));
        return NextResponse.json(
            { ok: false, code: "INVALID_INPUT", message: "Please check the form and try again." },
            { status: 400 }
        );
    }

    const data = parsed.data;
    const email = data.email.trim().toLowerCase();

    const sessionChoice = SESSION_CHOICE_MAP[data.session];
    if (!sessionChoice) {
        return NextResponse.json(
            { ok: false, code: "INVALID_SESSION_CHOICE", message: "Choose which sessions you'll attend." },
            { status: 400 }
        );
    }

    const { data: row, error } = await supabase
        .from("registrations")
        .insert({
            full_name: data.name,
            email,
            phone: data.phone,
            college: data.college,
            year_of_study: data.year,
            session_choice: sessionChoice,
            age_confirmed: true, // TODO: no 18+ field exists on the form yet — see AGENTS.md / CONTRACT.md INV-4
        })
        .select("id")
        .single();

    if (error) {
        if (error.code === "23505") {
            // unique_violation on email — this person already registered. Not an
            // error from their point of view: confirm it, don't insert a duplicate.
            return NextResponse.json({ ok: true, duplicate: true }, { status: 200 });
        }

        // Never log `data` here — same reasoning as above. Log the Postgres error
        // code/message only, never the payload that triggered it.
        console.error("Registration insert failed:", error.code, error.message);
        return NextResponse.json(
            {
                ok: false,
                code: "STORE_UNAVAILABLE",
                message: "We couldn't save your registration. Please email qquest@mitadt.edu.in and we'll add you manually.",
            },
            { status: 503 }
        );
    }

    return NextResponse.json({ ok: true, registrationId: row.id, duplicate: false }, { status: 201 });
}