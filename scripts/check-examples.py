"""Validate reviewed synthetic examples using the pinned platform's actual validators.
Run with its uv environment and PYTHONPATH=services/api.
"""
import json
from pathlib import Path
from app.reporting.schemas import ReportInput, ModerationInput
from app.http.contracts import ReportView
from app.schemas import ScenarioIn, RunRequest, CompareRequest
examples = json.loads((Path(__file__).resolve().parents[1] / 'reference/examples.json').read_text())
for model in (ReportInput, ReportView, ModerationInput, ScenarioIn, RunRequest, CompareRequest):
    model.model_validate(examples[model.__name__])
assert len(set(examples['CompareRequest']['run_ids'])) == len(examples['CompareRequest']['run_ids'])
print('6 synthetic examples accepted by platform validators; comparison IDs are distinct')
