import { documentedSchema } from '../lib/documented-schema.mjs';
import { createOpenAPI } from 'fumadocs-openapi/server';
import { generateFilesOnly } from 'fumadocs-openapi';
import { readFile, writeFile, mkdir, readdir, rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { schemaDigest, operations } from './api-contract.mjs';
const schema=JSON.parse(await readFile('reference/openapi.json','utf8'));
const platform=JSON.parse(await readFile('reference/platform.json','utf8'));
const api=createOpenAPI({input:{platform:documentedSchema(schema)}});
const files=await generateFilesOnly({input:api,per:'operation',groupBy:'tag',includeDescription:true,addGeneratedComment:true,
 frontmatter:(title,description)=>({title,description:description??'Request, response and schema reference.',sourceRevision:platform.revision,lastVerified:platform.verifiedDate,full:true}),
});
const cards=files.map(file=>{
 const match=file.content.match(/^title: (.+)$/m);
 const title=match?.[1]?.replace(/^['"]|['"]$/g,'') ?? file.path;
 return `<Card title={${JSON.stringify(title)}} href="/docs/reference/api/${file.path.replace(/\.mdx$/, '')}">Request, response and schema reference.</Card>`;
});
files.push({path:'index.mdx',content:`---
title: Generated endpoints
description: All ${operations(schema).length} operations from the pinned platform OpenAPI contract.
sourceRevision: ${platform.revision}
lastVerified: ${platform.verifiedDate}
---

<Callout>Read-only reference. Live request execution is disabled; examples are synthetic. Authentication, ownership and domain rules still apply.</Callout>

<Cards>
${cards.join('\n')}
</Cards>
`});
const output='content/docs/reference/api';
const manifest={schemaDigest:schemaDigest(schema),operations:operations(schema),files:files.map(f=>f.path).sort()};
const check=process.argv.includes('--check');
if(check){
 for(const file of files){if(await readFile(join(output,file.path),'utf8').catch(()=>null)!==file.content)throw Error(`API reference drift: ${file.path}`);}
 const actual=JSON.parse(await readFile('reference/generated-api.json','utf8'));
 if(JSON.stringify(actual)!==JSON.stringify(manifest))throw Error('API schema/operation manifest drift');
 console.log(`API reference current: ${manifest.operations.length} operations`);
}else{
 await mkdir(output,{recursive:true});
 // Only this generated directory is replaced; authored overview lives elsewhere.
 for(const entry of await readdir(output))await rm(join(output,entry),{recursive:true,force:true});
 for(const file of files){await mkdir(dirname(join(output,file.path)),{recursive:true});await writeFile(join(output,file.path),file.content);}
 await writeFile('reference/generated-api.json',JSON.stringify(manifest,null,2)+'\n');
 console.log(`Generated ${files.length} API pages for ${manifest.operations.length} operations`);
}
