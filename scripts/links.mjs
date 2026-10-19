import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkMdx from 'remark-mdx';
import remarkMath from 'remark-math';
import { visit } from 'unist-util-visit';
import GithubSlugger from 'github-slugger';
export function parseDocument(body) {
 const tree=unified().use(remarkParse).use(remarkMath).use(remarkMdx).parse(body);
 const sourcePaths=[],links=[],anchors=new Set(),slugger=new GithubSlugger();
 const text=node=>node.value??node.children?.map(text).join('')??'';
 visit(tree,node=>{
  if(node.name==='SourceLinks'){const attr=node.attributes?.find(a=>a.name==='paths');const paths=JSON.parse(attr?.value?.value??'null');if(!Array.isArray(paths)||paths.some(p=>typeof p!=='string'))throw Error('SourceLinks requires a literal string array');sourcePaths.push(...paths);}
  if(node.type==='heading')anchors.add(slugger.slug(text(node)));
  if(node.type==='link'||node.type==='image')links.push(node.url);
  if(node.type==='mdxJsxFlowElement'||node.type==='mdxJsxTextElement')for(const attr of node.attributes??[])if(['href','src'].includes(attr.name)&&typeof attr.value==='string')links.push(attr.value);
 });
 return {links,anchors,sourcePaths};
}
export function validateLinks(pages, assets = new Set()){
 const errors=[];
 for(const [page,data]of pages)for(const href of data.links){
  if(/^(https?:|mailto:)/.test(href)||href==='/')continue;
  if(assets.has(href.split(/[?#]/)[0]))continue;
  if(!href.startsWith('/docs')&&!href.startsWith('#')){errors.push(`${page}: unsupported relative/local link ${href}`);continue;}
  const [url,fragment]=href.split('#');
  const target=url?url.replace(/^\/docs\/?/,'').replace(/\/$/,'')||'index':page;
  const doc=pages.get(target);
  if(!doc)errors.push(`${page}: missing link target ${href}`);
  else if(fragment&&!doc.anchors.has(decodeURIComponent(fragment)))errors.push(`${page}: missing anchor ${href}`);
 }
 return errors;
}

export function validateSourceLinks(pages, coverage, inventory) {
 const errors=[];
 for(const [slug,doc] of pages){
  const evidence=coverage.find(entry=>entry.page===slug||entry.page===`${slug}/index`)?.evidence??[];
  for(const path of doc.sourcePaths??[]){
   if(!Object.hasOwn(inventory,path))errors.push(`${slug}: unknown source path ${path}`);
   if(!evidence.includes(path))errors.push(`${slug}: source path absent from coverage ${path}`);
  }
 }
 return errors;
}
