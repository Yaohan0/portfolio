---
title: 'EHIP CASE STUDY SAMPLE 4 '
slug: ehip-case-study-s4
order: 999
status: Draft
type: Lab
description: 'Title: Brute Time '
tools: []
topics: []
files: []
cover: /portfolio/uploads/1782795854464-screenshot-2026-06-30-130407.png
summary: 'Title: Brute Time '
---
![Ip a ](/portfolio/uploads/1782799471579-screenshot-2026-06-30-140417.png)

IP Address of host machine -> 10.10.1.2/24 

![nmap -sn 10.10.1.0/24 ](/portfolio/uploads/1782799593346-screenshot-2026-06-30-140623.png)

Scanning of own network -> nmap -sn 10.10.1.0/24 
Result of Live Hosts shown -> 3 
10.10.1.1 (likely to be router ip ) 
10.10.1.219 (target machine most likely ) 
10.10.1.2 -> host machine 


![nmap -sC -sV 10.10.1.220](/portfolio/uploads/1782800473170-screenshot-2026-06-30-142106.png)

10.10.1.220
21/tcp  FTP   vsftpd 3.0.3
22/tcp  SSH   OpenSSH 8.2p1 Ubuntu
80/tcp  HTTP  Apache httpd 2.4.41

Anonymous FTP login allowed
File found: notifications.txt

This is likely your initial entry path, not Webmin

## RUN FULL PORT SCAN 

![Image](/portfolio/uploads/1782801800192-screenshot-2026-06-30-144307.png)

## Enumerating FTP 

![Image](/portfolio/uploads/1782801889197-screenshot-2026-06-30-144438.png)



![Image](/portfolio/uploads/1782801954144-screenshot-2026-06-30-144544.png)



![Image](/portfolio/uploads/1782801992519-screenshot-2026-06-30-144625.png)

Evidence	Meaning
ftp-anon: Anonymous FTP login allowed	Anonymous users can access FTP
notifications.txt exposed via FTP	Internal communication was leaked
File mentions John and SSH password change	Likely username: john
Apache shows Index of /	Directory listing is enabled, but no useful files shown yet
Gobuster only shows mostly 403 entries	No useful web path found so far

### Enumerate the Web Server

![Image](/portfolio/uploads/1782802283386-screenshot-2026-06-30-145117.png)



![Image](/portfolio/uploads/1782802362603-screenshot-2026-06-30-145237.png)



![Image](/portfolio/uploads/1782802770146-screenshot-2026-06-30-145914.png)



### Try Login Using ssh john@10.10.1.220

![Image](/portfolio/uploads/1782803209672-screenshot-2026-06-30-150625.png)

### Using Hydra to login to ssh 

![Image](/portfolio/uploads/1782803610073-screenshot-2026-06-30-151322.png)

### Login to John using SSH 

![Image](/portfolio/uploads/1782803771372-screenshot-2026-06-30-151606.png)

Initial access as user john and found the user proof:

User: john
Host: cloudlab-standard-PC-i440FX-PIIX-1996
User flag: 1200p6q2D1jwU2e1142s233609q61200



![Image]()



![Image]()



![Image]()

![Image]()

![Image]()
