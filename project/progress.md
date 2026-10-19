# Documentation implementation ledger
Plan: project/PLAN.md. User approved 2026-10-19, then required a separate repository.
Ruling: repository root replaces planned apps/docs; platform repository remains read-only. Cross-repository evidence is pinned to e6437c4, with a local verification option and public source links. Cost: source updates must be explicitly synchronized.
Pre-flight: guide metadata and coverage inventory are shared by content validation and API generation; all generated pages will follow the same schema. No interface conflict.
Task 1: official generator16.2.22, static Next/MDX template. Native component UI package is an upstream npm alias to @fumadocs/base-ui. Preserve it rather than substituting a second widget library.
Tasks1–4: 41 authored pages +35 generated API/index pages; all34 operations generated. Native Steps/Tabs/Cards/Callouts/Accordions/file-tree/TOC/search/code/reference used. Source inventory and contract pinned to platform e6437c4.
Validation red→green: coverage requirements/broken evidence; schema drift/operation counting; AST links and duplicate heading anchors. Checks pass. Production/development dependency audit is clean after replacing incompatible lint/preview dependencies with a compatible ESLint/TS setup and Python static preview.
Ruling: official template's partially downloaded96MB SWC was14MB after interrupted install; npm ci restored native compiler. No product workaround/downgrade needed.
Ruling: source OpenAPI remains byte-identical; renderer/generator overlay only a clearly labelled localhost server for generated examples. Untyped schemas remain untyped, with a visible advisory rather than invented responses.
Ruling: do not edit platform README because user explicitly required a separate repository. Manual identifies stale legacy setup and provides accurate standalone/local instructions; optional future platform-link PR is outside this repository.
