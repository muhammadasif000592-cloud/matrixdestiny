# Internal Linking Rules — matrixdestiny.co

## Core principle

No orphan pages. Every page must be reachable from at least two other pages and must itself link to at least two other pages. Internal links are a ranking system — they distribute authority and signal topical relationships to Google and AI retrieval systems.

## Link direction rules

Every page links in four directions:

| Direction | What it means | Example |
|---|---|---|
| Upward | Links to the pillar or HUB that governs this page | Arcana page → "What is Matrix of Destiny?" pillar |
| Horizontal | Links to sibling pages in the same cluster | Arcana 8 → Arcana 11, Arcana 4 |
| Downward | Links to terminal or spoke pages this page governs | Pillar → all arcana pages in cluster |
| Lateral | Links to calculator on every page | Every page → Calculator |

## Minimum link counts by page type

| Page type | Upward | Horizontal | Downward | To calculator |
|---|---|---|---|---|
| Arcana entity page | 1 | 2 (prev/next arcana) | — | 1 |
| Pillar HUB | — | 1–2 (related pillars) | All cluster spokes | 1 |
| Compatibility page | 1 | 2 (related arcana) | — | 1 |
| Emotional state page | 1 | 2 (related arcana) | — | 1 |
| Homepage | — | All pillar clusters | — | 1 (primary CTA) |

## Arcana page linking requirements

Every arcana page must include:

1. **Breadcrumb navigation** — Home > Arcana > [Arcana number and name]
2. **Sibling navigation** — Previous arcana / All arcana / Next arcana
3. **WORKS-WITH links** — Every arcana number in the WORKS-WITH field must link to that arcana's page
4. **CONFLICTS-WITH links** — Every arcana number in the CONFLICTS-WITH field must link to that arcana's page
5. **Calculator CTA** — At the bottom of every arcana page

The Arcana layout handles items 2, 3, 4, and 5 automatically. The breadcrumb is rendered by the layout. No manual linking needed in content — only ensure the frontmatter relationship fields are correct.

## Anchor text rules

**Do:**
- Use the emotional problem the destination page resolves: "why you lose momentum before finishing"
- Use the arcana name and number together: "Arcana 11 — Strength"
- Use the page's actual H1 or a meaningful excerpt from it

**Do not:**
- Use "click here", "learn more", "read this"
- Use the URL as anchor text
- Use identical anchor text for links to different destinations
- Use keyword-stuffed anchors: "best arcana 8 meaning destiny matrix analysis"

## Pillar-to-spoke linking

Every pillar HUB page must list and link to every spoke page in its cluster. This is how cluster authority is built — the pillar distributes link equity to the spokes, and the spokes link back to the pillar.

Structure:
```
Pillar HUB: "What is Matrix of Destiny?"
  └── Spoke: Arcana 1 — The Magician
  └── Spoke: Arcana 2 — The High Priestess
  └── Spoke: Arcana 3 — The Empress
  ... (all 22 arcana)
  └── Bridge: Compatibility
  └── Bridge: Emotional state clusters
```

## Calculator linking rule

The calculator is the semantic center of the site. Every page must link to it — not buried in footer, but as a contextual CTA within the page content.

Acceptable positions for the calculator link:
- End of main content body (before FAQ)
- Within a callout section after the entity table
- As a dedicated CTA block at the bottom of the page

The layout's default CTA block handles this automatically on arcana pages. Do not remove it.

## Orphan page prevention

Before publishing any new page, verify:

1. At least one existing page links to it (or will be updated to link to it)
2. The new page links upward to its pillar
3. The new page links to the calculator
4. The new page links horizontally to at least 2 related pages

If any of these are missing, do not publish until the links are in place.

## Internal link audit trigger

Run an internal link audit when:
- A new cluster is completed (all arcana in a new language, a new pillar)
- A page is deleted or URL changes
- The site exceeds 100 pages

The audit should identify: orphan pages, pages with only 1 inbound link, pages that don't link to the calculator.
