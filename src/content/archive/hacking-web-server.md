---
title: Hacking Web Server 29/6/26
slug: hacking-web-server
order: 999
type: Class Notes
status: Active
date: '2026-06-29'
summary: >-
  **Objectives:**


  - Web Server Concepts

  - Web Server Attack Methodology

  - Web Server Attacks


  What it focuses on:

  The server software and services hosting the website


  Example Weakness: 

  Apache misconfiguration, FTP weak password, exposed directories, outdated web
  server
tags: []
files: []
links: []
cover: ''
---
[08 - Hacking Web.pptx](/uploads/1782710600243-08-hacking-web.pptx)

## 1. What is a Web Server?

the system that receives HTTP/HTTPS requests and sends back web content.

Example:

Your browser  --->  HTTP request  --->  Web server
Your browser  <---  HTTP response <---  Web server

Common web server software:

Web server	Common port
Apache	80, 443
Nginx	80, 443
Microsoft IIS	80, 443
Tomcat	8080, 8443

A web server can also expose other services:

21/tcp   FTP
22/tcp   SSH
80/tcp   HTTP
443/tcp  HTTPS
8080/tcp Web app / proxy / admin panel



In ethical hacking, you are checking whether the server is:

outdated
misconfigured
exposing sensitive files
using weak credentials
vulnerable to known CVEs
leaking useful information

## 2. Web Server Attack Methodology 

1. Recon / Footprinting
2. Enumeration
3. Vulnerability identification
4. Exploitation
5. Post-exploitation
6. Reporting and remediation



## 3. Footprinting a web server 

Footprinting means collecting basic information before attacking.

Basic checks
ping <target-ip>

Checks whether the host is alive.
nmap -sn <network-range>
Finds live hosts.

Then scan the target:

nmap -sV -sC -p- <target-ip>

Meaning:

Option	Meaning
-sV	Detect service version
-sC	Run default NSE scripts
-p-	Scan all 65535 TCP ports




### 4. Banner grabbing with Telnet or NetCat 

nc <target-ip> 80

Then type:

HEAD / HTTP/1.1
Host: <target-ip>


You may get:

HTTP/1.1 200 OK
Server: Apache/2.4.18 Ubuntu

This leaks:

Web server: Apache
Version: 2.4.18
OS hint: Ubuntu
Telnet
telnet <target-ip> 80

Then same HTTP request:

HEAD / HTTP/1.1
Host: <target-ip>


Purpose: identify what server software is running.

## 5. Enumeration using Nmap  NSE 

Useful scripts:

nmap --script http-title -p80 <target-ip>

Gets the page title.

nmap --script http-headers -p80 <target-ip>

Gets HTTP headers.

nmap --script http-enum -p80 <target-ip>

Finds common directories and files.

nmap --script vuln -p80,443 <target-ip>

Runs vulnerability checks.

For FTP:

nmap --script ftp-anon,ftp-syst -p21 <target-ip>

Checks:

anonymous FTP login
FTP server info
possible file exposure

## 6. Directory and File Discover 

This is often where you find useful files.

Tools:

gobuster dir -u http://<target-ip>/ -w /usr/share/wordlists/dirb/common.txt

or:

ffuf -u http://<target-ip>/FUZZ -w /usr/share/wordlists/dirb/common.txt

These can leak:

credentials
source code
admin panels
database configs
private keys
backup archives

## FTP Credential Cracking 

Your web server lab includes cracking FTP credentials using a dictionary attack.

Typical tool:

hydra -l <username> -P /usr/share/wordlists/rockyou.txt ftp://<target-ip>

Example:

hydra -l admin -P /usr/share/wordlists/rockyou.txt ftp://10.10.1.50

Meaning:

Part	Meaning
-l admin	Try username admin
-P rockyou.txt	Try many passwords
ftp://target	Attack FTP login

## 8. log4j vulnerability 

Conceptually, Log4j was dangerous because some Java applications logged user-controlled input. If the app processed a malicious string, it could trigger remote code execution.

Simplified flow:

Attacker sends malicious input
      ↓
Server logs the input using vulnerable Log4j
      ↓
Log4j performs a dangerous lookup
      ↓
Attacker gains code execution

In class/lab, the important learning point is:

user input should not be trusted
logging systems can become attack surfaces
vulnerable dependencies can compromise the whole server
patching and dependency management matter

Defensive fixes:

Update Log4j
Disable dangerous lookups
Restrict outbound server connections
Use WAF rules
Monitor suspicious payloads
