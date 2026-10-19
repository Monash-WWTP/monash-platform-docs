# Platform documentation with Fumadocs

Status: approved by the user on 2026-10-19, including native Fumadocs components and a documentation landing page. Baseline: merged platform commit `e6437c4`.

## Purpose and readers

Create a usable manual for what the platform is now, how to start, how to perform every supported workflow, and why its data, permissions and simulation logic work as they do. Cover citizens, invited operators, researchers and maintainers without making readers study delivery plans first. English is the initial language.

The documentation must distinguish current source implementation, currently published clients, verified deployment behavior and pending acceptance. A successful build does not establish a working production account service or scientific validity.

## Architecture decision

Recommended: a separately buildable `apps/docs` application using the official Fumadocs Next.js + MDX static boilerplate. Local MDX is reviewed in Git. Static output and browser-side search allow documentation to run without platform credentials or a live API. Generate reference pages from the checked-in API OpenAPI schema. Retain upstream template licensing/attribution and pin dependency versions through a lockfile.

Alternatives considered: integrating Fumadocs into the existing Vite dashboard would unnecessarily change the product app architecture; a server-rendered standalone docs app permits dynamic features but introduces an unnecessary runtime dependency. Static documentation is the selected recommendation; no chatbot, CMS, telemetry or live authenticated API playground is needed.

Do not change existing Vercel projects, production routing or API endpoints as part of building the documentation. Supply exact independent build/deployment instructions and a local preview; publication is a separate authorized step. Preserve the existing main checkout and unrelated work.

## Reading experience

Use the standard Fumadocs documentation layout: persistent topic navigation, search, breadcrumbs, page table of contents, code-copy controls and previous/next navigation. The docs entry page helps readers choose citizen, operator, research or developer setup. Use the established green/charcoal/white identity and readable Manrope typography with restrained prose, tables and diagrams. This is a reading surface, without a marketing hero or decorative dashboard cards. Navigation, search and code samples must work with a keyboard and on narrow screens.

## Native Fumadocs components

Use HomeLayout for the documentation landing page and DocsLayout/DocsPage for the manual. Use Cards/Card for role/topic entry points, Steps/Step for sequential setup and workflows, Tabs/Tab for genuine environment or reader variants, Callout for prerequisites/status/scientific limits, Accordion for secondary troubleshooting, Files/Folder/File for repository structure, and the framework's code blocks, tables, TOC, search and OpenAPI components. Register reusable MDX components centrally. Essential prerequisites and limitations must remain visible rather than hidden in an accordion. Use components according to their documented semantics, not merely to increase their count. Preserve the native Fumadocs layout and interactions while applying the platform's restrained brand.

## Information architecture

1. **Overview:** platform purpose and components; source versus released/deployed status; roles; glossary explaining plant, sampling station, citizen observation, laboratory sample, scenario and run.
2. **Get started:** citizen/public-app path; invited-operator path; developer prerequisites; a synthetic local walkthrough for API/database/dashboard; Android build path. State when a prerequisite is not publicly available instead of presenting a dead-end sign-up flow.
3. **User guides:** search/map and laboratory history; dates/units/BDL/missing readings; community observations; reporting/location/photos/retry; moderation and privacy; configure/run/inspect scenarios; explicit-baseline comparisons; public downloads and approved research publication. Walkthroughs include expected results and error/retry behavior.
4. **How it works:** component/data-flow diagram; source boundaries; versioned API, PostgreSQL and migrations; OIDC/browser sessions/PKCE/CSRF; capabilities and MFA; report/media lifecycle and public projections; immutable run snapshots/artifact identity and comparison rules.
5. **Scientific methods:** exact current heuristic and its assumptions; equation/parameter register with units and source status; GHG accounting boundaries/factors/recovery/GWP conventions; implemented versus context-only inputs; screening thresholds versus permits; reproducibility, calibration/validation/uncertainty gaps. Link primary sources and the existing evidence audit. Never describe citations or software tests as model validation.
6. **API reference:** generate endpoint/schema material from `services/api/openapi.json`; explain authentication, CSRF, pagination, errors, idempotency and run provenance using current handlers/tests. Examples use synthetic data and localhost. Disable live mutating playground requests by default.
7. **Operations:** environment-variable reference without secrets; local/staging/production distinctions; database/storage/identity readiness; deployment routing; backup and restore; migration/reconciliation; logging, rate/capacity controls and incident handling; Android signing/release; rollback and unresolved release gates. Separate an implemented command from an unperformed acceptance exercise.
8. **Contributing:** repository structure, checks, docs authoring, updating generated API material, evidence/citation policy, and how to keep docs synchronized with behavior changes.

Group related material into complete pages; do not create empty pages merely to match headings.

## Evidence and rigor

For procedural guides, state purpose, prerequisites/role, ordered steps, expected result and relevant troubleshooting. For technical/scientific explanations, state definitions, units, assumptions, boundaries, implementation/source references and limitations. Clearly mark synthetic examples and distinguish measured, reported, assumed and simulated values.

Record the baseline source revision and verification date. Link implementation files/tests and original studies where they support claims; label unsupported coefficients and unresolved scientific questions explicitly. Use traceable examples rather than invented screenshots, results, deployments or account availability. Include a machine-checkable coverage inventory mapping supported workflows to documentation pages and their evidence files.

Reconcile stale current-facing root/app README instructions and link them to the new manual. Preserve historical plans and legacy source bytes; historical records may remain as evidence but must not be the reader's current-state entry point. Do not duplicate long canonical explanations in both places.

## Verification and acceptance

- Install from the committed lockfile; type-check, lint and build the static docs application in CI.
- Check navigation, local links, referenced evidence files and required workflow coverage; detect missing pages and boilerplate placeholders.
- Regenerate API pages deterministically from the checked-in schema and verify no drift. Verify API examples against current contract tests without contacting production.
- Execute safe setup/verification commands in the supported environment; use only the repository's exact guarded disposable database for destructive tests. Clearly record checks requiring unavailable credentials, physical devices or production infrastructure.
- Browser-test the built docs at desktop and phone widths: topic navigation, search results, table of contents, code-copy controls, long tables/code, source links, keyboard focus and not-found handling.
- Independently review explanations against current code and scientific restrictions before delivery. Record skips and unresolved operational/scientific acceptance items.

Success means a new reader can identify the product's present state, select a role-specific starting path, complete available workflows, understand the supporting logic and limitations, and find operational/API details without navigating chronological project notes.

## Official framework references

- https://www.fumadocs.dev/docs/cli/create-fumadocs-app
- https://www.fumadocs.dev/docs/deploying/static
- https://www.fumadocs.dev/docs/integrations/openapi

## User-approved refinement — 19 October 2026

The user requested a neutral palette, removal of the Platform source navigation shortcut and a quieter interface with a landing image. This supersedes the original green accent and no-image direction. Retain native Fumadocs components, Platform/Manual navigation, search, light/dark support and collapsed implementation evidence. A labelled AI-generated river illustration adds visual context without implying a named site, monitoring measurement or scientific evidence. Full generation prompt and provenance: public/images/README.md.
