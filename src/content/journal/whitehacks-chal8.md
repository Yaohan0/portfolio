---
title: Whitehacks - CHALLENGE 8 (shoppee)
slug: whitehacks-chal8
order: 999
date: '2026-06-29'
mood: Writing
category: Journal
summary: 'MISC Challenge '
tags: []
lesson: ''
cover: /portfolio/uploads/1782795713837-screenshot-2026-06-30-130132.png
pinned: false
featured: false
---
This one is a packed ELF. After unpacking / dumping the runtime code, the program checks a 6-digit Shopee Collection PIN.



```bash
chmod +x package
printf '420133\n' | ./package
```

Enter Shopee Collection PIN: WH2026{2x32gb_g.skill_trident_z_ddr5}
