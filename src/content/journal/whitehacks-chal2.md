---
title: Whitehacks - CHALLENGE 2 (lost_xor_password)
slug: whitehacks-chal2
order: 999
date: '2026-06-28'
mood: CTFs
category: Journal
summary: |-
  Crypto ctf 
  3e245d46574113313b373708072c1b0919131704010b1800491c
tags: []
lesson: ''
cover: /portfolio/uploads/1782650903829-screenshot-2026-06-28-203906.png
pinned: false
featured: false
---
Flag:

WH2026{XOR_is_reversible!}

How it was found:

ciphertext: 3e245d46574113313b373708072c1b0919131704010b1800491c
known flag prefix: WH2026{

XORing the ciphertext with WH2026{ gives the key start:

ilovewh

Likely full repeating key:

ilovewhitehats

Decrypting with that gives:

WH2026{XOR_is_reversible!}

[lost_XOR_password.txt](/uploads/1782650940412-lost_xor_password.txt)
