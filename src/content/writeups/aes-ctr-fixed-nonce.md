---
title: "AES CTR Fixed Nonce"
slug: "aes-ctr-fixed-nonce"
order: 3
category: "Crypto"
difficulty: "Beginner / Intermediate"
status: "Draft"
date: "2026"
summary: "A crypto writeup note about why reusing the same nonce in AES CTR can leak relationships between plaintexts."
tools:
  - "Python"
  - "XOR logic"
  - "CyberChef"
concepts:
  - "AES CTR"
  - "Nonce reuse"
  - "XOR"
  - "Known plaintext"
lesson: "Nonce reuse in stream-like encryption modes is dangerous because it can expose plaintext relationships."
files: []
externalLink: ""
cover: ""
---

## Notes

CTR mode turns a block cipher into a stream cipher.

Reusing the same nonce can reuse the same keystream.

If the keystream is reused, XOR relationships can leak information.

## Rough flow

1. Identify that AES CTR is being used.
2. Check whether the nonce is reused.
3. Compare ciphertexts.
4. Use XOR reasoning.
5. Recover useful plaintext relationships.