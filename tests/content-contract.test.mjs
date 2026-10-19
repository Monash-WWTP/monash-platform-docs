import test from 'node:test';
import assert from 'node:assert/strict';
import { validateCoverage } from '../scripts/content-contract.mjs';
const pages = new Set(['get-started/citizens', 'get-started/operators', 'get-started/local-development', 'science/index']);
const evidence = new Set(['services/api/app/main.py']);
const entry = { id: 'citizen-start', page: 'get-started/citizens', audience: 'citizen', status: 'released', evidence: ['services/api/app/main.py'] };
test('missing workflows, broken page targets and missing evidence fail with actionable diagnostics', () => {
 assert.match(validateCoverage([], pages, evidence, ['citizen-start']).join(), /citizen-start/);
 assert.deepEqual(validateCoverage([entry], pages, evidence, ['citizen-start']), []);
 assert.match(validateCoverage([{...entry, page:'missing'}], pages, evidence, []).join(), /missing/);
 assert.match(validateCoverage([{...entry, evidence:['absent.py']}], pages, evidence, []).join(), /absent.py/);
});
test('duplicate workflow IDs and unsupported publication status are rejected', () => {
 assert.match(validateCoverage([entry,entry], pages, evidence, []).join(), /Duplicate/);
 assert.match(validateCoverage([{...entry,status:'validated'}], pages, evidence, []).join(), /status/);
});
