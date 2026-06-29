---
title: 'Hydra (Password Cracking ) '
slug: hydra
order: 999
type: Class Notes
status: Active
date: '2026-06-29'
summary: >-
  - cracking tool that supports various protocols  (SSH, FTP, HTTP and more )

  - dictionary-based attacks to find valid usernames and passwords for a given
  service
tags: []
files: []
links: []
cover: ''
---
hydra -l <username> -P user/share/wordlists/rockyou.txt <target_IP> -t 4 ssh -V

-l  → specifies username 

-P → specifies path to a wordlists 

-t → set the number of parallel connection 

-V → enable verbosity (optional)

ssh → indicates protocol 

if dont have username → try default (admin, root )
