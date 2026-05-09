#!/usr/bin/env bash
set -e
for app in cogniintel quantumroute-ai agentops-sentinel insightforge neurorecruit; do
  echo "\n=== Running $app ==="
  (cd apps/$app && python src/main.py)
done
