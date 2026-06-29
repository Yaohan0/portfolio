"""
Given a shared secret plus an iv and ciphertext (both hex), print the plaintext.
"""

import sys
from hashlib import sha256
from Crypto.Cipher import AES


def decrypt(shared_secret: int, iv_hex: str, ct_hex: str) -> bytes:
    """Derive the AES key from the shared secret and decrypt one leg."""
    key = sha256(str(shared_secret).encode()).digest()
    iv  = bytes.fromhex(iv_hex)
    ct  = bytes.fromhex(ct_hex)
    return AES.new(key, AES.MODE_CFB, iv).decrypt(ct)


if __name__ == "__main__":
    if len(sys.argv) != 4:
        print("usage: python decrypt.py <shared_secret> <iv_hex> <ct_hex>")
        sys.exit(1)

    shared_secret = int(sys.argv[1])
    iv_hex        = sys.argv[2]
    ct_hex        = sys.argv[3]

    plaintext = decrypt(shared_secret, iv_hex, ct_hex)
    print(plaintext.decode(errors="replace"))