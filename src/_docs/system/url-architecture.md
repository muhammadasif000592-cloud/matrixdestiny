# URL Architecture — matrixdestiny.co

## Language routing

| Language | Root | Configured in |
|---|---|---|
| English | `/` (no prefix) | `astro.config.mjs` — defaultLocale, prefixDefaultLocale: false |
| Brazilian Portuguese | `/pt-br/` | i18n locales |
| Ukrainian | `/uk/` | i18n locales |

English is the default locale. It uses no language prefix. All English pages live at the root.

## URL structure by page type

### Calculator pages

| Language | URL |
|---|---|
| English | `/calculator` |
| PT-BR | `/pt-br/calculadora-matriz-do-destino` |
| Ukrainian | `/uk/kalkulator-matrytsia-doli` |

### Homepages

| Language | URL |
|---|---|
| English | `/` |
| PT-BR | `/pt-br/` |
| Ukrainian | `/uk/` |

### Arcana pages

| Language | Pattern | Example |
|---|---|---|
| English | `/arcana/[number]` | `/arcana/8` |
| PT-BR | `/pt-br/arcana/[number]` | `/pt-br/arcana/8` |
| Ukrainian | `/uk/arcana/[number]` | `/uk/arcana/8` |

Arcana URLs use the number, not the name. This avoids URL changes if naming conventions evolve. Numbers 1–22.

### Pillar articles

| Language | Pattern | Example |
|---|---|---|
| English | `/[slug]` | `/what-is-matrix-of-destiny` |
| PT-BR | `/pt-br/[slug]` | `/pt-br/o-que-e-matriz-do-destino` |
| Ukrainian | `/uk/[slug]` | `/uk/shcho-take-matrytsia-doli` |

Pillar slugs are translated — not transliterated. Each language uses a natural-language keyword phrase in that language.

### Compatibility pages

| Language | Pattern | Example |
|---|---|---|
| English | `/compatibility` | `/compatibility` |
| PT-BR | `/pt-br/compatibilidade-matriz-do-destino` | `/pt-br/compatibilidade-matriz-do-destino` |
| Ukrainian | `/uk/sumysnist-matrytsia-doli` | `/uk/sumysnist-matrytsia-doli` |

For individual compatibility pair pages (future):

| Language | Pattern | Example |
|---|---|---|
| English | `/compatibility/[arcana-a]-[arcana-b]` | `/compatibility/8-11` |
| PT-BR | `/pt-br/compatibilidade/[arcana-a]-[arcana-b]` | `/pt-br/compatibilidade/8-11` |
| Ukrainian | `/uk/sumysnist/[arcana-a]-[arcana-b]` | `/uk/sumysnist/8-11` |

### Emotional state pages (future cluster)

| Language | Pattern | Example |
|---|---|---|
| English | `/[emotional-state-slug]` | `/relationship-anxiety-matrix-of-destiny` |
| PT-BR | `/pt-br/[slug]` | `/pt-br/ansiedade-relacionamento-matriz-destino` |
| Ukrainian | `/uk/[slug]` | `/uk/tryvozhnist-stosunkiv-matrytsia-doli` |

## URL rules

**Always:**
- Use lowercase only
- Use hyphens as word separators (never underscores, never spaces)
- Use the arcana number for arcana pages (never arcana name in URL)
- Use natural-language translated slugs for pillars and emotional state pages

**Never:**
- Add trailing slashes except on directory roots (`/pt-br/` yes, `/arcana/8/` no — Astro handles this via output)
- Use query parameters for content differentiation
- Create two URLs for the same content
- Translate the `/arcana/` or `/uk/` segment — keep language prefix segments consistent

## hreflang configuration

Every page must declare hreflang for all three language variants. This is handled automatically in the Arcana layout via the `hreflang` prop. For non-arcana pages, add manually in the head.

Format:
```html
<link rel="alternate" hreflang="en" href="https://matrixdestiny.co/arcana/8" />
<link rel="alternate" hreflang="pt-BR" href="https://matrixdestiny.co/pt-br/arcana/8" />
<link rel="alternate" hreflang="uk" href="https://matrixdestiny.co/uk/arcana/8" />
<link rel="alternate" hreflang="x-default" href="https://matrixdestiny.co/arcana/8" />
```

## Canonical URL rules

Every page must declare its canonical URL explicitly. Never rely on auto-detection.

- English pages: canonical = `https://matrixdestiny.co[path]`
- PT-BR pages: canonical = `https://matrixdestiny.co/pt-br[path]`
- Ukrainian pages: canonical = `https://matrixdestiny.co/uk[path]`

The Arcana layout accepts `canonicalUrl` as a prop and injects it automatically.

## Content collection to URL mapping

Content files in `src/content/arcana/en/8.md` → generates `/arcana/8`
Content files in `src/content/arcana/pt-br/8.md` → generates `/pt-br/arcana/8`
Content files in `src/content/arcana/uk/8.md` → generates `/uk/arcana/8`

Dynamic routes:
- `src/pages/arcana/[slug].astro` — English arcana
- `src/pages/pt-br/arcana/[slug].astro` — PT-BR arcana
- `src/pages/uk/arcana/[slug].astro` — Ukrainian arcana
