# Arcana Misalignment Audit
**Date:** 2026-05-19
**Status:** AUDIT ONLY — nothing fixed yet. All items require approval before any file is modified.

Reference: `src/_docs/system/arcana-ontology.md`

Canonical rule: Arcana 8 = Strength | Arcana 11 = Justice

---

## Category 1 — Wrong Name for Number (Number-Name Swaps)

These files carry the wrong arcana name for their number under the RWS canonical standard.

| File | Current name | Canonical name for this number | Severity |
|---|---|---|---|
| `src/content/arcana/pt-br/8.md` | "A Justiça" (Justice) | "A Força" (Strength) | **Critical** |
| `src/content/arcana/pt-br/11.md` | "A Força" (Strength) | "A Justiça" (Justice) | **Critical** |
| `src/content/arcana/uk/8.md` | "Справедливість" (Justice) | "Сила" (Strength) | **Critical** |
| `src/content/arcana/uk/11.md` | "Сила" (Strength) | "Справедливість" (Justice) | **Critical** |
| `src/content/arcana/en/11.md` | "Strength" | "Justice" | **Critical** |

Note: `en/8.md` is currently correct — it carries the name "Strength" and was just rebuilt with Strength-appropriate content.

---

## Category 2 — Wrong Content for Name (Content-Domain Mismatch)

These files carry content from the wrong psychological domain for their canonical archetype.

### PT-BR 11 (`src/content/arcana/pt-br/11.md`)
**What is wrong:** The file is named "A Força" (Strength) but the content covers *emotional regulation, intensity management, explosion vs suppression, and the window of tolerance*. The canonical Strength (arcana 8) governs *power dynamics, authority, and the control-vs-surrender tension* (dominance-submission cycles, delegation anxiety, calibrated self-assertion). These are distinct psychological domains. The current content does not match the canonical Strength definition.

**What needs to happen at fix time:** The content must be rewritten to cover the canonical Strength domain (power dynamics, authority, calibrated control). The emotional regulation domain requires its own investigation — see Category 5.

### Ukrainian 11 (`src/content/arcana/uk/11.md`)
**What is wrong:** Same as pt-br/11. Name "Сила" (Strength), content covers emotional regulation and intensity processing. Same domain mismatch.

### English 11 (`src/content/arcana/en/11.md`)
**What is wrong:** Name "Strength", content covers emotional regulation (explosion vs suppression, window of tolerance, anger management). Per canonical, arcana 11 = Justice, which covers cause-and-effect recognition, calibrated accountability, and pattern repetition. The entire content needs to be replaced with Justice content.

### PT-BR 8 (`src/content/arcana/pt-br/8.md`)
**Partial mismatch:** The file is named "A Justiça" (Justice) and covers cause-and-effect recognition, calibrated accountability, and pattern repetition. This content IS correct for arcana 11 (Justice). However, it carries number `8` and name `"A Justiça"` — the content itself is usable but is assigned to the wrong number.

### Ukrainian 8 (`src/content/arcana/uk/8.md`)
**Same as pt-br/8:** Correct Justice content, wrong number.

---

## Category 3 — Cross-Reference Number Errors

These files contain `worksWith` or `conflictsWith` numbers that were correct under the old Thoth ordering (8=Justice, 11=Strength) but are now semantically incorrect under the canonical RWS ontology (8=Strength, 11=Justice).

The canonical relationships from the ontology table show:
- Arcana 4 (Emperor) should work with arcana **8** (Strength) — not 11
- Arcana 7 (Chariot) should work with arcana **8** (Strength) — not 11
- Arcana 14 (Temperance) should work with arcana **8** (Strength) — not 11
- Arcana 2 (High Priestess) should conflict with arcana **11** (Justice) — not 8
- Arcana 10 (Wheel of Fortune) should conflict with arcana **11** (Justice) — not 8
- Arcana 18 (Moon) should work with and conflict with arcana **11** (Justice) — not 8
- Arcana 22 (Fool) should conflict with arcana **11** (Justice) — not 8

### PT-BR files with cross-reference errors

| File | Field | Current value | Canonical value | What it currently points to | What it should point to |
|---|---|---|---|---|---|
| `pt-br/2.md` | conflictsWith | 8 | 11 | Justice (old 8) — correct content, wrong number | Justice (new 11) |
| `pt-br/4.md` | worksWith | 11 | 8 | Strength (old 11) — correct content, wrong number | Strength (new 8) |
| `pt-br/7.md` | worksWith | 11 | 8 | Strength (old 11) — correct content, wrong number | Strength (new 8) |
| `pt-br/10.md` | conflictsWith | 8 | 11 | Justice (old 8) — correct content, wrong number | Justice (new 11) |
| `pt-br/14.md` | worksWith | 11 | 8 | Strength (old 11) — correct content, wrong number | Strength (new 8) |
| `pt-br/18.md` | worksWith | 8 | 11 | Justice (old 8) — correct content, wrong number | Justice (new 11) |
| `pt-br/18.md` | conflictsWith | 8 | 11 | Justice (old 8) — correct content, wrong number | Justice (new 11) |
| `pt-br/22.md` | conflictsWith | 8 | 11 | Justice (old 8) — correct content, wrong number | Justice (new 11) |

### Ukrainian files with cross-reference errors

Identical pattern to PT-BR (same relationship structure was used across both languages):

| File | Field | Current value | Canonical value |
|---|---|---|---|
| `uk/2.md` | conflictsWith | 8 | 11 |
| `uk/4.md` | worksWith | 11 | 8 |
| `uk/7.md` | worksWith | 11 | 8 |
| `uk/10.md` | conflictsWith | 8 | 11 |
| `uk/14.md` | worksWith | 11 | 8 |
| `uk/18.md` | worksWith | 8 | 11 |
| `uk/18.md` | conflictsWith | 8 | 11 |
| `uk/22.md` | conflictsWith | 8 | 11 |

### English files with cross-reference errors

| File | Field | Current value | Canonical value | Notes |
|---|---|---|---|---|
| `en/4.md` | worksWith | 11 | 8 | Written to mirror pt-br/4 pattern |
| `en/7.md` | worksWith | 11 | 8 | Written to mirror pt-br/7 pattern |
| `en/14.md` | worksWith | 11 | 8 | Written with old Strength semantic |
| `en/15.md` | conflictsWith | 11 | stays 11 | 11 = Justice — Devil conflicts with Justice is semantically valid per ontology |
| `en/16.md` | conflictsWith | 11 | needs review | Was written as conflicting with emotional regulation content (old 11 = Strength). Under canonical, 11 = Justice. Tower/Justice conflict needs semantic review. |
| `en/20.md` | worksWith | 8 | stays 8 | 8 = Strength — Judgement works with Strength is plausible, but this was written with Strength as emotional regulation, not power dynamics. Needs semantic review. |

---

## Category 4 — `number:` Field in Frontmatter

These files have a `number:` field in their YAML frontmatter that must be updated to match the canonical number after the name swap.

| File | Current `number:` field | Canonical number for this content |
|---|---|---|
| `pt-br/8.md` (Justice content) | 8 | Must become 11 after file is renamed to 11.md |
| `pt-br/11.md` (Strength content) | 11 | Must become 8 after file is renamed to 8.md |
| `uk/8.md` (Justice content) | 8 | Must become 11 after file is renamed to 11.md |
| `uk/11.md` (Strength content) | 11 | Must become 8 after file is renamed to 8.md |
| `en/11.md` (Strength content, wrong) | 11 | Number stays 11 but content must be rewritten for Justice |

---

## Category 5 — Orphaned Content Domain (Emotional Regulation)

The current PT-BR/UK/EN arcana 11 files all contain content about *emotional regulation, intensity management, explosion vs suppression, and the window of emotional tolerance*. Under the canonical ontology:

- Arcana 8 (Strength) = power dynamics / authority / dominance-submission
- Arcana 11 (Justice) = cause-and-effect / accountability / pattern repetition

**Neither arcana governs the emotional regulation domain as defined in those files.**

This content is psychologically valid and well-written, but it belongs to a domain that currently has no assigned arcana number in this project's ontology. The emotional regulation content in the current 11 files may correspond to a different tradition's interpretation of either Strength or another arcana entirely.

**Decision required before fix:** Where does the emotional regulation domain belong in this project's arcana ontology? Options:
1. Redefine Strength (arcana 8) to include emotional regulation alongside power dynamics (merging both themes)
2. Assign emotional regulation to a different arcana number that has not yet been formally defined in this project
3. Discard the emotional regulation content entirely and rewrite arcana 8 as pure power/authority

This decision must be made before the 11.md files in PT-BR and Ukrainian are fixed, because the fix will either recycle this content or discard it.

---

## Summary Counts

| Category | PT-BR files affected | UK files affected | EN files affected |
|---|---|---|---|
| Wrong name for number | 2 | 2 | 1 |
| Wrong content for domain | 2 | 2 | 1 |
| Cross-reference number errors | 8 references in 7 files | 8 references in 7 files | 5 references in 5 files |
| `number:` frontmatter errors | 2 | 2 | 1 |
| Orphaned content domain | 1 file | 1 file | 1 file |

**Total files requiring at least one change:** PT-BR: 11 files | UK: 11 files | EN: 6 files

---

## Proposed Fix Order (for approval, not executing yet)

1. Resolve the emotional regulation domain question (Category 5) — this determines whether the 11.md content is recycled or discarded
2. Swap 8 and 11 in PT-BR (rename files, update number: fields, rewrite content where needed)
3. Swap 8 and 11 in Ukrainian (same)
4. Rewrite en/11.md as Justice (cause-and-effect)
5. Update all cross-reference numbers in PT-BR, UK, EN files (Category 3)
6. Update en/8.md relationships if the Strength domain definition changes (currently set per user brief as power dynamics)
