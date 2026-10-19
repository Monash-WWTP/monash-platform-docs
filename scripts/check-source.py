"""Verify the pinned evidence inventory against a local platform checkout; never modifies it."""
import argparse,json,subprocess
from pathlib import Path
p=argparse.ArgumentParser(description=__doc__);p.add_argument('--source',required=True,type=Path);a=p.parse_args()
root=Path(__file__).resolve().parents[1]
snapshot=json.loads((root/'reference/platform.json').read_text())
coverage=json.loads((root/'content/coverage.json').read_text())
paths={path for entry in coverage for path in entry['evidence']}
for path in sorted(paths):
 blob=subprocess.check_output(['git','rev-parse',snapshot['revision']+':'+path],cwd=a.source,text=True).strip()
 assert blob==snapshot['files'][path],f'Evidence mismatch: {path}'
api=subprocess.check_output(['git','show',snapshot['revision']+':services/api/openapi.json'],cwd=a.source)
assert api==(root/'reference/openapi.json').read_bytes(),'OpenAPI source mismatch'
print(f'Pinned evidence verified: {len(paths)} files; OpenAPI snapshot byte-identical')
