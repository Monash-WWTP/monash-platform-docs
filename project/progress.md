# Documentation implementation ledger
Plan: project/PLAN.md. User approved 2026-10-19, then required a separate repository.
Ruling: repository root replaces planned apps/docs; platform repository remains read-only. Cross-repository evidence is pinned to e6437c4, with a local verification option and public source links. Cost: source updates must be explicitly synchronized.
Pre-flight: guide metadata and coverage inventory are shared by content validation and API generation; all generated pages will follow the same schema. No interface conflict.
Task 1: official generator16.2.22, static Next/MDX template. Native component UI package is an upstream npm alias to @fumadocs/base-ui. Preserve it rather than substituting a second widget library.
