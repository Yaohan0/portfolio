---
title: Whitehacks - Challenge 4 (Colour Mixing)
slug: whitehacks-chal4
order: 999
date: '2026-06-28'
mood: CTFs
category: Journal
summary: '[Request Writeup] '
tags: []
lesson: ''
cover: /uploads/1782825315420-screenshot-2026-06-28-205711.png
pinned: false
featured: false
---
[decrypt.py](/portfolio/uploads/1782651482107-decrypt.py)

[colour_mixing.pcap](/portfolio/uploads/1782651497957-colour_mixing.pcap)

The important clue is:

Three IPs appear, but protocol was designed for two.

So 10.0.0.99 is probably a MITM/proxy between Alice and Bob.

From your Wireshark:

IP	Likely role
10.0.0.1	Alice
10.0.0.2	Bob
10.0.0.99	Attacker / middlebox

Bob actually received the final encrypted recipe from:

10.0.0.99 -> 10.0.0.2

That is packet 8 in your screenshot.

---

1. Extract all TCP payloads

In terminal:

tshark -r colour_mixing.pcap -Y "tcp.len > 0" -T fields \
-e frame.number -e ip.src -e ip.dst -e tcp.srcport -e tcp.dstport -e data.data

You should get something like:

1  10.0.0.1   10.0.0.99  4444 1337  <hex>
3  10.0.0.99  10.0.0.1   1337 4444  <hex>
4  10.0.0.99  10.0.0.2   5555 1337  <hex>
6  10.0.0.2   10.0.0.99  1337 5555  <hex>
7  10.0.0.1   10.0.0.99  4444 1337  <hex>
8  10.0.0.99  10.0.0.2   5555 1337  <hex>

The first few packets are probably Diffie-Hellman values.

From your screenshot, packet 1 contains:

KeyForge/V1 p=104729 g=5

So:

p = 104729
g = 5
2. Decode the cleartext packets

Take the hex from packets 1, 3, 4, 6 and decode them.

Example:

echo "4b6579466f7267652f563120703d31303437323920673d350a" | xxd -r -p

You are looking for public values like:

A=xxxxx
B=yyyyy

or similar.

Because p = 104729 is small, you can brute-force the private exponent.

3. Recover the Bob-side shared secret

You need the shared secret for this pair:

10.0.0.99 <-> 10.0.0.2

Not Alice directly.

Use this helper script:

from hashlib import sha256
from Crypto.Cipher import AES

p = 104729
g = 5

# Fill these from Wireshark cleartext packets
pub_from_99_to_bob = 12345   # packet 4 or similar
pub_from_bob_to_99 = 67890   # packet 6 or similar

def dlog(g, y, p):
    cur = 1
    for x in range(p):
        if cur == y:
            return x
        cur = (cur * g) % p
    raise ValueError("no discrete log found")

# recover private exponent for Bob's public value
bob_private = dlog(g, pub_from_bob_to_99, p)

# shared secret between Bob and 10.0.0.99
shared_secret = pow(pub_from_99_to_bob, bob_private, p)

print("bob_private =", bob_private)
print("shared_secret =", shared_secret)
4. Decrypt packet 8

Packet 8 is the one Bob actually received:

10.0.0.99 -> 10.0.0.2

Its payload is probably:

IV || ciphertext

AES IV is 16 bytes, so:

first 32 hex chars = IV
remaining hex = ciphertext

Example:

payload_hex = "PASTE_PACKET_8_HEX_HERE"

iv_hex = payload_hex[:32]
ct_hex = payload_hex[32:]

print(iv_hex)
print(ct_hex)

Then run the given decrypt script:

python decrypt.py <shared_secret> <iv_hex> <ct_hex>

Example format:

python decrypt.py 12345 aabbccddeeff00112233445566778899 deadbeef...
What to focus on

Do not decrypt packet 7 for the answer first.

Packet 7:

10.0.0.1 -> 10.0.0.99

That is what Alice sent to the attacker.

Packet 8:

10.0.0.99 -> 10.0.0.2

That is what Bob actually received.

So the solve path is:

Extract Bob-side DH public keys
↓
Brute-force private exponent because p is small
↓
Compute shared secret
↓
Split packet 8 into IV and ciphertext
↓
Run decrypt.py
↓
Submit decrypted recipe/flag

Upload the actual .pcap if you want me to extract the exact shared secret and plaintext directly.

colour_mixing.pcap
File
Thought for 49s

I extracted the .pcap. The key point is that Bob received packet 8, not packet 7.

Packet flow
Packet	Direction	Meaning
1	10.0.0.1 -> 10.0.0.99	Protocol setup: p=104729 g=5
2	10.0.0.1 -> 10.0.0.99	Alice public key: A = 37724
3	10.0.0.99 -> 10.0.0.1	MITM public key to Alice: B = 97017
4	10.0.0.99 -> 10.0.0.2	Protocol setup: p=104729 g=5
5	10.0.0.99 -> 10.0.0.2	MITM public key to Bob: A = 47012
6	10.0.0.2 -> 10.0.0.99	Bob public key: B = 43452
7	10.0.0.1 -> 10.0.0.99	Alice’s original encrypted recipe
8	10.0.0.99 -> 10.0.0.2	Recipe Bob actually received
Decrypted messages

Alice originally sent:

Recipe for purple: mix 'WH2026{mall0ry_1n' and red. -- Alice

But Bob actually received:

Recipe for purple: mix '_th3_m1ddl3}' and red. -- Alice

So combine the two quoted parts:

WH2026{mall0ry_1n_th3_m1ddl3}
Submit
WH2026{mall0ry_1n_th3_m1ddl3}
