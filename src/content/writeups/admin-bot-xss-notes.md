---
title: "Admin Bot XSS Notes"
slug: "admin-bot-xss-notes"
order: 2
category: "Web"
difficulty: "Intermediate"
status: "In Progress"
date: "2026"
summary: "Notes for admin-bot style XSS challenges involving cookies, bot visits, payload testing, and browser behaviour."
tools:
  - "Browser DevTools"
  - "Webhook.site"
  - "Burp Suite"
concepts:
  - "XSS"
  - "Cookies"
  - "Admin bot"
  - "Client-side security"
lesson: "For XSS, first prove execution. Then understand what the bot can access."
files: []
externalLink: ""
cover: ""
---

## Notes

Confirm where user input is reflected.

Check whether HTML is escaped or rendered.

Test simple script execution before trying to exfiltrate anything.

## Rough flow

1. Find the reflection point.
2. Test harmless HTML.
3. Test simple JavaScript execution.
4. Confirm whether the admin bot visits the page.
5. Understand what cookies or pages the bot can access.