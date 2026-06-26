---
title: "Errors I Fixed"
slug: "errors-i-fixed"
order: 2
type: "Debugging"
status: "Ongoing"
date: "Ongoing"
summary: "A record of annoying errors and how I fixed them, so I do not waste time solving the same thing twice."
tags:
  - "Debugging"
  - "VS Code"
  - "Astro"
  - "Terminal"
files: []
links: []
cover: ""
---

## Wrong folder in terminal

If `npm run dev` fails because `package.json` cannot be found, check that the terminal is inside the project folder.

Correct:

```powershell
cd "D:\Yaohan's Portfolio\portfolio"
npm run dev
```

## Import mismatch

If Astro says something is not iterable or undefined, check whether the export name and import name match exactly.

Example:

```ts
export const labs = []
```

Should match:

```ts
import { labs } from '../data/labs'
```

## Public script warning

If Astro complains about a public script reference, use `is:inline` or move the script into the page properly.

Example:

```astro
<script is:inline src="/scripts/typing-intro.js"></script>
```