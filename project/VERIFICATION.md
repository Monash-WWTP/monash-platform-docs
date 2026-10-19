# Verification — 2026-10-19

Baseline: platform e6437c4e2ceb8b800b482b5bbc3ccf417524ea3a. This manual is a separate repository; no platform runtime code or hosting was changed.

## Completed

- Static Next.js export: passed, 76 MDX pages (41 authored and 35 generated API/index pages).
- Typecheck, ESLint, documentation links/navigation/frontmatter/coverage and generated-reference drift checks: passed.
- Node test suite: 6 passed, including rendered source citation extraction.
- npm audit including development dependencies: zero vulnerabilities.
- Source verification: 79 evidence files match pinned Git blobs; OpenAPI snapshot is byte-identical.
- Three reviewed synthetic report/moderation examples accepted by the actual platform Pydantic validators. CI repeats this against the exact pinned source.
- Platform API/simulation tests using disposable PostgreSQL: 111 passed, 1 skipped (43 dependency deprecation warnings).
- Collaborative browser: desktop and 390px mobile landing, native search results, numbered Steps, code blocks, Android Tabs and API renderer inspected. No document overflow on inspected pages. Final report API renderer shows localhost and the reviewed 12.5 mm synthetic payload.

## Independent review dispositions

No Critical findings. Three Important findings fixed: automatic report location/submission-time behavior, exact model initialization and ordered state equations, and semantically invalid generated report examples. Raw OpenAPI remains unchanged; a documented rendering overlay supplies synthetic examples.

The source-link validator gap was elevated from Minor because rendered evidence integrity is part of the documentation contract. SourceLinks now accepts only literal string arrays and every displayed path must exist in the pinned inventory and its coverage entry. The regression test went red then green.

Scientific equation spacing was corrected with the equation expansion. Remaining minor prose spacing elsewhere is deferred editorial cleanup; it does not alter a model formula or contract.

## Limits and pending acceptance

This verifies documentation against source, not production readiness or scientific validity. Model calibration, independent validation, literature/source ambiguities, production domains/identity/private storage, recovery ownership and restore drills, traffic/photo load and real-device acceptance remain explicit release gates in the manual.

The preview uses HTTP: clipboard writes require a secure context and were not accepted here. Full keyboard/accessibility, accordion interaction, every mobile navigation path and host custom-404 routing were not exhaustively tested. The static 404 artifact builds; the selected host must route unknown paths correctly. No docs deployment was configured.

Generated examples are illustrative, not observed outputs; only the three reviewed report/moderation payloads have domain-validator acceptance. Synthetic IDs do not establish valid database references. Untyped upstream responses remain untyped.
