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

First GitHub run caught ESLint traversing the temporary evidence checkout. CI now removes that disposable checkout after verification and ESLint explicitly excludes it.

## Follow-up integration audit — 2026-10-19

The source baseline still matches platform origin/main e6437c4 at audit start. Corrected carbon-accounting unit/prose spacing and strengthened citation validation tests (7 now pass). Added a reciprocal Platform navigation link to the verified public landing page. The native troubleshooting Accordion was opened and its actual content/expanded state confirmed in the browser.

User approved a separate Vercel docs deployment. A newly created `monash-platform-docs` project was discovered and reused; no second docs project is created. Node is pinned to 22.x to match CI. The earlier no-hosting scope is superseded by this explicit approval. Platform entry-point changes and README reconciliation are tracked separately in the platform repository.

### Hosted acceptance and scenario example follow-up

Public documentation: https://monash-platform-docs.vercel.app, production deployment ready after PR #1. All 76 routes returned 200, an unknown route returned 404, and the static search index parsed successfully. On HTTPS, the native copy button reported successful clipboard completion; mobile sidebar toggle/Enter and Ctrl+K/Escape search were checked. Reciprocal Platform link resolves to the verified public site. This supersedes the earlier HTTP-only clipboard/hosting limitations; it does not constitute a full accessibility audit.

Reviewed synthetic examples now also cover scenario creation, run requests and two distinct comparison IDs. Six payloads are validated against the pinned backend models; IDs still require real, authorized and compatible completed runs in the target environment. An overlay regression test went red then green and verifies the raw contract object is not mutated.

Platform PR #5 corrects the documentation entry points and current setup guidance. Its initial import-identity check correctly required the launcher's guidance-only adaptation to be recorded; the exact path is now documented and tests pass. The older duplicate Vercel dashboard project root was corrected from repository root to apps/dashboard, and its replacement preview deployment completed successfully.
