import { createClient } from "@supabase/supabase-js";

// Server-only. Never import this from a "use client" file — SUPABASE_SERVICE_ROLE_KEY
// has no NEXT_PUBLIC_ prefix specifically so it can't end up in the client bundle.
// It bypasses Row Level Security entirely, so treat it like a database password.

const url = process.env.SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceRoleKey) {
    throw new Error(
        "SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set (Vercel → Project → Environment Variables)."
    );
}

export const supabase = createClient(url, serviceRoleKey, {
    auth: { persistSession: false }, // this is a server client, not a browser session
});
