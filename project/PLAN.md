# Fumadocs Platform Manual Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Deliver a searchable, independently buildable platform manual covering current behavior, complete usage, implementation logic and scientific/operational limits.

**Architecture:** Add `apps/docs` using the official Next.js + Fumadocs MDX static template. Author role-based guides in local MDX, use native Fumadocs components, generate API reference from the checked-in schema, and maintain a coverage/evidence inventory. Keep the dashboard/API/mobile release boundaries and existing hosting configuration unchanged.

**Tech Stack:** Next.js, Fumadocs UI/Core/MDX/OpenAPI, TypeScript, npm lockfile, local static search, Node test runner.

**Spec:** `docs/superpowers/specs/2026-10-19-platform-documentation-design.md`

## Global Constraints

- Source baseline is merged commit `e6437c4`; current source, released APK and deployed environments must be distinguished.
- The site uses HomeLayout, DocsLayout/DocsPage, Cards, Steps, Tabs, Callouts, Accordions, file-tree and code/reference components where appropriate; no replacement widget framework.
- Preserve the existing green/charcoal/white identity and Manrope; support narrow screens, keyboard access and visible focus.
- No private data, credentials, invented endpoints, operational acceptance or scientific validation claims.
- Preserve legacy source/data bytes and model semantics. Reconcile current-facing stale instructions without rewriting historical evidence.
- No hosting/project/domain changes, production API calls or publication in this implementation.
- Read CONTRIBUTING.md, migration ROADMAP.md and science VALIDATION.md. Use only the exact guarded disposable database for destructive verification.

## Review Focus

- A citizen following the published APK guide must not receive shared-API instructions that only apply to unreleased source (Task 2).
- A developer must be able to run the documented dashboard proxy and API on matching ports (Task 2).
- API examples and schema references must not drift or offer live privileged mutations (Task 4).
- Missing/censored observations and unsupported model inputs must never be described as measurements or validated predictors (Tasks 2–3).
- Static search, mobile navigation and relative source links must work from the built output, not only development mode (Tasks 1, 5).

---

### Task 1: Official boilerplate, native component system and landing page

**Files:** Create `apps/docs/package.json`, lockfile, Next/TypeScript/MDX/source configuration, `app/(home)/layout.tsx`, `app/(home)/page.tsx`, `app/docs/layout.tsx`, `app/docs/[[...slug]]/page.tsx`, `app/layout.tsx`, `app/global.css`, `lib/source.ts`, `lib/layout.shared.tsx`, `components/mdx.tsx`, and static search files from the official template. Create `apps/docs/tests/content-contract.test.mjs`.

**Interfaces:** Export shared layout options and a central MDX component map. Routes `/` and `/docs` are the role-selection landing and manual entry; all authored guides live under `/docs`. Search uses a statically generated local index. Package scripts expose `dev`, `build`, `typecheck`, `lint`, `test`, `generate:api` and `check:docs`.

- [ ] Scaffold the official `+next+fuma-docs-mdx+static` template with `--no-git`, using a pinned generator version recorded after inspection; retain upstream notices. Install lockfile dependencies and verify installed component APIs against official docs.
- [ ] Before customizing behavior, add failing content tests asserting four role paths resolve, landing links target actual manual pages and required MDX components render rather than print literal tags.
- [ ] Implement HomeLayout landing, DocsLayout/DocsPage, native search/TOC/breadcrumb/navigation and central native component registration. Use role Cards, visible availability Callouts and Steps for first actions; retain accessible defaults. Use the existing local font asset if its licensing allows reuse.
- [ ] Run tests, typecheck and static build without API credentials; verify no platform network dependency. Commit the usable shell and content contracts.

### Task 2: Current state, getting started and complete user workflows

**Files:** Create MDX under `apps/docs/content/docs/overview/{index,status,glossary}.mdx`, `get-started/{index,citizens,operators,local-development,android-development}.mdx`, `guides/{monitoring,community-observations,reporting,moderation,scenarios,comparison,publishing}.mdx`; add group `meta.json` navigation files. Create `apps/docs/content/coverage.json` and `apps/docs/scripts/check-docs.mjs`.

**Interfaces:** Coverage entries contain `id`, `page`, `evidence` (repository-relative file paths), `audience` and `status` (`source`, `released`, `verified-environment`, `pending`). MDX frontmatter carries title, description, sourceRevision and lastVerified. Required workflow IDs are `citizen-start`, `operator-start`, `local-start`, `android-build`, `monitoring`, `community`, `report-submit`, `moderation`, `scenario-run`, `compare`, `publish`.

- [ ] Add failing Node tests: reject a missing required workflow, nonexistent page/evidence path and a landing target with no page; use temporary fixture directories rather than source-text snapshots.
- [ ] Implement the coverage validator and author every listed guide from current clients, routers, tests and release manifests. Use Steps for procedures, Tabs only for real alternatives, visible Callouts for unavailable production prerequisites, and Accordions for secondary troubleshooting. Each procedure states prerequisites, exact role, actions, expected outcome and failure recovery.
- [ ] Reconcile API port 8181/Vite proxy behavior with an executable local walkthrough. Keep the signed legacy APK path distinct from the shared-API source/staging build. Cover dates/units/BDL, missing values, location/photo failure, idempotent retry, authorization, immutable runs and explicit compatible references.
- [ ] Execute safe quickstart commands and targeted contract tests in the supported local environment; report unavailable real-device/identity/storage acceptance instead of claiming success. Run coverage/tests/build and commit.

### Task 3: Architecture and scientific logic with traceable evidence

**Files:** Create `apps/docs/content/docs/how-it-works/{architecture,identity,report-lifecycle,data-and-migrations,run-provenance}.mdx` and `science/{index,effluent-model,carbon-accounting,parameters,validation}.mdx`; extend coverage inventory and navigation.

**Interfaces:** Explanations link to repository source at a recorded revision. Parameter tables state symbol/API field, unit, equation or transformation, default, implementation location, source status and applicability. Existing science audit/VALIDATION remain canonical acceptance evidence, linked rather than silently superseded.

- [ ] Add validation cases requiring evidence paths and sourceRevision/lastVerified on explanatory pages; a deliberately missing science evidence path must fail.
- [ ] Trace actual API/session/PKCE/CSRF/capability and media/public-projection logic. Explain immutable snapshots, source artifact identity, date/series comparison checks and failed-run semantics. Add a readable component/data-flow diagram using build-rendered source-native markup.
- [ ] Trace simulation functions and factor inputs into explicit equations/parameter tables. Explain load/demand/availability behavior, context-only weather, generic fixed-factor GHG, recovery/GWP conventions and dimensional/terminology questions. Label unreferenced coefficients, unsupported methane-factor entries and missing calibration/uncertainty. Cite primary sources already verified by the science audit; perform additional source verification only where a new claim requires it.
- [ ] Review arithmetic/examples against existing simulation tests; use hand-checked synthetic examples with units. Verify citations and state limitations without using test success as scientific approval. Run docs checks/build and commit.

### Task 4: Generated API reference and operations manual

**Files:** Create `apps/docs/scripts/generate-api.mjs`, `lib/openapi.ts`, `components/api-page.tsx`, generated MDX under `content/docs/reference/api`, authored `reference/{index,authentication,errors-and-pagination}.mdx`, `operations/{configuration,deployment,readiness,backup-and-restore,migration-and-rollback,android-release,incident-response,release-gates}.mdx`.

**Interfaces:** `npm run generate:api` consumes only repository `services/api/openapi.json` and writes generated reference deterministically. Reference metadata records schema digest. API components render build-time reference/examples; privileged live playground requests are disabled. No environment secrets are needed for docs build.

- [ ] Add failing drift tests using a changed schema fixture; assert changed schema invalidates generated metadata and generated endpoint coverage matches schema operations.
- [ ] Configure official Fumadocs OpenAPI generation and components, with documented request/response/security semantics. Add synthetic localhost examples for paging, CSRF, idempotency and structured errors, checked against current contracts.
- [ ] Author operations pages from actual config, scripts and runbooks. Document readiness versus liveness; backup/restore prerequisites and guarded targets; identity/storage dependencies; signing custody; migration reconciliation/rollback; capacity and alert acceptance. Distinguish executable source procedures from pending production exercises.
- [ ] Run deterministic generation twice and check for drift; run API contract/OpenAPI tests and documentation build. Commit the reference and operations deliverable.

### Task 5: Contributor documentation, README reconciliation, CI and final review

**Files:** Create `apps/docs/content/docs/contributing/{index,documentation,verification}.mdx`, `apps/docs/README.md`, `.github/workflows/docs.yml`; modify root `README.md`, current app READMEs and relevant current docs entry links. Update the documentation spec/plan completion record and `DESIGN.md` with implemented docs conventions.

**Interfaces:** CI installs with `npm ci` in `apps/docs`, runs docs generation/drift checks, test/typecheck/lint and static build on every push/PR. Current-facing READMEs contain minimal accurate setup and links to canonical manual pages. Historical plans/legacy documents remain preserved.

- [ ] Add failing link/coverage cases for broken cross-page anchors and missing navigation targets; implement AST-aware MDX link validation and source-file reference checks with clear diagnostics.
- [ ] Replace outdated current-facing setup/integration claims with verified concise instructions. Document how to author native components, update evidence and regenerate reference material. Add CI using supported Node/toolchain versions and independent package boundaries.
- [ ] Run the complete docs checks/build, dashboard checks, repository policy/pinned-source checks and guarded Python suite. Record outcomes and skips. Verify root/app setup instructions against the implemented commands.
- [ ] Batch T3 browser checks at desktop and phone sizes: landing role entry, sidebar, keyboard/search/TOC, Steps/Tabs/Callout/Accordion, file tree, code-copy, API reference, overflow and 404. Fix discovered important defects in one pass and reverify affected behavior.
- [ ] Obtain a fresh read-only whole-branch review of completeness, source/science accuracy and component/layout behavior; resolve important findings and rerun affected checks. Commit verified documentation and deliver the local preview and coverage results. Do not publish, push or merge without applicable authorization.
