import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { documentedSchema } from '../lib/documented-schema.mjs';
test('reviewed examples cover scenario workflows without changing the upstream contract',async()=>{
 const source=JSON.parse(await readFile('reference/openapi.json','utf8'));
 const before=JSON.stringify(source);
 const rendered=documentedSchema(source);
 assert.deepEqual(rendered.components.schemas.CompareRequest.example.run_ids,[101,102]);
 assert.equal(rendered.components.schemas.RunRequest.example.model_id,'effluent_v1');
 assert.equal(rendered.components.schemas.ScenarioIn.example.horizon,'3_months');
 assert.equal(JSON.stringify(source),before);
});
