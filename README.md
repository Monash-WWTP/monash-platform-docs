# Monash Water documentation

A separate Fumadocs manual for CitizenFlood, monitoring, research scenarios, the shared API and release operations. The documentation describes platform source revision **e6437c4**, while distinguishing published legacy clients and pending production/scientific acceptance.

## Read locally

Requires Node 22/npm. Python 3 is needed only for the optional static preview and source-verification helper.

```sh
npm ci
npm run dev
```

Open the URL printed by Next.js. To inspect the actual static output:

```sh
npm run build
npm start
```

The static preview is http://127.0.0.1:3030. Host `out/` with directory-index support. This site needs no platform API, identity service or secrets. No hosting target is automatically configured.

## What is documented

- Role-specific citizen, operator, Android and local-development setup.
- Monitoring/BDL, community observations, reporting/photos, moderation, scenarios, explicit-reference comparisons and publishing.
- Architecture, identity/capabilities/CSRF, private media lifecycle, migrations and run provenance.
- Actual model equations, input/coefficient register, GHG arithmetic/source ambiguities and scientific-validation requirements.
- All 34 checked-in OpenAPI operations, generated through native Fumadocs OpenAPI components with live execution disabled.
- Configuration, deployment boundaries, readiness, backup/restore, incidents, release/rollback and open acceptance gates.

The landing/manual use native Fumadocs HomeLayout, DocsLayout, Cards, Steps, Tabs, Callouts, Accordions, file trees, code blocks, search and table of contents.

## Verify and update

```sh
npm test
npm run check:docs
npm run typecheck
npm run lint
npm run build
npm audit --audit-level=high
```

`content/coverage.json` maps workflows to pages and evidence. `reference/platform.json` pins source file identities; `reference/openapi.json` is byte-identical to that platform revision. Pages carry source revision/review date and source evidence. Generated API files must not be edited by hand. The rendering overlay in `lib/documented-schema.mjs` supplies synthetic local examples; `reference/examples.json` report and moderation payloads are checked against the pinned backend validators in CI. Synthetic IDs do not represent existing database records.

To update the baseline deliberately:

```sh
python3 scripts/sync-platform.py --source /path/to/platform --revision FULL_REVIEWED_SHA --date YYYY-MM-DD
# Review changed behavior, prose, evidence and frontmatter before proceeding.
npm run generate:api
npm run check:docs
python3 scripts/check-source.py --source /path/to/platform
```

The platform checkout is read-only to these helpers. No restricted export, secret or production credential is copied. See `project/VERIFICATION.md` for actual checks and limitations and `project/PLAN.md` for implementation scope.

## Origins and rights

Scaffolded with official `create-fumadocs-app`16.2.22 (`+next+fuma-docs-mdx+static`). The upstream UI package aliases `@fumadocs/base-ui`; it is not a separately invented component system. See `NOTICE.md` and the font's OFL notice. No institutional endorsement or blanket software/data distribution permission is inferred.
