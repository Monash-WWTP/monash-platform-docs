"""Validate reviewed synthetic examples using the pinned platform's actual validators.
Run with its uv environment and PYTHONPATH=services/api.
"""
import json
from pathlib import Path
from app.reporting.schemas import ReportInput, ModerationInput
from app.http.contracts import ReportView
examples = json.loads((Path(__file__).resolve().parents[1] / 'reference/examples.json').read_text())
for model in (ReportInput, ReportView, ModerationInput):
    model.model_validate(examples[model.__name__])
print('3 synthetic examples accepted by platform domain validators')
