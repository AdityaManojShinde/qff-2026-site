// The only file a hex colour literal is allowed to appear in (AGENTS.md §3, CONTRACT.md
// "Definition of done"). Values are copied verbatim from CONTRACT.md's Exact values and
// Pinned conventions tables. `app/globals.css` mirrors these as CSS custom properties —
// there is no build step that generates one from the other, so keep them in sync by hand.

export const palette = {
  purple90: "#31135E",
  magenta40: "#FF7EB6",
  purple60: "#8B3FFC",
  purple50: "#A56EFF",
  purple40: "#BE95FF",
  purple30: "#D4BBFF",
  magenta30: "#FFAFD2",
  blue60: "#0F62FE",
  coolGray10: "#F2F4F8",
  gray10: "#F4F4F4",
  gray100: "#161616",
  gray70: "#525252",
  gray80: "#393939",
} as const;

// Not in CONTRACT.md's palette — there is no pinned warning/error colour there.
// Chosen as IBM Carbon's support-error red, since CONTRACT.md's whole palette is
// sourced from Carbon. Needs Pushkar's sign-off and a CONTRACT.md Exact values entry.
const carbonRed60 = "#DA1E28";

// CONTRACT.md "Semantic assignment" table, plus `warning` (see note above).
export const semantic = {
  surfacePrimary: palette.purple90,
  surfaceSecondary: palette.gray10,
  textOnDark: palette.gray10,
  textOnLight: palette.gray100,
  textMuted: palette.gray70,
  accentCorrection: palette.magenta40,
  accentSoft: palette.magenta30,
  interactive: palette.blue60,
  warning: carbonRed60,
} as const;

export const typography = {
  fontSans: '"IBM Plex Sans", system-ui, sans-serif',
  fontMono: '"IBM Plex Mono", ui-monospace, monospace',
} as const;
