# Entity Relationship Rules — matrixdestiny.co

## What the entity relationship table is

The entity relationship table is a machine-readable semantic structure that defines how each arcana connects to others and to the system as a whole. It is required on every arcana page.

It serves two functions:
1. SEO — Google and AI systems read relationship graphs, not isolated pages. The table is how individual arcana pages contribute to the site's semantic graph.
2. Internal linking — WORKS-WITH and CONFLICTS-WITH generate clickable links to sibling arcana pages.

## Required on every arcana page

Every arcana entity page must include all five relationship types. No exceptions.

| Relationship | What it defines |
|---|---|
| IS-A | The archetype's category and core function |
| USED-FOR | The specific problems or questions this arcana helps resolve |
| WORKS-WITH | Arcana numbers that amplify or complement this one |
| CONFLICTS-WITH | Arcana numbers that create tension with this one |
| CAUSES | The outcomes this arcana produces when active and when blocked |

## Format requirements

The table renders as an HTML table in the Arcana layout. The data lives in frontmatter YAML.

```yaml
relationships:
  isA: "archetype of [function], [quality], and [capacity]"
  usedFor:
    - "identifying [specific problem]"
    - "recognizing [specific pattern]"
    - "evaluating [specific capacity]"
    - "understanding [specific dynamic]"
  worksWith:
    - 3
    - 7
    - 11
  conflictsWith:
    - 12
    - 15
  causes:
    - "[outcome] when active"
    - "[capacity] this arcana enables"
    - "[specific failure pattern] when blocked"
    - "[secondary failure pattern] when suppressed"
```

WORKS-WITH and CONFLICTS-WITH take arcana numbers only (integers). The layout converts them to linked badges automatically.

## Minimum counts

| Field | Minimum |
|---|---|
| IS-A | 1 phrase (3 qualities minimum) |
| USED-FOR | 4 items |
| WORKS-WITH | 2 arcana numbers |
| CONFLICTS-WITH | 2 arcana numbers |
| CAUSES | 4 items (2 active, 2 blocked) |

## What makes a strong IS-A

IS-A defines what category of archetype this is — not what it symbolizes, but what psychological function it represents.

**Weak IS-A** (symbolic, vague):
> "archetype of the moon, mystery, and the night"

**Strong IS-A** (functional, psychological):
> "archetype of navigating unconscious projection, perceptual distortion, and the ambiguity of incomplete information"

The IS-A must be specific enough that someone could read it and know exactly what problem domain this arcana addresses.

## What makes strong USED-FOR items

USED-FOR items must name concrete, identifiable problems or patterns — not abstract qualities.

**Weak USED-FOR:**
- "understanding emotional patterns"
- "working with spiritual energy"
- "developing intuition"

**Strong USED-FOR:**
- "identifying why you distrust your own perceptions and require external validation before believing them"
- "recognizing the pattern of overriding internal signals with logical justifications that are later proven wrong"
- "evaluating access to intuitive intelligence and the capacity to act on it without certainty"

Each USED-FOR item should be directly recognizable to a user experiencing the problem.

## What makes strong CAUSES items

CAUSES items must describe specific observable outcomes — not general states.

**Weak CAUSES:**
- "positive outcomes when active"
- "negative patterns when blocked"
- "spiritual growth and development"

**Strong CAUSES:**
- "precise self-evaluation without guilt or denial"
- "victim mentality that perpetuates patterns by denying your own contribution when blocked"
- "over-responsibility that blames only yourself for everything, also perpetuating patterns"

CAUSES items must include at least 2 active (what the arcana produces when functioning) and 2 blocked (what it produces when suppressed or distorted).

## WORKS-WITH logic

WORKS-WITH arcana numbers should reflect genuine functional amplification — arcana whose active expressions reinforce each other.

Rules:
- Choose arcana that address adjacent or complementary psychological functions
- The relationship must be explicable: if someone asks why these two work together, there must be a clear answer
- Do not choose WORKS-WITH based on symbolic tradition alone — choose based on the behavioral functions defined in this project

## CONFLICTS-WITH logic

CONFLICTS-WITH arcana numbers reflect genuine functional tension — arcana whose active expressions pull in different directions or whose blocked expressions amplify each other's failure modes.

Rules:
- The tension must be specific and explicable
- CONFLICTS-WITH does not mean "bad" — it means the combination creates friction that requires conscious navigation
- Do not duplicate WORKS-WITH numbers in CONFLICTS-WITH for the same arcana

## Cross-reference consistency

If Arcana 4 lists Arcana 11 in WORKS-WITH, Arcana 11 should list Arcana 4 in WORKS-WITH.
If Arcana 8 lists Arcana 15 in CONFLICTS-WITH, Arcana 15 should list Arcana 8 in CONFLICTS-WITH.

Maintain bidirectional consistency across all arcana files when adding or modifying relationships.
