---
title: 'N0H4TS: Forensics - Something''s Fishy'
slug: untitled-journal-entry
order: 999
date: '2026-09-19'
mood: Writing
category: Progress
summary: "Wireshark - PCAP, Network, HTTP\_"
tags: []
lesson: ''
linkedinUrl: ''
cover: ''
pinned: false
featured: false
---
IT flagged unusual outbound traffic from the office network overnight, all of it originating from the smart aquarium controller in the break room. Nobody has touched that thing since it was installed, and it has no business talking to anything outside the building. A network tap caught the whole session before the connection dropped. Dig through the capture and work out what walked out of the office.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

The capture has a lot of normal-looking traffic, including a workstation browsing sites like Google, GitHub, YouTube, etc. That is mostly noise.



The aquarium controller turns out to be: {something's fishy -> aquarium?}




192.168.1.40



traffic from that IP uses headers like:

User-Agent: AquaCtl/2.1.4 (Linux; IoT)



and talks to aquarium-related domains such as:

api.aquamonitor.io
telemetry.aqctl.net
firmware.aqctl.net

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.

narrow it further to HTTP:
ip.addr == 192.168.1.40 && http
Or outbound HTTP only:
ip.src == 192.168.1.40 && http
Now the suspicious requests become much easier to see.



Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.

Example 2:

Several packets contain ordinary POST requests like this:
POST /v2/telemetry/push HTTP/1.1
Host: telemetry.aqctl.net
User-Agent: AquaCtl/2.1.4 (Linux; IoT)
Content-Type: application/x-www-form-urlencoded

payload=eyJ0ZW1wIjoyNS41LCJwaCI6Ny4wMSwidHVyYmlkaXR5IjoxLjU5LCJ0cyI6MTcyMzE5MDQxNn0=
That payload looks like Base64.



Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

Packet 222
POST /v2/telemetry/push HTTP/1.1
Host: telemetry.aqctl.net
User-Agent: AquaCtl/2.1.4 (Linux; IoT)
Content-Type: application/x-www-form-urlencoded

seq=0&payload=Q1lCRVJMRUFHVUV7ZnI0
There are two suspicious differences.
First:
seq=0
Normal telemetry doesn't contain a sequence number.
Second, the payload is much shorter:
Q1lCRVJMRUFHVUV7ZnI0
That strongly suggests this is a fragment of something larger.

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].



This is somewhat decent in terms of efficiency with O(n).

```bash
class Solution(object):
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """
        values = {
            "I": 1,
            "V":5,
            "X":10,
            "L":50,
            "C":100,
            "D":500,
            "M":1000
        }

        total = 0
        

        for i in range(len(s)):
            if i + 1 < len(s) and values[s[i]] < values[s[i+1]]:
                total -= values[s[i]]
            else:
                total += values[s[i]]

        return total
```

## 📁 Notes

![Image](/uploads/1789781548541-screenshot-2026-09-19-093208.png)
