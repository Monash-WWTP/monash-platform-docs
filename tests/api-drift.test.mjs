import test from 'node:test';
import assert from 'node:assert/strict';
import { schemaDigest, operations } from '../scripts/api-contract.mjs';
test('schema drift changes its digest and only HTTP operations count',()=>{
 const schema={paths:{'/api/v1/ready':{get:{operationId:'ready'},parameters:[]}}};
 assert.deepEqual(operations(schema),['GET /api/v1/ready']);
 assert.notEqual(schemaDigest(schema),schemaDigest({...schema,info:{version:'changed'}}));
});
