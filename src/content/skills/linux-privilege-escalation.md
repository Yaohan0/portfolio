---
name: "Linux Privilege Escalation"
slug: "linux-privilege-escalation"
order: 2
category: "Post-Exploitation"
level: "Learning"
status: "Active"
description: "Checking Linux systems for weak permissions, SUID binaries, sudo rights, cron jobs, writable paths, and leaked credentials."
evidence:
  - "Used during vulnerable VM practice"
  - "Practiced sudo -l checks"
  - "Reviewed SUID and writable directory paths"
tools:
  - "LinPEAS"
  - "Bash"
  - "find"
  - "sudo"
  - "SSH"
notes: "Still building the habit of checking systematically instead of randomly trying commands."
cover: ""
---

## What this skill means

Linux privilege escalation is about finding safe, explainable ways to move from a low-privileged user to higher privileges in a lab environment.

## Current focus

I want to improve my checklist: sudo rights, SUID files, cron jobs, writable paths, credentials, services, and kernel information.