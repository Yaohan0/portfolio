---
title: "Useful Commands"
slug: "useful-commands"
order: 1
type: "Commands"
status: "Growing"
date: "Ongoing"
summary: "A place to store commands I keep reusing for Linux, networking, scanning, Git, and troubleshooting."
tags:
  - "Linux"
  - "Nmap"
  - "Git"
  - "Troubleshooting"
files: []
links: []
cover: ""
---

## Nmap basics

Common scan patterns, service detection, full-port scans, and quick checks that I use during labs.

```bash
nmap -sC -sV -oN scan.txt <target>
nmap -p- --min-rate 5000 -oN fullports.txt <target>
```

## Linux checks

Commands for users, groups, permissions, processes, services, and basic privilege escalation checks.

```bash
whoami
id
sudo -l
find / -perm -4000 -type f 2>/dev/null
```

## Git workflow

Commands for adding changes, committing updates, pushing to GitHub, and fixing simple mistakes.

```bash
git status
git add .
git commit -m "update site"
git push
```