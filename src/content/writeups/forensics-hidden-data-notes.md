---
title: "Forensics Hidden Data Notes"
slug: "forensics-hidden-data-notes"
order: 5
category: "Forensics"
difficulty: "Beginner"
status: "Planned"
date: "2026"
summary: "A general note template for forensic CTF challenges involving hidden files, metadata, strings, and suspicious artefacts."
tools:
  - "strings"
  - "binwalk"
  - "exiftool"
  - "HxD"
  - "CyberChef"
concepts:
  - "Metadata"
  - "File signatures"
  - "Hidden data"
  - "Encoding"
lesson: "Forensics challenges usually reward checking simple artefacts carefully before overcomplicating."
files: []
externalLink: ""
cover: ""
---

## Notes

Check file type and extension mismatch.

Run strings and inspect metadata.

Look for encoded text, appended data, or suspicious headers.

## Rough flow

1. Check file type.
2. Inspect metadata.
3. Run strings.
4. Check for appended data.
5. Decode suspicious text.