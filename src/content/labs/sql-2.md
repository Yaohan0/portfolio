---
title: >-
  Lab 2: Detect SQL Injection Vulnerabilities using Various SQL Injection
  Detection Tools
slug: sql-2
order: 999
status: Draft
type: Lab
description: >-
  **Lab Scenario**


  By now, you will be familiar with various types of SQL injection 

  attacks and their possible impact. To recap, the different kinds of SQL 

  injection attacks include authentication bypass, information disclosure,
   compromised data integrity, compromised availability of data and remote
   code execution (which allows identity spoofing), damage to existing 
  data, and the execution of system-level commands to cause a denial of 

  service from the application.


  As an ethical hacker or pen tester, you need to test your 

  organization's web applications and services against SQL injection and 

  other vulnerabilities, using various approaches and multiple techniques 

  to ensure that your assessments, and the applications and services 

  themselves, are robust.


  In the previous lab, you learned how to use SQL injection attacks on 

  the MSSQL server database to test for website vulnerabilities.


  In this lab, you will learn how to test for SQL injection vulnerabilities
  using various other SQL injection detection tools.


  **Lab Objectives**


  - Detect SQL injection vulnerabilities using OWASP ZAP


  **Overview of SQL Injection Detection Tools**


  SQL injection detection tools help to discover SQL injection attacks 

  by monitoring HTTP traffic, SQL injection attack vectors, and 

  determining if a web application or database code contains SQL injection
   vulnerabilities.

  To defend against SQL injection, developers must take proper care in 

  configuring and developing their applications in order to make them 

  robust and secure. Developers should use best practices and 

  countermeasures to prevent their applications from becoming vulnerable 

  to SQL injection attacks.
tools: []
topics: []
files: []
cover: ''
summary: >-
  **Lab Scenario**


  By now, you will be familiar with various types of SQL injection 

  attacks and their possible impact. To recap, the different kinds of SQL 

  injection attacks include authentication bypass, information disclosure,
   compromised data integrity, compromised availability of data and remote
   code execution (which allows identity spoofing), damage to existing 
  data, and the execution of system-level commands to cause a denial of 

  service from the application.


  As an ethical hacker or pen tester, you need to test your 

  organization's web applications and services against SQL injection and 

  other vulnerabilities, using various approaches and multiple techniques 

  to ensure that your assessments, and the applications and services 

  themselves, are robust.


  In the previous lab, you learned how to use SQL injection attacks on 

  the MSSQL server database to test for website vulnerabilities.


  In this lab, you will learn how to test for SQL injection vulnerabilities
  using various other SQL injection detection tools.


  **Lab Objectives**


  - Detect SQL injection vulnerabilities using OWASP ZAP


  **Overview of SQL Injection Detection Tools**


  SQL injection detection tools help to discover SQL injection attacks 

  by monitoring HTTP traffic, SQL injection attack vectors, and 

  determining if a web application or database code contains SQL injection
   vulnerabilities.

  To defend against SQL injection, developers must take proper care in 

  configuring and developing their applications in order to make them 

  robust and secure. Developers should use best practices and 

  countermeasures to prevent their applications from becoming vulnerable 

  to SQL injection attacks.
---
## Task 1: Detect SQL Injection Vulnerabilities using OWASP ZAP

OWASP Zed Attack Proxy (ZAP) is an integrated penetration testing 
tool for finding vulnerabilities in web applications. It offers 
automated scanners and a set of tools that allow you to find security 
vulnerabilities manually. It is designed to be used by people with a 
wide range of security experience, and as such is ideal for developers 
and functional testers who are new to penetration testing.

In this task, we will use OWASP ZAP to test a web application for SQL injection vulnerabilities.

> We will scan the **www.moviescope.com** website that is hosted on the **Windows Server 2019** machine.
> 
- [ ]  Click Windows Server 2019 to switch to the **Windows Server 2019** machine.
    
    > If you are logged out of the **Windows Server 2019** machine, click Ctrl+Alt+Delete, and login with **Administrator**/**Pa$$w0rd**.
    > 
- [ ]  Click windows **Search** icon, search for **Zap 2.14.0** in the search bar and launch **ZAP**.
- [ ]  OWASP ZAP initialized and a prompt that reads **Do you want to persist the ZAP Session?** appears; select the **No, I do not want to persist this session at this moment in time** radio button, and click **Start**.
    
    > If a **Manage Add-ons** window appears, close it.
    > 
    
    !Screenshot
    
- [ ]  The **OWASP ZAP** main window appears; under the **Quick Start** tab, click the **Automated Scan** option.
    
    > If OWASP ZAP alert pop-up appears, click **OK** in all the pop-ups.
    > 
    
    !4a.jpg
    
- [ ]  The **Automated Scan** wizard appears, enter the target website in the **URL to attack** field (in this case, **http://www.moviescope.com**). Leave other options set to default, and then click the **Attack** button.
    
    !5O.jpg
    
- [ ]  **OWASP ZAP** starts performing **Active Scan** on the target website, as shown in the screenshot.
    
    !6O.jpg
    
- [ ]  After the scan completes, **Alerts** tab appears. You can observe the vulnerabilities found on the website under the **Alerts** tab.
    
    > The discovered vulnerabilities might differ when you perform this task.
    > 
    
    !Screenshot
    
- [ ]  Now, expand the **SQL Injection** vulnerability node under the **Alerts** tab.
    
    !9a.jpg
    
- [ ]  Click on the discovered **SQL Injection** vulnerability and further click on the vulnerable URL.
- [ ]  You can observe the information such as **Risk**, **Confidence**, **Parameter**, **Attack**, etc., regarding the discovered SQL Injection vulnerability in the lower right-bottom, as shown in the screenshot.
    
    > The risks associated with the vulnerability are categorized 
    according to severity of risk as Low, Medium, High, and Informational 
    alerts. Each level of risk is represented by a different flag color:
    > 
    - **Red Flag**: High risk
    - **Orange Flag**: Medium risk
    - **Yellow Flag**: Low risk
    - **Blue Flag**: Provides details about information disclosure vulnerabilities
    
    !11a.jpg
    
- [ ]  Similarly, expand any other vulnerability (here, **SQL Injection-MsSQL**) node under the **Alerts** tab and further click on the vulnerable URLs.
    
    !12a.jpg
    
    !12b.jpg
    
- [ ]  This concludes the demonstration of how to detect SQL injection vulnerabilities using OWASP ZAP.
- [ ]  Close all open windows and document all the acquired information.
- [ ]  You can also use other SQL injection detection tools such as **Damn Small SQLi Scanner** (**DSSS**) (https://github.com), Snort (https://snort.org), **Burp Suite** (https://www.portswigger.net), **HCL AppScan** (https://www. hcl-software.com) etc. to detect SQL injection vulnerabilities.

**Question 15.2.1.1**

Use OWASP ZAP to test a web application (www.moviescope.com) for SQL injection vulnerabilities. Enter the CWE ID of the SQL injection vulnerability found in www.moviescope.com.

89

**Question 15.2.1.2**

Use OWASP ZAP to test a web application (www.moviescope.com) for SQL injection vulnerabilities. Enter the WASC ID of the SQL injection vulnerability found in www.moviescope.com.

19

---

# Lab 3: Perform SQL Injection using AI

**Lab Scenario**

As an ethical hacker or penetration tester, you must have a sound 
knowledge on the integration of AI technology in identifying and 
exploiting SQL injection vulnerabilities within web applications. You 
will leverage AI-generated payloads to enhance the efficiency and 
effectiveness of SQL injection attacks during penetration testing 
assessments.

**Lab Objectives**

- Perform SQL injection using ShellGPT

**Overview of SQL Injection using AI**

SQL injection with AI involves leveraging artificial intelligence to 
craft sophisticated injection payloads, automating the process of 
identifying and exploiting vulnerabilities in web applications. AI 
models generate context-aware SQL queries, enhancing penetration testing
 efficiency and effectiveness.

## Task 1: Perform SQL Injection using ShellGPT

ShellGPT, an AI language model, can be utilized to assist in the 
exploration of SQL injection vulnerabilities within web applications. It
 can also assist in crafting malicious payloads or generating SQL 
queries.

Here, we will use ShellGPT to perform SQL injection on the target website.

> The commands generated by ShellGPT may vary depending on the prompt
 used and the tools available on the machine. Due to these variables, 
the output generated by ShellGPT might differ from what is shown in the 
screenshots. These differences arise from the dynamic nature of the AI's
 processing and the diverse environments in which it operates. As a 
result, you may observe differences in command syntax, execution, and 
results while performing this lab task.
> 
- [ ]  Click Parrot Security to switch to Parrot machine. Open a Terminal window and execute **sudo su** to run the program as a root user (When prompted, enter the password **toor**).
    
    > The password that you type will not be visible.
    > 
- [ ]  Run the **bash sgpt.sh** command. When prompted with "**Enter Your AI Activation Key:**", enter your AI Activation Key and press Enter to configure ShellGPT with the provided key.
    
    > If you do not already have an AI Activation Key, follow the **Instructions to Download your AI Activation Key** in **Module 00: CEH Lab Setup** to obtain the AI activation key. Alternatively, you may refer to the document Instructions to Download your AI Activation Key.pdf for detailed guidance.
    > 
    
    !ekn9f0jo.jpg
    
- [ ]  In this lab we will use AI to perform SQL injection attack against MSSQL to extract databases.
    
    > In this task, you will pretend that you are a registered user on 
    the http://www.moviescope.com website, and you want to crack the 
    passwords of the other users from the website's database.
    > 
- [ ]  First we need to login to **http://www.moviescope.com** website and copy the cookie value, to do so follow **Steps#2-7** from **Task 1: Perform an SQL Injection Attack Against MSSQL to Extract Databases using sqlmap** of **Lab 1: Perform SQL Injection Attacks**.
    
    !sql2.jpg
    
- [ ]  We will now, enumerate the database of the target website to do so, switch to the terminal window and run **sgpt
--chat sql --shell "Use sqlmap on target url
http://www.moviescope.com/viewprofile.aspx?id=1 with cookie value
'[cookie value which you have copied in Step#3]' and enumerate the DBMS
databases"** command to scan the target website for SQL injection vulnerability and enumerate databases.
    
    > In the prompt, type **E** and press **Enter** to execute the command.
    > 
    > 
    > If **Do you want to skip for other DBMSes?** prompts , type **Y** and press **Enter** to execute the command.
    > 
    
    !Screenshot
    
    !Screenshot
    
    !Screenshot
    
- [ ]  We have successfully enumerated the databases from the target website,
we will now enumerate the tables pertaining to the database **moviescope**. To do so run **sgpt --chat sql --shell "Use sqlmap on target url
http://www.moviescope.com/viewprofile.aspx?id=1 with cookie value
'[cookie value which you have copied in Step#3]' and enumerate the
tables pertaining to moviescope database"** command.
    
    > In the prompt, type **E** and press **Enter** to execute the command.
    > 
    
    !Screenshot
    
    !Screenshot
    
- [ ]  After enumerating the database tables we will dump the contents of the
User_Login table to view the login information of the target website.
- [ ]  Run **sgpt --chat sql --shell "Use sqlmap on target url
http://www.moviescope.com/viewprofile.aspx?id=1 with cookie value
'[cookie value which you have copied in Step#3]' and retrieve User_Login table contents from moviescope database"** command.
    
    > In the prompt, type **E** and press **Enter** to execute the command.
    > 
    
    !Screenshot
    
    !Screenshot
    
- [ ]  Sqlmap retrieves the complete **User_Login** table data from the database moviescope, containing all users' usernames under the **Uname** column and passwords under the **password** column, as shown in screenshot.
- [ ]  You will see that under the **password** column, the passwords are shown in plain text form.
- [ ]  To verify if the login details are valid, you should try to log in with the extracted login details of any of the users. To do so, switch back
to the web browser, close the **Developer** **Tools** console, and click **Logout** to start a new session on the site.
- [ ]  The **Login** page appears; log in into the website using the retrieved credentials **steve/password**.
    
    !Screenshot
    
- [ ]  You will observe that you have successfully logged into the MovieScope
website with Steve's account, as shown in the screenshot.
    
    > If a **Would you like Firefox to save this login for moviescope.com?** notification appears at the top of the browser window, click **Don't Save**.
    > 
    
    !Screenshot
    
- [ ]  Apart from the aforementioned commands, you can further explore
additional options within the ShellGPT tool and utilize various other
tools to perform SQL injection attacks on the target website.
- [ ]  This concludes the demonstration of performing SQL injection on the target website using ShellGPT.
- [ ]  Close all open windows and document all the acquired information.

**Question 15.3.1.1**

Write a ShellGPT prompt and execute it on Parrot Security machine to perform SQL injection using sqlmap tool on  http://www.moviescope.com website. Enter the password of the user lee that was retrieved using SQL Injection.
