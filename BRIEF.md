# BRIEF — QFF26 Site (QQuEST × MIT-ADT)

*One page. Read in 3 minutes. Rewritten whenever state changes.*

**What this is:** the public site for Qiskit Fall Fest 2026 at MIT-ADT Pune on 3 November 2026 — lets a student anywhere in Pune decide whether the fest is for them and register, and leaves behind an honest reference on what quantum computing can and cannot do.

**Live at:** `https://qff-2026-site.vercel.app` · **Repo:** https://github.com/qquestclub/qff-2026-site
**Lead:** Pushkar Kumar — final say on everything, including every content story.

---

## Where things stand

**Milestone:** M1 — The site says something true
**Exit criteria:** every section renders correctly, every claim is sourced, zero placeholder text reachable in production, and the Register CTA points somewhere real

**Progress:** 29 of 86 tasks checked in `spec/tasks.md`

The site is live at `https://qff-2026-site.vercel.app`, on **Vercel**, not the Cloudflare Pages architecture originally specced — see D-013. Most of M1 is built and confirmed rendering on the production URL: Hero, About, Decade, Myths, Sessions, Speakers, Schedule, FAQ, Checklist and Venue (sections 01–10) are all live. Sessions and Speakers content specifically are done and shipped, though the Speakers section still carries an explicit placeholder speaker pending IBM's confirmation (`content/speakers.ts`, `isPlaceholder: true`).

`Register` exists as a real page with a working-looking form, but its backend is **intentionally incomplete** — paused pending a decision on the registration database (D1 vs. a Vercel-native store; see D-002). Do not treat the current `app/api/register/` route as a finished or safe path; it is a placeholder implementation, not the M2 build-out.

**Last done:** Vercel deploy (retroactively logged 14 September 2026 — see `AGENT_LOG.md`); Sessions and Speakers sections shipped; docs reconciled to match actual deployed state.
**Next:** Resolve D-002 (registration backend) — it blocks the API route, the Cloudflare/Vercel architecture question, and the rest of M2.

**Deadline reality:** the fest is 3 November 2026. M1 target was 25 September; M2 target 30 September; M3 gated on sponsorship confirmed by 10 October.

---

## Prompt for the next session

Copy this into any coding agent:

```
Read AGENTS.md, then CONTRACT.md, then spec/plan.md and spec/tasks.md.
Then read the top 3 entries of AGENT_LOG.md.

Tell me which milestone is active and which task you propose next.
Do not write code yet.
```

---

## Three things most likely to break

1. **The myths and decade content gets cut.** `content/myths.ts` and `content/decade.ts` are writing tasks, not coding tasks, so they slip first under deadline pressure — and they are the only reason this site differs from the other fourteen in the cohort. If M1 closes without them, M1 has not closed.
2. **A preview URL gets submitted to IBM.** One community in this cohort has already submitted a localhost address; another submitted a branch-preview URL. Both are permanently broken on IBM's page. Read INV-7 before submitting anything anywhere.
3. **The registration form breaks quietly in October and nobody notices.** Mitigated by the weekly test submission in `smoke.md` §7. A form that has been broken for three weeks is the realistic disaster on this project.

Runner-up: the Google service-account credential gets committed while someone is making the Sheets call work. It is compromised permanently at that point — rotate, do not just delete the commit.

---

## Where everything else lives

| Question | File |
|---|---|
| What must never break | `CONTRACT.md` |
| Rules for any agent, pinned stack | `AGENTS.md` |
| What we're building and for whom | `spec/product.md` |
| Structure, capability register, quotas | `spec/architecture.md` |
| Milestones and anti-goals | `spec/plan.md` |
| The task list | `spec/tasks.md` |
| How correctness is proven | `spec/evals.md` |
| Pre-ship manual checks | `spec/smoke.md` |
| Why things are the way they are | `spec/decisions.md` |
| What happened last session | `AGENT_LOG.md` |

**Design tokens** (Carbon palette, IBM Plex) are in `CONTRACT.md` under Exact values — pinned there rather than in architecture because divergence is a bug, not a preference.

**Still unknown, do not invent:** venue name and address, speaker name/title/bio, coordinator email for the under-18 route, team hours per week. See `spec/architecture.md` §9.
