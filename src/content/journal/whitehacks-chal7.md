---
title: Whitehacks - Challenge 7 (good-morning)
slug: whitehacks-chal7
order: 999
date: '2026-06-28'
mood: CTFs
category: Journal
summary: ''
tags: []
lesson: ''
cover: /uploads/1782652094049-screenshot-2026-06-28-210748.png
pinned: false
featured: false
---
[Hello_good_morning_prof.pdf](/uploads/1782652113641-hello_good_morning_prof.pdf)

The PDF has a hidden embedded image behind/inside the document. Extracting the images reveals the flag:

WH26{h3Llo_good_morning_w0rld_289301}

Useful commands:

pdfimages -png Hello_good_morning_prof.pdf extracted

Then open the extracted image. The black redaction bars are basically bait; the actual flag is in an embedded image.
