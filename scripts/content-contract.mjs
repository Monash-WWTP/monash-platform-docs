export const requiredWorkflows = ['citizen-start','operator-start','local-start','android-build','monitoring','community','report-submit','moderation','scenario-run','compare','publish','identity','report-lifecycle','run-provenance','effluent-model','carbon-accounting','validation','api-reference','recovery','release'];
export function validateCoverage(entries, pages, evidence, required = requiredWorkflows) {
 const errors = [], ids = new Set();
 for (const entry of entries) {
  if (ids.has(entry.id)) errors.push(`Duplicate workflow: ${entry.id}`);
  ids.add(entry.id);
  if (!pages.has(entry.page)) errors.push(`Missing page: ${entry.page}`);
  if (!['source','released','verified-environment','pending'].includes(entry.status)) errors.push(`Invalid status: ${entry.status}`);
  if (!entry.evidence?.length) errors.push(`Missing evidence for ${entry.id}`);
  for (const path of entry.evidence ?? []) if (!evidence.has(path)) errors.push(`Unknown evidence: ${path}`);
 }
 for (const id of required) if (!ids.has(id)) errors.push(`Missing workflow: ${id}`);
 return errors;
}
