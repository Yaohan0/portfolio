---
title: 'Hacking Web Application '
slug: hacking-web-application
order: 999
type: Class Notes
status: Active
date: '2026-06-29'
summary: >-
  **Objective:**


  - Web application concepts

  - Web application hacking methodology

  - Web application threats


  Able to hack into web server and have access to Database server is important 


  Tool → Sqlmap → extract database info behind a web server (done by injecting
  various techniques on database server
tags: []
files: []
links: []
cover: ''
---
## 1. What is a web application? 



A web application is the interactive part of a website.

Examples:

Login page
Search bar
Shopping cart
Admin panel
Upload form
Comment section
Password reset page

Simple architecture:

Browser
  ↓
Web server
  ↓
Application code
  ↓
Database

[User logged in -> Application checks username/password -> Database returns matching user -> Application creates session 

## 2. Web Server vs Web Application 

This is the key difference:

Area	Web server hacking	Web application hacking
Target	Server/service	Application logic
Example	Apache version vulnerability	SQL injection
Tools	Nmap, Netcat, Nikto, Gobuster	Burp Suite, OWASP ZAP, Wapiti
Goal	Find exposed/misconfigured services	Abuse input, sessions, access control
Common issue	Outdated software	Poor validation

## 3. Web Application Recon 

1. Start with Nmap
nmap -sV -sC -p80,443,8080,8000,5000 <target-ip>

Look for:

80/tcp   http
443/tcp  https
8080/tcp http-proxy / Tomcat
5000/tcp Flask
8000/tcp Python HTTP server

Then check page title:

nmap --script http-title -p80 <target-ip>
2. Manual browsing

Open the site in browser and check:

Login page?
Register page?
Search function?
File upload?
Admin page?
URL parameters?
Cookies?
Hidden comments?

Example URL:

http://target/item.php?id=5

The id=5 parameter is interesting because it may be vulnerable to:

SQL injection
IDOR
Parameter tampering

## 3. Check Page Source 

Right-click → View Page Source.

Look for:

<!-- TODO: remove test credentials -->
<!-- admin:password123 -->
<script src="/static/app.js"></script>

Also inspect JavaScript files:

curl http://<target>/static/app.js

Possible leaks:

API keys
hidden endpoints
debug routes
admin paths
4. Robots.txt

Check:

curl http://<target-ip>/robots.txt

Example:

Disallow: /admin
Disallow: /backup

This does not block hackers. It often tells you where to look.
