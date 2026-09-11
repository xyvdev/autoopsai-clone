# Staging UI notes

These notes match the on-page **What’s new on staging** panel. Staging-only — not for production/`main`.

## Sticky “You’re on Staging” banner

**What:** A slim, dismissible bar sits at the top of every page so reviewers know this is staging, not production.

**Why:** Staging and prod can look identical. A quiet environment marker prevents accidental “this is live” confusion without looking like a broken site.

## Hero trust strip

**What:** Three proof points sit under the primary CTA: Built for SMBs, Live in 7 days, and Works in your inbox. The Book CTA is larger and more isolated.

**Why:** The headline was doing all the work. A short trust row answers “is this for me?” before the fold, and extra CTA weight makes the next step obvious.

## Mini-Audit card emphasis

**What:** The free 15-min Mini-Audit is marked Recommended, visually stronger than the $999 assessment, and stacks first on mobile with room for the badge.

**Why:** Reviewers should immediately see the free offer as the default path. Equal-weight cards made the paid assessment compete with the intended starting point.

## Softer card motion

**What:** Feature and outcome cards fade in on scroll and use a lighter hover lift. Motion respects prefers-reduced-motion and uses CSS plus a small IntersectionObserver — no extra libraries.

**Why:** A little motion helps the page feel considered on staging review, without hurting performance or distracting from the copy.

## This “What’s new on staging” panel

**What:** The floating control opens a staging-only changelog with a short What and Why for each UI change.

**Why:** Reviewers should not have to leave the deploy or hunt in a markdown file to understand what changed and why.

Booking CTAs remain stubbed (`href="#"` + existing modal). No live calendar destinations were connected.
