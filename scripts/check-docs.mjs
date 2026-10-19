import { readFile,readdir } from 'node:fs/promises';
import { join,relative } from 'node:path';
import { parse } from 'yaml';
import { parseDocument,validateLinks } from './links.mjs';
import { validateCoverage } from './content-contract.mjs';
export async function filesIn(dir){const out=[];for(const entry of await readdir(dir,{withFileTypes:true})){const path=join(dir,entry.name);if(entry.isDirectory())out.push(...await filesIn(path));else out.push(path);}return out;}
const root='content/docs',files=await filesIn(root),pages=new Map(),errors=[];
const platform=JSON.parse(await readFile('reference/platform.json','utf8'));
for(const file of files.filter(f=>f.endsWith('.mdx'))){
 const raw=await readFile(file,'utf8'),end=raw.indexOf('\n---',4),slug=relative(root,file).replace(/\.mdx$/,'');
 if(!raw.startsWith('---\n')||end<0){errors.push(`${file}: frontmatter missing`);continue;}
 const meta=parse(raw.slice(4,end)),body=raw.slice(end+4);
 for(const key of ['title','description','sourceRevision','lastVerified'])if(!meta[key])errors.push(`${file}: missing ${key}`);
 if(meta.sourceRevision!==platform.revision)errors.push(`${file}: source revision mismatch`);
 if(!/^\d{4}-\d{2}-\d{2}$/.test(String(meta.lastVerified)))errors.push(`${file}: invalid verification date`);
 if(/Hello World|Your first document|TODO|TBD/.test(body))errors.push(`${file}: boilerplate/placeholder remains`);
 try{pages.set(slug,parseDocument(body));}catch(error){errors.push(`${file}: ${error.message}`);}
}
// Fumadocs maps folder/index.mdx to the folder route.
for(const [slug,doc]of [...pages])if(slug.endsWith('/index'))pages.set(slug.slice(0,-6),doc);
errors.push(...validateLinks(pages));
const coverage=JSON.parse(await readFile('content/coverage.json','utf8'));
for(const [slug,doc]of pages){const evidence=coverage.find(entry=>(entry.page===slug||entry.page===`${slug}/index`))?.evidence??[];for(const path of doc.sourcePaths){if(!platform.files[path])errors.push(`${slug}: unknown source path ${path}`);if(!evidence.includes(path))errors.push(`${slug}: source path absent from coverage ${path}`);}}
errors.push(...validateCoverage(coverage,new Set(pages.keys()),new Set(Object.keys(platform.files))));
for(const file of files.filter(f=>f.endsWith('meta.json'))){
 const meta=JSON.parse(await readFile(file,'utf8'));
 for(const item of meta.pages??[]){if(item==='...')continue;const dir=file.slice(0,-9);if(!files.some(path=>path===join(dir,item+'.mdx')||path.startsWith(join(dir,item)+'/')))errors.push(`${file}: missing navigation target ${item}`);}
}
const home=await readFile('app/(home)/page.tsx','utf8');
for(const href of [...home.matchAll(/href="(\/docs[^"#]*)"/g)].map(m=>m[1])){const target=href.replace(/^\/docs\/?/,'')||'index';if(!pages.has(target))errors.push(`Landing page target missing: ${href}`);}
if(errors.length){console.error(errors.join('\n'));process.exit(1);}
console.log(`Documentation checks passed: ${files.filter(f=>f.endsWith('.mdx')).length} pages, ${coverage.length} workflow/evidence entries`);
