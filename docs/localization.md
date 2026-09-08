# FiveRocksGames localization standard

This document is the shared localization baseline for FiveRocksGames websites and games.

## Supported languages

1. `ko` — 한국어
2. `en` — English
3. `ja` — 日本語
4. `zh-CN` — 简体中文
5. `zh-TW` — 繁體中文
6. `es` — Español
7. `pt-BR` — Português (Brasil)
8. `de` — Deutsch
9. `fr` — Français
10. `ru` — Русский
11. `it` — Italiano
12. `id` — Bahasa Indonesia
13. `th` — ไทย
14. `vi` — Tiếng Việt

## Behavior

- Detect the browser language on first visit.
- Normalize regional variants to the supported language set.
- Use English (`en`) as the fallback for unsupported browser languages or missing translations.
- Allow the user to override the detected language with a visible language selector.
- Persist the user's explicit choice in `localStorage` under `frg-lang`.
- Use language names, not national flags, in language selectors.
- Update the document `lang` attribute when the active language changes.
- Game names and first-party brand names remain proper nouns unless a project explicitly defines localized titles.

## Browser-language normalization

- `ko*` → `ko`
- `en*` → `en`
- `ja*` → `ja`
- `zh-Hant`, `zh-TW`, `zh-HK`, `zh-MO` → `zh-TW`
- other `zh*` → `zh-CN`
- `es*` → `es`
- `pt*` → `pt-BR`
- `de*` → `de`
- `fr*` → `fr`
- `ru*` → `ru`
- `it*` → `it`
- `id*` → `id`
- `th*` → `th`
- `vi*` → `vi`
- anything else → `en`

## Scope

New FiveRocksGames web games should use this language set by default. Existing games should migrate to the same set when their localization is next updated. Project-specific repository rules remain authoritative for implementation details.
