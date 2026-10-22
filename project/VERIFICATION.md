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

## Neutral interface refinement — current baseline 8b2862bb136295aaa514ddc280b1c07b12aa05f0

The user requested neutral styling, removal of Platform source navigation, a landing image and progressive disclosure while preserving functionality. Platform PR #6 is merged; this manual now pins that implementation. API schema bytes and simulation semantics are unchanged. Guide text names the actual new monitoring, scenario and Android disclosure controls.

Web chrome is neutral in light/dark themes; informational callouts are neutral while warnings retain meaning. Platform/Manual navigation and source evidence remain. Generated river imagery is visibly labelled; the full prompt and provenance are in public/images/README.md.

Local verification: 8 docs tests, metadata/coverage/link/API-drift checks, typecheck, lint and static build. Platform checks: 34 dashboard tests, 14 Flutter tests, clean analyzer, 27 repository tests with one legacy-checkout skip, policy and 207 original-source checks. Browser fixtures confirmed sample rows and BDL context remain accessible, year filtering sends the correct request and remains visible after closing its disclosure, research controls remain mounted, and desktop/phone layouts do not overflow. Native report widgets were rendered with synthetic GPS at 390×844; this is not physical-device acceptance. No production data or identity/storage/scientific acceptance is claimed.

## Production preparation audit — 22 October 2026

The manual now follows the application audit branch's exact committed source revision (see `reference/platform.json`), with 60 OpenAPI operations, 107 pages and 46 workflow/evidence entries. Source verification checks 104 evidence files and byte-identical OpenAPI. Updated narrative covers map-first v2 observations, linked flooding updates, shared settings, operational response, production constraints and current gates. The October 19 screenshot gallery is retained and explicitly labelled historical. Unchanged pages retain their older review dates; advancing the source pin does not pretend every historical procedure was rerun.

Local checks passed: 10 documentation tests; metadata, links, navigation, coverage and generated API drift; source identity verification; six synthetic examples against the platform validators; TypeScript, ESLint, static build and npm audit (no known vulnerabilities). The static build retains a CSS optimizer warning about the upstream search `::highlight` selector; it completes successfully.

A local Chromium smoke check opened reporting, mobile/account, operator response, current status, release gates and generated API index at 1440px and 390px. All 12 page/viewport combinations returned 200, had a single nonempty heading, no document horizontal overflow and no uncaught page errors. This is a rendering smoke check, not screen-reader, complete keyboard, search interaction or live identity acceptance. The T3 preview sandbox was unavailable due to host AppArmor; the smoke used Playwright 1.63.0 with the installed ARM64 Chromium executable instead.

Application evidence and external blockers are in the platform's `docs/operations/production-readiness-2026-10-22.md`. No documentation publication, application merge, production cutover or scientific authorization is claimed by these local results.

Follow-up: the platform backend suite now passes 246 tests with one optional skip. Regression tests cover interrupted download stream closure and bounded backup reads, including rejection above the aggregate object-byte cap. A nonempty local restore checked an 82-byte synthetic PNG, SHA-256 integrity and anonymous HTTP 403 on source/restored buckets, with 18 application and 230 identity tables reconciled. The post-fix restore took 17.19 seconds; this is not production RTO. A 200-request, concurrency-10 loopback read smoke returned 200 successes with p95 225.17 ms; mixed-workload and sustained public capacity remain unqualified. The user confirmed open public registration, which adds edge/identity abuse protections to the launch gates.
