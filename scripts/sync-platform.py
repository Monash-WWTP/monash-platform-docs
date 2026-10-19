"""Refresh public contract/source identities from an explicitly reviewed local revision."""
import argparse, json, re, subprocess
from pathlib import Path
p=argparse.ArgumentParser(description=__doc__)
p.add_argument('--source',type=Path,required=True)
p.add_argument('--revision',required=True)
p.add_argument('--date',required=True,help='Actual source review date YYYY-MM-DD')
a=p.parse_args()
if not re.fullmatch(r'[0-9a-f]{40}',a.revision):p.error('Use a full reviewed commit SHA')
if not re.fullmatch(r'\d{4}-\d{2}-\d{2}',a.date):p.error('Use an ISO review date')
def git(*args):return subprocess.check_output(['git',*args],cwd=a.source)
files={}
for line in git('ls-tree','-r',a.revision).decode().splitlines():
 info,path=line.split('\t');files[path]=info.split()[2]
root=Path(__file__).resolve().parents[1]
(root/'reference/platform.json').write_text(json.dumps(dict(repository='https://github.com/Monash-WWTP/monash-platform',revision=a.revision,verifiedDate=a.date,files=files),indent=2)+'\n')
(root/'reference/openapi.json').write_bytes(git('show',a.revision+':services/api/openapi.json'))
print('Updated public snapshot. Review affected prose/metadata before regenerating and committing.')
