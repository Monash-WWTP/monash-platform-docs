import examples from '../reference/examples.json' with { type: 'json' };
// Rendering overlay only: the pinned upstream OpenAPI file remains byte-identical.
export function documentedSchema(source) {
 const schema=structuredClone(source);
 schema.servers=[{url:'http://127.0.0.1:8181',description:'Synthetic local development only'}];
 for(const [name,value] of Object.entries(examples)) {
  schema.components.schemas[name].example=value;
  schema.components.schemas[name].examples=[value];
 }
 for(const path of Object.values(schema.paths))for(const operation of Object.values(path)) {
  if(!operation||typeof operation!=='object')continue;
  const media=[...Object.values(operation.requestBody?.content??{}),...Object.values(operation.responses??{}).flatMap(r=>Object.values(r.content??{}))];
  for(const item of media){const name=item.schema?.$ref?.split('/').at(-1);if(examples[name])item.example=examples[name];}
 }
 return schema;
}
