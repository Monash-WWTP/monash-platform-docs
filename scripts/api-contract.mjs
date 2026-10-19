import { createHash } from 'node:crypto';
export const schemaDigest = schema => createHash('sha256').update(JSON.stringify(schema)).digest('hex');
export const operations = schema => Object.entries(schema.paths ?? {}).flatMap(([path, item]) => Object.keys(item).filter(method=>['get','post','put','patch','delete','head','options','trace'].includes(method)).map(method=>`${method.toUpperCase()} ${path}`)).sort();
