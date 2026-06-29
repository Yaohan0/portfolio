---
title: 'Lab 1: SQL Injection Lab '
slug: sql-lab1
order: 999
status: Draft
type: Lab
description: >-
  ## Scenario


  SQL injection is the most common and devastating attack that 

  attackers can use to take control of data-driven web applications and 

  websites. It is a code injection technique that exploits a security 

  vulnerability in a website or application's software. SQL injection 

  attacks use a series of malicious SQL (Structured Query Language) 

  queries or statements to directly manipulate any type of SQL database. 

  Applications often use SQL statements to authenticate users, validate 

  roles and access levels, store, obtain information for the application 

  and user, and link to other data sources. SQL injection attacks work 

  when applications do not properly validate input before passing it to a 

  SQL statement.


  When attackers use tactics like SQL injection to compromise web 

  applications and sites, the targeted organizations can incur huge losses
   in terms of money, reputation, and loss of data and functionality.

  As an ethical hacker or penetration tester (hereafter, pen tester), 

  you must possess sound knowledge of SQL injection techniques and be able
   protect against them in diverse ways such as using prepared statements 
  with bind parameters, whitelist input validation, and user-supplied 

  input escaping. Input validation can be used to detect unauthorized 

  input before it is passed to the SQL query.


  The labs in this module give hands-on experience in testing a web application
  against various SQL injection attacks.


  ## Objective


  The objective of this lab is to perform SQL injection attacks and other tasks
  that include, but are not limited to:


  - Understanding when and how web applications connect to a database server in
  order to access data

  - Performing a SQL injection attack on a MSSQL database

  - Extracting basic SQL injection flaws and vulnerabilities

  - Detecting SQL injection vulnerabilities


  ## Overview of SQL Injection


  SQL injection attacks can be performed using various techniques to 

  view, manipulate, insert, and delete data from an application's 

  database. There are three main types of SQL injection:


  - **In-band SQL injection**: An attacker uses the same communication channel
  to perform the attack and retrieve the results

  - **Blind/inferential SQL injection**: An attacker has no error messages from
  the system with which to work, but rather simply

  sends a malicious SQL query to the database

  - **Out-of-band SQL injection**: An attacker uses

  different communication channels (such as database email functionality,

  or file writing and loading functions) to perform the attack and obtain

  the results


  ## Lab Tasks


  Ethical hackers or pen testers use numerous tools and techniques to 

  perform SQL injection attacks on target web applications. The 

  recommended labs that will assist you in learning various SQL injection 

  techniques include:


  1. Perform SQL injection attacks
      - Perform an SQL injection attack against MSSQL to extract databases using sqlmap
  2. Detect SQL injection vulnerabilities using various SQL injection detection
  tools
      - Detect SQL injection vulnerabilities using OWASP ZAP
  3. Perform SQL injection using AI
      - Perform SQL injection using ShellGPT

  ---


  # Lab 1: Perform SQL Injection Attacks


  **Lab Scenario**


  SQL injection is an alarming issue for all database-driven websites. 

  An attack can be attempted on any normal website or software package 

  based on how it is used and how it processes user-supplied data. SQL 

  injection attacks are performed on SQL databases with weak codes that do
   not adequately filter, use strong typing, or correctly execute user 
  input. This vulnerability can be used by attackers to execute database 

  queries to collect sensitive information, modify database entries, or 

  attach malicious code, resulting in total compromise of the most 

  sensitive data.


  As an ethical hacker or pen tester, in order to assess the systems in
   your target network, you should test relevant web applications for 
  various vulnerabilities and flaws, and then exploit those 

  vulnerabilities to perform SQL injection attacks.


  **Lab Objectives**


  - Perform an SQL injection attack against MSSQL to extract databases using
  sqlmap


  **Overview of SQL Injection**


  SQL injection can be used to implement the following attacks:


  - **Authentication bypass**: An attacker logs onto an application without
  providing a valid username and password and gains administrative privileges

  - **Authorization bypass**: An attacker alters authorization information
  stored in the database by exploiting SQL injection vulnerabilities

  - **Information disclosure**: An attacker obtains sensitive information that
  is stored in the database

  - **Compromised data integrity**: An attacker defaces a webpage, inserts
  malicious content into webpages, or alters the contents of a database

  - **Compromised availability of data**: An attacker deletes specific
  information, the log, or audit information in a database

  - **Remote code execution**: An attacker executes a piece of code remotely
  that can compromise the host OS


  ## Task 1: Perform an SQL Injection Attack Against MSSQL to Extract Databases
  using sqlmap


  sqlmap is an open-source penetration testing tool that automates the 

  process of detecting and exploiting SQL injection flaws and taking over 

  of database servers. It comes with a powerful detection engine, many 

  niche features, and a broad range of switches-from database 

  fingerprinting and data fetching from the database to accessing the 

  underlying file system and executing commands on the OS via out-of-band 

  connections.


  You can use sqlmap to perform SQL injection on a target website using
   various techniques, including Boolean-based blind, time-based blind, 
  error-based, UNION query-based, stacked queries, and out-of-band SQL 

  injection.


  In this task, we will use sqlmap to perform SQL injection attack against MSSQL
  to extract databases.


  > In this task, you will pretend that you are a registered user on the
  **http://www.moviescope.com** website, and you want to crack the passwords of
  the other users from the website's database.

  > 


  > If a blank screen appears, go to the **Resources** pane, select the **Parrot
  Security** machine, and click **Reconnect** to restore the connection.

  >
tools: []
topics: []
files: []
cover: ''
summary: >-
  ## Scenario


  SQL injection is the most common and devastating attack that 

  attackers can use to take control of data-driven web applications and 

  websites. It is a code injection technique that exploits a security 

  vulnerability in a website or application's software. SQL injection 

  attacks use a series of malicious SQL (Structured Query Language) 

  queries or statements to directly manipulate any type of SQL database. 

  Applications often use SQL statements to authenticate users, validate 

  roles and access levels, store, obtain information for the application 

  and user, and link to other data sources. SQL injection attacks work 

  when applications do not properly validate input before passing it to a 

  SQL statement.


  When attackers use tactics like SQL injection to compromise web 

  applications and sites, the targeted organizations can incur huge losses
   in terms of money, reputation, and loss of data and functionality.

  As an ethical hacker or penetration tester (hereafter, pen tester), 

  you must possess sound knowledge of SQL injection techniques and be able
   protect against them in diverse ways such as using prepared statements 
  with bind parameters, whitelist input validation, and user-supplied 

  input escaping. Input validation can be used to detect unauthorized 

  input before it is passed to the SQL query.


  The labs in this module give hands-on experience in testing a web application
  against various SQL injection attacks.


  ## Objective


  The objective of this lab is to perform SQL injection attacks and other tasks
  that include, but are not limited to:


  - Understanding when and how web applications connect to a database server in
  order to access data

  - Performing a SQL injection attack on a MSSQL database

  - Extracting basic SQL injection flaws and vulnerabilities

  - Detecting SQL injection vulnerabilities


  ## Overview of SQL Injection


  SQL injection attacks can be performed using various techniques to 

  view, manipulate, insert, and delete data from an application's 

  database. There are three main types of SQL injection:


  - **In-band SQL injection**: An attacker uses the same communication channel
  to perform the attack and retrieve the results

  - **Blind/inferential SQL injection**: An attacker has no error messages from
  the system with which to work, but rather simply

  sends a malicious SQL query to the database

  - **Out-of-band SQL injection**: An attacker uses

  different communication channels (such as database email functionality,

  or file writing and loading functions) to perform the attack and obtain

  the results


  ## Lab Tasks


  Ethical hackers or pen testers use numerous tools and techniques to 

  perform SQL injection attacks on target web applications. The 

  recommended labs that will assist you in learning various SQL injection 

  techniques include:


  1. Perform SQL injection attacks
      - Perform an SQL injection attack against MSSQL to extract databases using sqlmap
  2. Detect SQL injection vulnerabilities using various SQL injection detection
  tools
      - Detect SQL injection vulnerabilities using OWASP ZAP
  3. Perform SQL injection using AI
      - Perform SQL injection using ShellGPT

  ---


  # Lab 1: Perform SQL Injection Attacks


  **Lab Scenario**


  SQL injection is an alarming issue for all database-driven websites. 

  An attack can be attempted on any normal website or software package 

  based on how it is used and how it processes user-supplied data. SQL 

  injection attacks are performed on SQL databases with weak codes that do
   not adequately filter, use strong typing, or correctly execute user 
  input. This vulnerability can be used by attackers to execute database 

  queries to collect sensitive information, modify database entries, or 

  attach malicious code, resulting in total compromise of the most 

  sensitive data.


  As an ethical hacker or pen tester, in order to assess the systems in
   your target network, you should test relevant web applications for 
  various vulnerabilities and flaws, and then exploit those 

  vulnerabilities to perform SQL injection attacks.


  **Lab Objectives**


  - Perform an SQL injection attack against MSSQL to extract databases using
  sqlmap


  **Overview of SQL Injection**


  SQL injection can be used to implement the following attacks:


  - **Authentication bypass**: An attacker logs onto an application without
  providing a valid username and password and gains administrative privileges

  - **Authorization bypass**: An attacker alters authorization information
  stored in the database by exploiting SQL injection vulnerabilities

  - **Information disclosure**: An attacker obtains sensitive information that
  is stored in the database

  - **Compromised data integrity**: An attacker defaces a webpage, inserts
  malicious content into webpages, or alters the contents of a database

  - **Compromised availability of data**: An attacker deletes specific
  information, the log, or audit information in a database

  - **Remote code execution**: An attacker executes a piece of code remotely
  that can compromise the host OS


  ## Task 1: Perform an SQL Injection Attack Against MSSQL to Extract Databases
  using sqlmap


  sqlmap is an open-source penetration testing tool that automates the 

  process of detecting and exploiting SQL injection flaws and taking over 

  of database servers. It comes with a powerful detection engine, many 

  niche features, and a broad range of switches-from database 

  fingerprinting and data fetching from the database to accessing the 

  underlying file system and executing commands on the OS via out-of-band 

  connections.


  You can use sqlmap to perform SQL injection on a target website using
   various techniques, including Boolean-based blind, time-based blind, 
  error-based, UNION query-based, stacked queries, and out-of-band SQL 

  injection.


  In this task, we will use sqlmap to perform SQL injection attack against MSSQL
  to extract databases.


  > In this task, you will pretend that you are a registered user on the
  **http://www.moviescope.com** website, and you want to crack the passwords of
  the other users from the website's database.

  > 


  > If a blank screen appears, go to the **Resources** pane, select the **Parrot
  Security** machine, and click **Reconnect** to restore the connection.

  >
---
- [ ]  Click Parrot Security to switch to the **Parrot Security** machine.

    > If a **Question** pop-up window appears asking you to update the machine, click **No** to close the window.
    > 
- [ ]  Click the **Mozilla Firefox** icon from the menu bar in the top-left corner of **Desktop** to launch the web browser.
- [ ]  Navigate to **http://www.moviescope.com/**. A **Login** page loads; enter the **Username** and **Password** as **sam** and **test**, respectively. Click the **Login** button.

    > If a **Would you like Firefox to save this login for moviescope.com?** notification appears at the top of the browser window, click **Don't Save**.
    > 

    !Screenshot

- [ ]  Once you are logged into the website, click the **View Profile** tab on the menu bar and, when the page has loaded, make a note of the URL in the address bar of the browser.

    !Screenshot

- [ ]  Right-click anywhere on the webpage and click **Inspect (Q)** from the context menu, as shown in the screenshot.

    !Screenshot

- [ ]  The **Developer Tools** frame appears in the lower section of the browser window. Click the **Console** tab, type **document.cookie** in the lower-left corner of the browser, and press **Enter**.

    !Screenshot

- [ ]  Select the cookie value, then right-click and copy it, as shown in the
screenshot. Minimize the web browser. Note down the URL of the web page.

    !Screenshot

- [ ]  Open a **Terminal** window and execute **sudo su** to run the programs as a root user (When prompted, enter the password **toor**).

    > The password that you type will not be visible.
    > 
- [ ]  Run **sqlmap -u "http://www.moviescope.com/viewprofile.aspx?id=1" --cookie="[cookie value that you copied in Step#7]" --dbs** command.

    > In this query, **-u** specifies the target URL (the one you noted down in Step#7), **--cookie** specifies the HTTP cookie header value, and **--dbs** enumerates DBMS databases.
    > 
- [ ]  The above query causes sqlmap to enforce various injection techniques
on the name parameter of the URL in an attempt to extract the database
information of the **MovieScope** website.

    !Screenshot

- [ ]  If the message **Do you want to skip test payloads specific for other DBMSes? [Y/n]** appears, type **Y** and press **Enter**.
- [ ]  If the message **for the remaining tests, do you want to include all tests for 'Microsoft
SQL Server' extending provided level (1) and risk (1) values? [Y/n]** appears, type **Y** and press **Enter**.
- [ ]  Similarly, if any other message appears, type **Y** and press **Enter** to continue.

    !Screenshot

- [ ]  sqlmap retrieves the databases present in the MSSQL server. It also
displays information about the web server OS, web application
technology, and the backend DBMS, as shown in the screenshot.

    !Screenshot

- [ ]  Now, you need to choose a database and use sqlmap to retrieve the
tables in the database. In this lab, we are going to determine the
tables associated with the database **moviescope**.
- [ ]  Run **sqlmap -u "http://www.moviescope.com/viewprofile.aspx?id=1" --cookie="[cookie
value which you have copied in Step#7]" -D moviescope --tables** command.

    > In this query, **-D** specifies the DBMS database to enumerate and **--tables** enumerates DBMS database tables.
    > 
- [ ]  The above query causes sqlmap to scan the **moviescope** database for tables located in the database.

    !Screenshot

- [ ]  sqlmap retrieves the table contents of the moviescope database and displays them, as shown in screenshot.

    !Screenshot

- [ ]  Now, you need to retrieve the table content of the column **User_Login**.
- [ ]  Run **sqlmap -u "http://www.moviescope.com/viewprofile.aspx?id=1" --cookie="[cookie
value which you have copied in Step#7]" -D moviescope -T User_Login
--dump** command to dump all the **User_Login** table content.

    !Screenshot

- [ ]  sqlmap retrieves the complete **User_Login** table data from the database moviescope, containing all users' usernames under the **Uname** column and passwords under the **password** column, as shown in screenshot.
- [ ]  You will see that under the **password** column, the passwords are shown in plain text form.

    !Screenshot

- [ ]  To verify if the login details are valid, you should try to log in with the extracted login details of any of the users. To do so, switch back
to the web browser, close the **Developer Tools** console, and click **Logout** to start a new session on the site.

    !Screenshot

- [ ]  The **Login** page appears; log in into the website using the retrieved credentials **john/qwerty**.

    > If a **Would you like Firefox to save this login for moviescope.com?** notification appears at the top of the browser window, click **Don't Save**.
    > 

    !Screenshot

- [ ]  You will observe that you have successfully logged into the MovieScope website with john's account, as shown in the screenshot.

    !Screenshot

- [ ]  Now, switch back to the **Parrot Terminal window**. Run **sqlmap -u "http://www.moviescope.com/viewprofile.aspx?id=1" --cookie="[cookie value which you have copied in Step#7]" --os-shell**.

    > In this query, **--os-shell** is the prompt for an interactive OS shell.
    > 

    !Screenshot

- [ ]  If the message **do you want sqlmap to try to optimize value(s) for DBMS delay responses** appears, type **Y** and press **Enter** to continue.

    !Screenshot

- [ ]  Once sqlmap acquires the permission to optimize the machine, it will provide you with the OS shell. Type **hostname** and press **Enter** to find the machine name where the site is running.
- [ ]  If the message **do you want to retrieve the command standard output?** appears, type **Y** and press **Enter**.

    !Screenshot

- [ ]  sqlmap will retrieve the hostname of the machine on which the target web application is running, as shown in the screenshot.

    !Screenshot

- [ ]  Type **TASKLIST** and press **Enter** to view a list of tasks that are currently running on the target system.

    !Screenshot

- [ ]  If the message **do you want to retrieve the command standard output?** appears, type **Y** and press **Enter**.
- [ ]  The above command retrieves the tasks and displays them under the **command standard output** section, as shown in the screenshots below.

    !Screenshot

- [ ]  Following the same process, you can use various other commands to obtain further detailed information about the target machine.
- [ ]  To view the available commands under the OS shell, type **help** and press **Enter**.

    !Screenshot

- [ ]  This concludes the demonstration of how to launch a SQL injection attack against MSSQL to extract databases using sqlmap.
- [ ]  Close all open windows and document all the acquired information.
- [ ]  38. You can also use other SQL injection tools such as **Mole** (https://sourceforge.net), **jSQL Injection** (https://github.com), **NoSQLMap** (https://github.com), **Havij** (https://github.com) and **blind_sql_bitshifting** (https://github.com).

**Question 15.1.1.1**

Use the sqlmap tool to perform an SQL injection attack on the website www.moviescope.com to extract databases from the MSSQL database. Attempt to retrieve the table content of the column User_Login. Enter the password for the username steve.

[answer password]
