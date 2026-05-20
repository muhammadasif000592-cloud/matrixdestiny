# Arcana Page Template v1 — Generation 2

**Status:** Mandatory. Every arcana page built or rebuilt from this point forward must follow this structure exactly. No section may be omitted. Minimum word counts are hard floors, not targets.

**Generation 2 vs Generation 1:** Generation 1 pages (en/1–22, pt-br/1–22 pre-migration, uk/1–22 pre-migration) were built with a simplified structure: frontmatter + body sections + FAQ. Generation 2 adds emotional hook, quick answers table, definition block, semantic pull quotes, calculator CTA, and internal navigation. When rebuilding Generation 1 pages, apply this full template.

**Cross-references required before writing any page:**
- `arcana-ontology.md` — canonical domain, active/blocked poles, cross-references
- `arcana-differentiation.md` — what this arcana does NOT govern
- `arcana-14-temperance-content.md` — if writing arcana 14
- `translation-rules.md` — if writing PT-BR or Ukrainian
- `query-state-model.md` — for H1 and meta description formulas

---

## Section 1: Frontmatter

**Purpose:** Machine-readable metadata that the Arcana layout uses to render the entity table, FAQ accordion, hreflang, structured data, and sibling navigation. Every field is required. Missing or wrong values produce broken renders.

**Minimum word count:** N/A — accuracy over volume. Every field must be semantically correct against `arcana-ontology.md`.

**Required fields:**

```yaml
---
number: [integer 1–22]
name: "[Canonical name in this language — exact match to arcana-ontology.md names table]"
title: "[Arcana N — Name: Emotional problem statement in second person]"
description: "[Arcana N in the Matrix of Destiny represents [psychological function]. Discover [specific insight user gains about their pattern].]"
lang: "[en | pt-br | uk]"
relationships:
  isA: "[one-sentence archetype definition — psychological, not symbolic]"
  usedFor:
    - "[specific diagnostic use case 1 — starts with a verb]"
    - "[specific diagnostic use case 2]"
    - "[specific diagnostic use case 3]"
    - "[specific diagnostic use case 4]"
  worksWith:
    - [integer — canonical arcana number]
    - [integer]
    - [integer]
  conflictsWith:
    - [integer]
    - [integer]
  causes:
    - "[what this arcana produces when active — behavioral outcome]"
    - "[second active outcome]"
    - "[what this arcana produces when blocked — specific failure mode]"
    - "[second blocked outcome]"
faq:
  - q: "[Question 1: orientation state — 'What does it mean to have Arcana N...']"
    a: "[4+ sentences. State what the arcana indicates, active state, blocked state, cost of each.]"
  - q: "[Question 2: mechanism state — 'Why does blocked Arcana N cause [specific problem]?']"
    a: "[4+ sentences. Explain the psychological mechanism, not just the symptom.]"
  - q: "[Question 3: precision state — 'What is the difference between X and Y in this arcana?']"
    a: "[4+ sentences. Name two things that seem similar, show the precise distinction, and name a behavioral marker.]"
  - q: "[Question 4: scope state — 'Does Arcana N relate to [specific domain]?']"
    a: "[4+ sentences. Address a specific life domain — work, relationships, or a named pattern.]"
  - q: "[Question 5: action state — 'How do you work with Arcana N when it is blocked?']"
    a: "[4+ sentences. Name pole-specific practices. Concrete. Not generic 'self-awareness' advice.]"
---
```

**What makes it weak:**
- `title` is a noun phrase without an emotional problem statement: "Arcana 8 — Strength: Power and Authority"
- `description` restates the title or uses mystical language: "Discover the ancient wisdom of the Strength archetype"
- `isA` is symbolic rather than psychological: "archetype of the lion and the maiden"
- `usedFor` items don't start with verbs or are vague: "understanding your relationship with power"
- `worksWith`/`conflictsWith` numbers don't match `arcana-ontology.md`
- FAQ answers are under 4 sentences or answer a different question than asked

**What makes it strong:**
- `title` names a specific, recognizable emotional condition in second person
- `description` names the psychological function and the specific insight the reader gains
- `isA` uses behavioral language: "archetype of calibrated authority and integration of genuine strength through presence rather than dominance or submission"
- `usedFor` items are diagnostic use cases a real person would recognize as applying to their life
- `causes` distinguishes clearly between active outcomes and blocked outcomes
- FAQ answers are dense with mechanism — they explain HOW, not just WHAT

**Bad title example:**
> "Arcana 11 — Justice: The Archetype of Cause and Effect"

**Good title example:**
> "Arcana 11 — Justice: Why the Same Situations Keep Happening to You — and What You're Not Seeing"

---

## Section 2: Emotional Hook

**Purpose:** The first thing the reader sees after the H1. Three questions that name the specific emotional states this arcana resolves. The reader should recognize themselves in at least one. This section converts searchers into readers by confirming the page is about their actual experience.

**Minimum word count:** ~60 words (3 questions, roughly 20 words each)

**Placement in file:** First element of body content, before any prose.

**Format:**
```markdown
> Do you always need to be in control — even when it costs you the relationship?
> Or do you reflexively give up your position before the other person even pushes?
> And do you understand intellectually what's happening but still can't stop the pattern?
```

**What makes it weak:**
- Questions are vague or apply to everyone: "Do you struggle with your emotions?"
- Questions describe the arcana concept rather than the user's lived experience: "Are you interested in learning about power dynamics?"
- Questions use arcana vocabulary the reader doesn't have yet: "Is your Strength blocked?"

**What makes it strong:**
- Questions are specific enough that someone who doesn't have this block would answer "no"
- Each question targets a different emotional state within the arcana's cluster — not three versions of the same question
- Questions use the reader's internal language, not psychological or arcana vocabulary
- The three questions together cover the active pole, the dominant blocked pole, and the meta-awareness trap ("I know but I can't stop")

**Layout dependency:** This section currently renders as standard markdown blockquotes in the Arcana layout — no dedicated visual slot exists. Content will appear as indented blockquote text. For a styled question card treatment, `src/layouts/Arcana.astro` requires a Phase 2 update. Build the content now; flag visual styling as a separate layout task.

**Bad example:**
> Do you have issues with power?
> Do you find yourself in conflict with authority?
> Would you like to understand your relationship with control?

**Good example:**
> Do you need everyone to sign off on your decision before you'll act on something you already know is right?
> Or do you override others' choices without realizing you've done it — because their autonomy genuinely feels threatening?
> Do you see the dynamic clearly when you're outside it, but find yourself back in the same position the next time it matters?

---

## Section 3: Quick Answers Table

**Purpose:** Gives the analytically-oriented reader an immediate orientation before committing to reading the full page. Indexable, scannable, and extraction-ready for featured snippets. Reduces bounce rate from readers who want orientation before depth.

**Minimum word count:** ~120 words across the 6 rows

**Placement:** Immediately after the Emotional Hook, before the Definition Block.

**Format:**
```markdown
| | |
|---|---|
| **What it is** | [One clause: the psychological domain in plain language] |
| **Psychological axis** | [Pole A vs Pole B — the central tension] |
| **When active** | [One sentence: the specific capacity this arcana unlocks] |
| **When blocked** | [One sentence: the specific failure mode — name a concrete behavior] |
| **Life domains affected** | [Comma list: Professional, Relationships, [third domain]] |
| **Works with** | [Arcana N (Name), Arcana N (Name), Arcana N (Name)] |
```

**What makes it weak:**
- Rows use abstract language that doesn't differentiate this arcana from others: "When active: healthy functioning. When blocked: difficulties."
- The "Works with" row lists numbers without names
- "Psychological axis" is a restatement of the name rather than the tension: "Strength vs Weakness"

**What makes it strong:**
- Each row answers a different question — no row is redundant with another
- "When blocked" names a specific behavior a reader would recognize: "cannot delegate without monitoring every step"
- "Works with" row uses canonical names so the reader can follow links

**Layout dependency:** This section currently renders as a standard markdown table in the Arcana layout — no dedicated visual slot exists. Content will appear as a plain table. For a styled summary card or definition grid treatment, `src/layouts/Arcana.astro` requires a Phase 2 update. Build the content now; flag visual styling as a separate layout task.

**Bad example:**
> | **What it is** | An archetype about power |
> | **When blocked** | Difficulty with authority relationships |

**Good example:**
> | **What it is** | The psychological relationship with power — specifically whether you can hold authority or yield it without either action threatening your sense of self |
> | **When blocked** | Cannot pass a task to someone else without re-centralizing control; or gives up own position before any pressure is applied |

---

## Section 4: Definition Block

**Purpose:** Three sentences that define this arcana for the reader who is scanning or will share this content. Extraction-ready for AI summaries, pull quotes, and social sharing. No filler, no hedging, no mystical language. Each sentence must carry unique information — no sentence restates another.

**Minimum word count:** ~80 words (three dense sentences)

**Placement:** After the Quick Answers Table, before "What this arcana describes."

**Format:**
```markdown
**Arcana [N] — [Name]** in the Matrix of Destiny governs [specific psychological domain].

When active, [specific behavioral capacity — what the person can do that others with this block cannot].

When blocked, [specific failure mode with named poles and their costs] — [consequence that accumulates over time].
```

**What makes it weak:**
- Sentence 1 uses vague language: "governs important psychological themes around power"
- Sentence 2 describes a general positive trait rather than a specific capacity: "the person is confident and self-assured"
- Sentence 3 is too generic to distinguish this arcana from any other blocked arcana: "the person experiences difficulties in relationships and work"

**What makes it strong:**
- Sentence 1 is domain-precise — names exactly what this arcana governs and nothing else
- Sentence 2 names a capacity that is meaningfully absent in the blocked state (so the contrast is visible)
- Sentence 3 names both blocked poles and at least one concrete accumulating cost

**Layout dependency:** This section currently renders as standard markdown bold text and paragraphs in the Arcana layout — no dedicated visual slot exists for a distinct definition block. Content will appear as styled paragraph text. For a visually distinct definition card or callout box treatment, `src/layouts/Arcana.astro` requires a Phase 2 update. Build the content now; flag visual styling as a separate layout task.

**Bad example:**
> Arcana 8 in the Matrix of Destiny is about power and authority. When active, the person handles authority situations well. When blocked, they have problems with control.

**Good example:**
> Arcana 8 — Strength in the Matrix of Destiny governs the psychological relationship with power: whether you can hold authority proportionally and yield it when appropriate without either action threatening your identity. When active, you can delegate genuine authority and stay out of the work, receive direction without experiencing it as defeat, and respond to dominance attempts from groundedness rather than counter-dominance or collapse. When blocked, you relate to power in only two modes — control or surrender — and both produce accumulating costs: the control pole generates isolation and resistance, the surrender pole generates an invisible resentment ledger that eventually becomes unpayable.

---

## Section 5: What This Arcana Describes

**Purpose:** The core psychological mechanism. This section is where the reader goes from "this sounds like me" to "now I understand why it happens." It must explain the mechanism behind the pattern — not just name the pattern. The reader must feel the explanation is deeper than what they already knew.

**Minimum word count:** 200 words

**Section header:** `## What [Name] describes` (EN) / `## O que [Nome] descreve` (PT-BR) / `## Що описує [Назва]` (UK)

**Required elements:**
1. The psychological mechanism, named precisely (not "this arcana relates to power" — but "every person exists within structures of authority; Arcana 8 governs whether your relationship to those structures is calibrated or dysregulated")
2. The active state described mechanically — what the person can do, not just how they feel
3. The blocked state described as a specific collapse — not "difficulties" but the exact nature of the dysfunction
4. The binary / polarity framing — why the third mode (active) is inaccessible to the blocked person
5. Optional: a symbolic anchor (the card's image as a precise metaphor, if it illuminates the mechanism)

**What makes it weak:**
- Explains what the archetype symbolizes rather than what the person experiences: "Justice is symbolized by scales representing fairness and balance"
- Uses vague psychological language: "the person struggles with their relationship to authority"
- Describes outcomes without mechanisms: "people with this arcana blocked often find themselves in conflict"
- Shorter than 200 words

**What makes it strong:**
- Opens with a structural observation about the human condition that the arcana governs (not with the arcana itself)
- Names the specific mode of dysregulation with behavioral precision
- Explains WHY the blocked person can't simply choose the active mode — what makes the third mode inaccessible
- The reader who has this block recognizes the description as more accurate than anything they've previously read about the pattern

---

## Section 6: Active vs Blocked

**Purpose:** Behavioral recognition. The reader identifies which mode they're in. This section must be specific enough that someone without this block would not recognize themselves in the blocked descriptions. Generic "difficulties" and "challenges" are not acceptable — every bullet must name a concrete observable behavior.

**Minimum word count:** 300 words

**Section header:** `## Active versus blocked: how to identify` (EN) / `## Ativo versus bloqueado: como identificar` (PT-BR) / `## Активний проти заблокованого: як розпізнати` (UK)

**Required structure:**
- **Active [Name]:** 4 behavioral bullets — what the person can do when this arcana is functioning
- **Blocked [Name] ([dominant blocked pole]):** 4 behavioral bullets
- **Blocked [Name] ([secondary blocked pole]):** 4 behavioral bullets

**Each bullet must:**
- Describe a specific observable behavior, not a trait or feeling
- Be recognizable without psychological vocabulary
- Distinguish this arcana's block from other arcanas' blocks

**What makes a bullet weak:**
- Describes a feeling: "Feels anxious about authority"
- Is too generic: "Has difficulty in relationships"
- Could belong to any blocked arcana: "Struggles to express emotions"
- Describes a trait: "Is a controlling person"

**What makes a bullet strong:**
- Describes a specific action or inaction: "Delegates the task nominally then monitors every step and overrides the output at least once before delivery"
- Is specific enough to be wrong for some people: not every anxious person, not every conflict-averse person — specifically this pattern
- Names the mechanism driving the behavior: "Micromanages not to protect quality but to reduce the anxiety that arises whenever control is shared"

**Bad example:**
> - Has issues with power and control
> - Can be domineering at times
> - Sometimes gives in too easily

**Good example:**
> - Cannot delegate because every task passed to someone else is experienced as a threat to position — even when quality is not at risk and the delegation is clearly appropriate
> - In relationships, interprets a partner's autonomous decisions as challenges to be corrected rather than expressions of a separate person's genuine preferences
> - Prepares excessively for every situation involving authority because any outcome other than winning is experienced as losing, not as a neutral result

---

## Section 7: Professional Domain

**Purpose:** Shows the reader how this arcana's block manifests specifically at work. Must name mechanisms, not just outcomes. The reader with a professional problem that connects to this arcana's domain should finish this section knowing which behaviors to watch for.

**Minimum word count:** 200 words

**Section header:** Lives inside `## How it appears across life domains` (EN) as `**Professional life:**`

**Required elements:**
1. The dominant blocked pole's effect on the professional environment — systemic, not personal
2. The secondary blocked pole's effect — equally costly but different in texture
3. The active state — what the professional environment looks like when this arcana functions

**What makes it weak:**
- Generic professional advice: "It's important to communicate clearly with your team"
- Stays at the level of personal feelings: "The person feels anxious in meetings"
- Doesn't distinguish this arcana's professional failure mode from others'

**What makes it strong:**
- Names a specific organizational dysfunction, not just personal difficulty: "teams stop generating initiative because initiative is consistently overridden"
- Identifies the structural reason, not just the symptom: "the team's functioning narrows to what falls within the explicit permission structure — which is exactly what the blocked 8 leader unconsciously requires"
- The active state is described in behavioral terms that distinguish it from adjacent arcana's active states

---

## Section 8: Relationships Domain

**Purpose:** Shows the reader how this arcana's block produces specific relational dynamics. Must name the mechanism — why the relationship develops the way it does — not just describe that it's difficult.

**Minimum word count:** 200 words

**Required elements:**
1. The dominant blocked pole's relational mechanism — how it produces a specific dynamic with a partner
2. The secondary blocked pole's relational cost — the accumulating price, not just the symptom
3. The active state — what the relationship looks like when this arcana functions correctly in both people

**What makes it weak:**
- "People with this arcana blocked have difficulty in romantic relationships"
- Generic advice that could come from any self-help book
- Doesn't name the mechanism — only names the outcome

**What makes it strong:**
- Names the specific interpretation that drives the behavior: "the controlling person does not experience their behavior as control — it presents internally as 'taking care of'"
- Names the accumulation mechanism: "the slow accumulation of unspoken preference into an invisible resentment ledger that eventually becomes unpayable"
- The active state names what both people in the relationship are doing — not just what the person with the arcana is doing

---

## Section 9: Karmic Pattern

**Purpose:** Explains the origin of the block — where it came from and why it made sense in its original context. This is the section that shifts the reader from self-judgment to understanding. It must name: (1) the original environment, (2) the adaptation that was functional then, (3) why the adaptation misfires in adult contexts, (4) the direction of resolution.

**Minimum word count:** 200 words

**Section header:** `**Karmic pattern:**` — subheading within the life domains section

**Required elements:**
1. The original environment that shaped the block — specific, not generic: "environments where power was distributed in binary form" not "difficult childhood"
2. The adaptation that worked in that environment — name it as a functional strategy, not a flaw
3. Why the adult nervous system continues the adaptation in contexts where it no longer applies
4. The direction of resolution — what the work is, named precisely (not "heal your inner child" but "develop the third mode through specific bounded delegation")

**What makes it weak:**
- Vague origin: "early experiences with authority"
- Judgment language: "unhealthy coping mechanisms developed in childhood"
- Resolution direction is generic: "therapy and self-awareness"
- Doesn't explain WHY the pattern persists despite the person's intelligence and genuine desire to change

**What makes it strong:**
- Names the specific structural feature of the original environment: "a household governed by one person's unilateral authority, where power operated in poles and there was no stable middle"
- Names the adaptation as intelligent, not defective: "the submission pole is the continuation of the survival strategy that worked in the original environment"
- Explains the persistence mechanism: "the original template is encoded below the level of conscious navigation — you don't reproduce the dynamic because you choose to"
- Resolution direction is pole-specific and actionable: different practices for the dominance pole vs the submission pole

**Bad example:**
> The karmic block of this arcana often comes from childhood experiences that shaped the person's relationship with power. Working on this requires self-awareness and healing.

**Good example:**
> The karmic block of 8 originates almost universally in environments where power was distributed in binary form: someone had it absolutely, someone survived it. The adult nervous system continues treating proportional authority as if it were total domination — the response was calibrated for the original environment, not the current context. Both adult poles are direct adaptations to this original environment: the dominance pole is the acquisition of the power that was once external and threatening, now internalized as the only safe position; the submission pole is the continuation of the survival strategy that worked then, reproduced in adult contexts where the original threat no longer exists. The work is not to choose the opposite pole but to build genuine fluency in the third mode.

---

## Section 10: Entity Relationship Table

**Purpose:** Rendered by the Arcana layout from frontmatter `relationships` data. In the content file, this section is defined entirely via frontmatter — no markdown table needed in the body. The layout renders IS-A, USED-FOR, WORKS-WITH, CONFLICTS-WITH, and CAUSES as a formatted entity table with linked badges for worksWith and conflictsWith numbers.

**Minimum word count:** N/A — defined in frontmatter

**What makes it weak:**
- `isA` describes the card symbol rather than the psychological archetype: "a figure with a lion"
- `usedFor` items are abstract: "understanding yourself better"
- `causes` items don't distinguish active outcomes from blocked outcomes
- `worksWith` numbers don't match canonical ontology

**What makes it strong:**
- `isA` is behaviorally precise and different from every other arcana's isA
- `usedFor` items are specific enough that a reader with a different arcana block would read them and say "that's not my issue"
- `causes` clearly labels which outcomes are active and which are blocked
- All `worksWith` and `conflictsWith` numbers match the canonical cross-reference table in `arcana-ontology.md`

**Template check:** After writing, verify every worksWith/conflictsWith number against the cross-reference table in `arcana-ontology.md`. Wrong numbers are a data integrity error.

---

## Section 11: Semantic Pull Quotes

**Purpose:** Two or more sentences extracted directly from the body content that are dense enough to stand alone. Used by the layout for visual emphasis and by readers who are scanning. Also extraction-ready for social media, featured snippets, and AI summaries. Must be actual body text — not written separately.

**Minimum:** 2 pull quotes

**Placement in body:** Mark with a blockquote `>` immediately after the paragraph that contains the source text, or as a section break between major sections. The layout will visually differentiate these.

**Format:**
```markdown
> The dominance pole cannot tolerate sharing authority because sharing feels indistinguishable from losing. The submission pole cannot assert authority because asserting feels indistinguishable from becoming the dominator they adapted to survive.
```

**What makes a pull quote weak:**
- Too short to stand alone: "Power is complex."
- Requires context to make sense: "This is the third mode."
- Is a generic psychological observation not specific to this arcana

**What makes a pull quote strong:**
- Contains a complete insight that is surprising or counterintuitive
- Is specific enough to this arcana that it couldn't appear on any other arcana's page
- Uses the reader's language, not academic or arcana vocabulary
- Is 2–4 sentences — long enough to carry meaning, short enough to be scannable

**Extraction rule:** Do not write pull quotes separately. Find the two strongest sentences already in the body, then add the blockquote markup. If you can't find two strong candidates in the body, the body is not dense enough — strengthen the body, then extract.

**Layout dependency:** Pull quotes currently render as standard markdown blockquotes in the Arcana layout — the layout does NOT differentiate pull quotes from the emotional hook blockquotes in Section 2. Both use `>` syntax and will render identically. For a visually distinct pull quote treatment (larger type, accent color, visual separator), `src/layouts/Arcana.astro` requires a Phase 2 update to distinguish blockquote types by position or class. Build the content now; flag the styling distinction as a separate layout task.

---

## Section 12: Calculator CTA

**Purpose:** Converts the reader into a calculator user with a specific prompt that makes the CTA feel like the natural next step for someone reading this specific arcana's page. Generic "calculate your matrix" CTAs underperform because they break the reader's engagement with their specific question. The CTA must name this arcana's specific insight.

**Minimum word count:** ~40 words

**Placement:** After the Karmic Pattern section, before the FAQ block.

**Format:**
```markdown
---

**Find Arcana [N] in your Matrix of Destiny**

[One sentence naming the specific insight the calculator will reveal — tied to this arcana's domain.] Use the free calculator to generate your complete Matrix and locate [Name] in your positions.

[→ Calculate your Matrix of Destiny](/[lang-prefix]calculadora) *(free, instant)*
```

**URL by language:**
- EN: `/calculator` (pending — use `/` with hash if calculator is on the homepage)
- PT-BR: `/pt-br/calculadora-matriz-do-destino`
- UK: `/uk/kalkulator-matrytsia-doli`

**What makes it weak:**
- Generic: "Calculate your Matrix of Destiny for free"
- Disconnected from the page content: appears after Arcana 8's power dynamics section but says "discover your arcana meanings"
- No specificity: doesn't name what the calculator reveals in relation to this arcana

**What makes it strong:**
- Names the specific question this arcana answers: "See whether Arcana 8 — Strength appears in your energy center, personal year, or karmic positions"
- Connects to the reader's current emotional state: ties back to the emotional hook questions from Section 2

**Layout dependency:** The Calculator CTA currently renders as standard markdown in the Arcana layout — horizontal rule, bold heading, paragraph, and link. No dedicated visual component exists. For a styled CTA block with button, background treatment, or visual separation from surrounding prose, `src/layouts/Arcana.astro` requires a Phase 2 update. Build the content now; flag the visual component as a separate layout task.

---

## Section 13: FAQ Block

**Purpose:** Rendered by the Arcana layout from frontmatter `faq` data. In the content file, defined entirely in frontmatter. The layout renders as an accordion with FAQPage structured data for search engines. Five required questions covering five distinct query states — no two questions may resolve the same emotional state.

**Minimum word count per answer:** 4 sentences (~80 words minimum per answer)

**Required question types (in this order):**
1. **Orientation** — "What does it mean to have Arcana N in the Matrix of Destiny?" — must name active state, blocked state, and cost of each
2. **Mechanism** — "Why does blocked Arcana N cause [specific named problem]?" — must explain the psychological mechanism, not just restate the symptom
3. **Precision** — "What is the difference between X and Y in this arcana?" — must name two things that seem similar, show the distinction, name a behavioral marker
4. **Scope** — "Does Arcana N relate to [specific named domain]?" — addresses a life domain or a specific pattern
5. **Action** — "How do you work with Arcana N when it is blocked?" — must be pole-specific and name concrete practices

**What makes a FAQ answer weak:**
- Under 4 sentences
- Restates the question without adding mechanism
- Is generic self-help advice applicable to any arcana
- The precision question names a distinction but doesn't explain WHY the distinction matters behaviorally

**What makes a FAQ answer strong:**
- Answer 1: names both poles and their specific costs, not just "it depends on whether it's active or blocked"
- Answer 2: explains WHY the block produces the symptom — the mechanism, not just the association
- Answer 3: shows the behavioral test that distinguishes the two things — a reader could use it to identify which one applies to them
- Answer 4: addresses a domain where the reader might not have expected this arcana to show up
- Answer 5: is pole-specific — the dominance pole person needs different practices than the submission pole person

**Cross-check:** After writing, confirm each FAQ answer stays within this arcana's domain per `arcana-differentiation.md`. A Justice FAQ answer about emotional regulation has leaked into Temperance territory.

---

## Section 14: Internal Navigation

**Purpose:** Rendered by the Arcana layout automatically from the `number` frontmatter field. No body content needed. The layout generates Previous Arcana, All Arcana Index, and Next Arcana links using the number field.

**Content file requirement:** None beyond correct `number:` field in frontmatter.

**Layout behavior:**
- Previous: links to arcana number − 1 (arcana 1 has no previous link)
- Next: links to arcana number + 1 (arcana 22 has no next link)
- All Arcana: links to `/arcana/` (EN), `/pt-br/arcana/` (PT-BR), `/uk/arcana/` (UK)

**Template check:** Confirm the `number:` field is the canonical RWS number (8 = Strength, 11 = Justice) — not the Thoth ordering. Wrong numbers produce broken navigation.

---

## Pre-Publication Checklist

Run this before marking any arcana page complete.

**Frontmatter:**
- [ ] `number` matches canonical RWS ontology
- [ ] `name` matches canonical names table in `arcana-ontology.md` for this language
- [ ] `title` follows H1 formula from `query-state-model.md`
- [ ] `description` follows meta description formula from `query-state-model.md`
- [ ] `worksWith` and `conflictsWith` numbers match cross-reference table in `arcana-ontology.md`
- [ ] All `usedFor` items start with a verb
- [ ] `causes` items distinguish active outcomes from blocked outcomes

**Body content:**
- [ ] Emotional hook present — 3 questions, each targeting a different emotional state
- [ ] Quick answers table present — all 6 rows completed
- [ ] Definition block present — 3 sentences, extraction-ready
- [ ] "What it describes" section ≥ 200 words
- [ ] Active vs blocked section ≥ 300 words, 4 bullets per pole, each bullet names a specific observable behavior
- [ ] Professional domain ≥ 200 words, names systemic effects of both poles
- [ ] Relationships domain ≥ 200 words, names mechanism not just outcome
- [ ] Karmic pattern ≥ 200 words, names origin environment, adaptation, persistence mechanism, resolution direction
- [ ] 2+ pull quotes marked with `>` blockquote
- [ ] Calculator CTA present with arcana-specific prompt and correct language URL

**FAQ:**
- [ ] 5 questions covering 5 distinct query states (orientation, mechanism, precision, scope, action)
- [ ] Each answer ≥ 4 sentences
- [ ] No FAQ answer leaks into another arcana's domain (check against `arcana-differentiation.md`)
- [ ] Precision question names a behavioral test the reader can apply

**Domain integrity:**
- [ ] Page content stays within this arcana's domain per `arcana-differentiation.md`
- [ ] No content from adjacent arcana has leaked in (check the NOT-GOVERNS column)
- [ ] Karmic origin is specific to this arcana's block — not generic trauma language

**Language (PT-BR and Ukrainian only):**
- [ ] Content reads as written by a native speaker, not translated
- [ ] Register matches `translation-rules.md` for this language
- [ ] Arcana vocabulary uses canonical terms for this language (PT-BR: "bloqueado", UK: "заблокований")
- [ ] Address form is correct (PT-BR: "você", UK: "ви")

---

## Total Minimum Word Count

| Section | Minimum |
|---|---|
| Emotional hook | 60 |
| Quick answers table | 120 |
| Definition block | 80 |
| What it describes | 200 |
| Active vs blocked | 300 |
| Professional domain | 200 |
| Relationships domain | 200 |
| Karmic pattern | 200 |
| Pull quotes (2) | 80 |
| Calculator CTA | 40 |
| **Body total minimum** | **~1,480** |
| FAQ (5 × 80) | 400 |
| **Combined minimum** | **~1,880** |

**Target word count:** 2,000–2,500 words (body + FAQ combined). Pages under 1,880 are not complete. Pages over 3,000 are likely padded — audit for repetition.
