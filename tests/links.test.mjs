import test from 'node:test';
import assert from 'node:assert/strict';
import { parseDocument, validateLinks, validateSourceLinks } from '../scripts/links.mjs';
test('links resolve actual headings and card targets including URL-encoded fragments',()=>{
 const pages=new Map([['index',parseDocument('# Start\n\n[Go](/docs/task#expected-result)\n<Card href="/docs/task" title="Task" />')],['task',parseDocument('## Expected result\n\nBack [home](/docs).')]]);
 assert.deepEqual(validateLinks(pages),[]);
 pages.set('task',parseDocument('## Different\n\n[broken](/docs/absent)'));
 assert.match(validateLinks(pages).join(),/expected-result/);
 assert.match(validateLinks(pages).join(),/absent/);
});
test('code examples are not mistaken for navigation and repeated heading IDs remain distinct',()=>{
 const doc=parseDocument('## Retry\n## Retry\n\n```md\n[not a link](/docs/missing)\n```');
 assert.deepEqual([...doc.anchors],['retry','retry-1']);
 assert.deepEqual(validateLinks(new Map([['index',doc]])),[]);
});

test('rendered SourceLinks evidence is part of validation, not only literal anchors',()=>{
 const doc=parseDocument('<SourceLinks paths={["does/not/exist.py"]} />');
 assert.deepEqual(doc.sourcePaths,['does/not/exist.py']);
});

test('rendered evidence must exist and belong to its page, including index aliases',()=>{
 const pages=new Map([['science',parseDocument('<SourceLinks paths={["model.py"]} />')]]);
 const coverage=[{page:'science/index',evidence:['model.py']}];
 assert.deepEqual(validateSourceLinks(pages,coverage,{'model.py':'blob'}),[]);
 assert.match(validateSourceLinks(pages,coverage,{}).join(),/unknown source path/);
 assert.match(validateSourceLinks(pages,[],{'model.py':'blob'}).join(),/absent from coverage/);
 assert.throws(()=>parseDocument('<SourceLinks paths={dynamicPaths} />'));
});
