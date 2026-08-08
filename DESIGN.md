# Design Decisions — Redesign

This file records the identity, communication, and visual decisions behind the
redesign, per the redesign spec. Reference this before making further changes
to copy or visual system so decisions stay consistent.

## 1. Identity

**Statement:** Ian builds software for real organizations and real
constraints — a community foundation, a neighborhood marketplace, a parking
system that has to work with an actual camera and actual cars — approached
with the patience of someone trained to sit with a problem before writing
code.

**What connects the projects:** none of them are demos. Each one has a real
counterpart it has to work for — an NGO that needs donations to actually
clear, a neighborhood that needs trust, a parking lot with real vehicles.
The mathematics background shows up less as "logical thinker" branding and
more as a specific, checkable habit: define the problem precisely before
touching an implementation.

**90-second takeaway:** Ian picks problems with a real-world counterpart, and
he can explain the decisions he made, not just the stack he used.

**What's different, evidenced (not claimed):**
- Sits with problem definition before implementation (Mathematics background)
- Works across product and engineering, not just interface (Foundation site:
  content model, donations, comms — end to end)
- Honest about role — distinguishes "built this alone" from "was one of a
  team" (EGESHASMART)

## 2. Communication

Voice: direct, specific, calm. No "passionate," no "innovative solutions," no
unsupported claims. Every claim about capability should be followed by, or
replaced by, the evidence for it.

Hero: answers who / what he builds / what's worth remembering, without
requiring interpretation.

## 3. Information architecture

Navigation: **Work · Approach · About · Contact** — "Skills" dropped as a
primary nav item; capability is demonstrated through Work and summarized
(not inventoried) in Approach.

Homepage order: Intro → Selected Work → How I Work (Approach) → About →
Contact. Work moves ahead of About and Approach because the work is the
strongest evidence on the site.

Project detail pages restructured around: one-line statement, context/role/
status, problem, constraints, approach, a specific decision, implementation,
what was difficult, what changed/exists now, links. Not every project fills
every field — EGESHASMART (team academic project) does not get an
"implementation ownership" narrative it doesn't deserve.

## 4. Visual identity

**Color — Direction C (dark, but not the sage/green "tasteful developer"
default):** kept a dark base (works well for long reading, and Ian's earlier
preference), but moved off green/sage — which the spec calls out directly as
an increasingly generic developer-portfolio signal — toward a warm clay/ochre
accent. Reasoning: it ties to the actual identity (grounded, real-world,
Kenyan-context work) rather than being chosen because it looks tasteful next
to a dark background.

- Background: `#14110F`
- Surface: `#1E1A17`
- Primary text: `#F5F1EA`
- Secondary text: `#9C948A`
- Accent (single): `#C1622D`
- Rule/border: `#2A2521`

**Typography:** display and body type now match the Mwenda Kimathi
Foundation site's system — Syne for display/headings, Space Grotesk for body
text — at Ian's direction, so the two sites Ian built and maintains share a
consistent type identity rather than each reinventing one. (Earlier version
of this document used Source Serif 4 + Inter; superseded.) JetBrains Mono
kept but demoted — used only for metadata (dates, links, status), not for
section labels or every small piece of UI chrome.

**Removed:** the hero's graph-paper grid background (decorative math
signaling with no informational purpose — content already establishes the
math background). Section numbering (§01, §02) removed from nav-level
sections since it didn't reinforce real narrative order; kept as plain
numbering only in the project index, where order is meaningful (most
significant work first).

**Shape language:** project index moved from equal-width cards to an
editorial list — full-width blocks with a number, title, one-line
description, role/focus metadata, and a text link — because the projects are
not equivalent catalogue entries and shouldn't be presented as such.

**Skills:** removed as a standalone homepage section. Folded into Approach as
three short capability statements (not a tag wall), with detailed technology
lists staying at the project level, where they're evidence rather than
inventory.
