---
title: 'Try Hack Me: c4ptur3-th3-fl4g'
slug: untitled-journal-entry
order: 999
date: '2026-08-19'
mood: Writing
category: Journal
summary: "Simple CTF for beginners!\_\nTool needed: Cyberchef"
tags: []
lesson: ''
cover: /uploads/1787108396309-screenshot-2026-08-19-105948.png
pinned: false
featured: false
---
## Task 1 - Translation & Shifting

Q1: c4n y0u c4p7u23 7h3 f149?

```bash
answer: can you capture the flag?
literal translation 
```

Q2: 01101100 01100101 01110100 01110011 00100000 01110100 01110010 01111001 00100000 01110011 01101111 01101101 01100101 00100000 01100010 01101001 01101110 01100001 01110010 01111001 00100000 01101111 01110101 01110100 00100001

```bash
Answer: lets try some binary out! 
[Binary Format] 
```

Q3: MJQXGZJTGIQGS4ZAON2XAZLSEBRW63LNN5XCA2LOEBBVIRRHOM======

```bash
Answer: base32 is super common in CTF's
Base32: uses A–Z and 2–7, often with = padding.
Base64: normally uses A–Z, a–z, 0–9, +, / (or -, _ in URL-safe Base64).
```

Q4: RWFjaCBCYXNlNjQgZGlnaXQgcmVwcmVzZW50cyBleGFjdGx5IDYgYml0cyBvZiBkYXRhLg==

```bash
Answer: Each Base64 digit represents exactly 6 bits of data.
Base64 
```

Q5: 68 65 78 61 64 65 63 69 6d 61 6c 20 6f 72 20 62 61 73 65 31 36 3f

```bash
Answer: hexadecimal or base16?
basically hexadecimal and base16 are the same thing 
Base 16 is the mathematical number system. It means you have 16 possible digits: 0–9 and A–F.
```

Q6: Ebgngr zr 13 cynprf!

```bash
Answer: Rotate me 13 places!

```

Q7: *@F DA:? >6 C:89E C@F?5 323J C:89E C@F?5 Wcf E:>6DX

```bash
Answer: You spin me right round baby right round (47 times)
Cipher Text (ROT47) - Put in Cyberchef! 

```

Q8: - . .-.. . -.-. --- -- -- ..- -. .. -.-. .- - .. --- -.

. -. -.-. --- -.. .. -. --.

```bash
Answer: telecommunication encoding

Morse Code decryption
```

Q9: 85 110 112 97 99 107 32 116 104 105 115 32 66 67 68

```bash
Answer: Unpack this BCD

```

Q10: LS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0KLS0tLS0gLi0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLi0tLS0KLS0tLS0gLS0tLS0gLi0tLS0gLS0tLS0gLS0tLS0gLS

```bash
Answer: Let's make this a bit trickier...
Multiple Layers to this one...
Full Chain:

```

## Spectograms 

A spectrogram is a tool used to visualize how the frequency content of a signal changes over time. It displays frequencies on the vertical axis, time on the horizontal axis, and the intensity of each frequency is represented by color or brightness. In the context of audio signals, spectrograms are particularly useful for analyzing speech, music, and other sounds. The different names such as sonographs, voiceprints, or voicegrams refer to their application in various fields like audio analysis, phonetics, and voice recognition. When represented in 3D, with an additional dimension often showing amplitude or intensity, they are referred to as waterfall plots, providing a more detailed and immersive view of the frequency dynamics over time.

## 📁 Notes

[secretaudio_1559007588454(1).wav](/uploads/1787122183510-secretaudio_1559007588454-1-.wav)

![Image](/uploads/1787122227525-screenshot-2026-08-19-144959.png)

Answer: Super Secret Message 

## Steganography

Steganography is the practice of hiding a secret message, file, or image inside another ordinary, non-secret file or physical object. The main goal is to hide the fact that a message even exists, allowing people to communicate safely without drawing any outside attention

[stegosteg_1559008553457.jpg](/uploads/1787124723130-stegosteg_1559008553457.jpg)

download image to Linux Machine 

![Image](/uploads/1787125007162-screenshot-2026-08-19-153549.png)

Mount from Windows to Linux Machine 

![Image](/uploads/1787125046177-screenshot-2026-08-19-153717.png)

Steghide info [image]
Steghide extract -sf [image]

need password/ passphrase -> crack it 

stegseek [image] -wordlist 

![Image](/uploads/1787125218347-screenshot-2026-08-19-154010.png)

password was just " " 
extracted the ouput 

![Image](/uploads/1787125251466-screenshot-2026-08-19-154045.png)

Answer: Spaghetti Steg

## Security Through Obscurity 

Security through obscurity is the reliance in security engineering on the secrecy of the design or implementation as the main method of providing security for a system or component of a system.

![Image](/uploads/1787125820237-screenshot-2026-08-19-155017.png)

Mounting the image to linux from windows 

![Image](/uploads/1787125850303-screenshot-2026-08-19-155042.png)

strings [image]
displays image context in text format? something lidat and revealed these.
