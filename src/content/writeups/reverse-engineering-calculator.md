---
title: "Reverse Engineering Calculator"
slug: "reverse-engineering-calculator"
order: 4
category: "Reverse Engineering"
difficulty: "Beginner"
status: "Planned"
date: "2026"
summary: "Notes for a reverse engineering challenge involving a calculator-like binary and understanding program behaviour."
tools:
  - "file"
  - "strings"
  - "Ghidra"
  - "gdb"
concepts:
  - "Binary analysis"
  - "Input handling"
  - "Program flow"
lesson: "For beginner reversing, understand the program flow before trying random inputs."
files: []
externalLink: ""
cover: ""
---

## Notes

Start with `file` and `strings`.

Check program architecture.

Look for interesting functions, comparisons, and input checks.

## Rough flow

1. Identify the binary type.
2. Run `strings`.
3. Test basic inputs.
4. Open in Ghidra.
5. Trace the important logic.