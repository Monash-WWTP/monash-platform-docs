# Science implementation guide plan

**Goal:** Explain how the current model is implemented without making readers traverse a mathematical appendix.

**Approved brief:** Keep an implementation walkthrough and key equations visible; move full updates/pseudocode into expandable details; place references beside supported claims and distinguish original heuristics from published methods. User authorized checking, planning and implementation together.

**Architecture:** Retain the existing MDX pages and KaTeX renderer. Use native Fumadocs Accordions for optional detail. Preserve source revisions, scientific limitations and all implementation equations.

**Tech stack:** Fumadocs MDX, KaTeX, existing documentation checks.

## Constraints

- Do not change model semantics or claim calibration/validation.
- Guideline supports accounting arithmetic/defaults subject to recorded ambiguities; it does not support effluent coefficients.
- Keep source evidence links and existing navigation anchors.
- No new dependencies or model changes.

## Tasks

- [x] Check current pages, pinned source audit and primary references; verify guideline equation/table locations from preserved PDF.
- [x] Effluent page: lead with implementation steps; show only flow/concentration equations; place detailed mathematics and pseudocode in one closed accordion; add source-context references.
- [x] Carbon page: retain core accounting equations; place aggregation/pseudocode and factor caveats in optional detail; add numbered guideline reference beside equations and a compact references list.
- [x] Update science index copy. Check links/source evidence, tests, lint, types, build and desktop/mobile default/expanded states.
- [ ] Open PR, check hosted CI and deploy after the authorized squash merge.

## Review focus

Collapsed detail must remain reachable by keyboard. Equations must precede matching pseudocode when expanded. References must say what they support; IWA benchmarks and IPCC are context, not sources for our heuristic constants. Preserve negative-recovery behavior and the methane conversion-placement ambiguity.

## Execution notes

Checked the preserved guideline PDF: Eqs. 5.25/5.28 and Tables 5.6/5.8 agree with the existing source audit, including recovery-placement and Kjeldahl terminology issues. Publisher endpoint was inaccessible; the linked preserved edition is identified explicitly. IWA benchmark and IPCC chapter checked as context only. Full effluent mathematics retained in a closed native accordion; only one equation block remains in the main reading path. Appendix headings retain IDs without crowding the main table of contents.

Independent review: no material scientific regressions; clarified that the full update sequence repeats four times per day. Local documentation check (79 pages/44 evidence entries), 10 tests, lint, typecheck and production build pass. Browser review at 390px and 1280px confirms default closed details, expandable mechanics, reference links and no horizontal document overflow.
