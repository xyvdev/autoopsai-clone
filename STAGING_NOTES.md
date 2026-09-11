# Staging UI notes

These notes match the on-page **What’s new on staging** panel. Staging-only — not for production/`main`.

Direction: a **night-console / luxury ops desk** redesign. Ink, warm ivory, and gold replace the previous light emerald/slate marketing page. Booking CTAs remain stubbed (`href="#"` + existing modal).

## Night-console color system

**What:** The site is now ink, warm ivory, and gold instead of light slate and emerald. Surfaces, borders, buttons, and section fields all share one dark luxury palette. Light mode is a cream/espresso inversion of the same system — not the old marketing greens.

**Why:** Staging review needed an unmistakable new direction. Recoloring one accent was not enough; the whole token set had to change so every screen reads as a different product.

## Serif display + console mono type

**What:** Headlines use Fraunces (italic for emphasis). UI copy uses Outfit. Labels, badges, and status chips use IBM Plex Mono. Hierarchy is larger, more editorial, and less “SaaS rounded sans.”

**Why:** Typography is the fastest way to leave the previous Plus Jakarta / Inter marketing look. Serif display plus mono chrome is the night-desk voice.

## Split-panel hero with ops board

**What:** The centered hero is gone. Copy sits on the left; a live-looking operations board on the right shows queue, recovered hours, channel, and build status. Proof points are LED-style chips, not a pill strip.

**Why:** A new visual direction needs a new fold structure. The board makes “quiet automation” tangible instead of another centered headline over a green button.

## Before / After dual-rail story

**What:** The four equal feature cards are now two rails: Before (01–02) and After (03–04), like a field log. The After rail is gold-lit.

**Why:** The original grid treated every beat the same. A dual rail makes the transformation the layout, not just the copy.

## Outcomes as a command spec sheet

**What:** Emoji cards are replaced by a numbered spec sheet: index, outcome line, and a mono signal tag (AP, INBOX, CAL, NOTES, CRM).

**Why:** The old six-column emoji grid still felt like a generic marketing features row. A spec sheet matches the ops-console tone and scans better on mobile.

## How-it-works process stations

**What:** Three connected stations (01–03) sit on a gold track instead of three equal rounded cards. Large serif numerals carry the sequence.

**Why:** The protocol should feel like a procedure, not another card grid. Stations make the 15-min → 7-day → it-runs path read as one line.

## Foil-ticket pricing cards

**What:** Audit options are membership-ticket cards: sharp corners, gold foil on the recommended Mini-Audit, dimmer console treatment on the $999 assessment. Free still stacks first on mobile.

**Why:** Pricing needed to join the luxury-console system. The Mini-Audit remains the default path, now as a foil pass instead of a green “popular” card.

## Console staging banner

**What:** The “You’re on Staging” bar is restyled as an ENV // STAGING ticker: gold on ink, mono type, dismiss still session-scoped.

**Why:** The environment marker has to belong to the new chrome. A leftover emerald strip would look like production debris on the night desk.

## Dark-first default + console header

**What:** First paint is dark (not light). The header is a night-desk lockup (AO monogram, “ops // night desk”) with Log / Signals / Protocol / Access. Theme toggle still cycles Auto / Dark / Light.

**Why:** A luxury night console that opens in the old light theme would undercut the redesign. Dark-first makes staging feel like the intended product.

## This “What’s new on staging” panel

**What:** The floating control and drawer match the night-console chrome. Each item below is a staging UI change with a short What and Why.

**Why:** Reviewers should not have to leave the deploy or hunt in a markdown file to understand what changed and why.

Booking CTAs remain stubbed (`href="#"` + existing modal). No live calendar destinations were connected.
