import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// Hit on a schedule by .github/workflows/keepalive.yml. Free Supabase projects pause
// after 7 days with no API activity — this exists purely to generate that activity
// before it happens. Returns only a boolean, never any row content: this endpoint has
// no auth on it (it can't, a scheduled job has nowhere to keep a secret that isn't
// itself just another thing to leak), so it must never be able to leak data even if
// someone finds the URL.
export async function GET() {
    const { error } = await supabase.from("registrations").select("id").limit(1);

    if (error) {
        console.error("Keepalive query failed:", error.code, error.message);
        return NextResponse.json({ ok: false }, { status: 503 });
    }

    return NextResponse.json({ ok: true });
}
