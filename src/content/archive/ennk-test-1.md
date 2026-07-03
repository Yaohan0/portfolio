---
title: 'Cloud Service Models '
slug: ennk-test-1
order: 999
type: Class Notes
status: Active
date: '2026-06-29'
summary: |-
  Go through all the service models 
  IaaS PaaS SaaS 
tags: []
files: []
links: []
cover: ''
---
[0. Week 1 - Cloud Computing Basics.pdf](/uploads/1782957713550-0.-week-1-cloud-computing-basics.pdf)

## Infrastructure as a Service 

rent basic infra (virtual machines, firewalls, storage networks ) 
Example Services : AWS EC 2 , Amazon virtual machine, Google compute cloud 
"rent a computer / server " 

## Platform as a Service 

you deploy an app, but the provider manages most backend infrastructure 
"upload a code, provider runs it" 
Example: Vercel, Supabase, Netlify, Heroku, Firebase 

## Software as a Service 

use software directly through the internet 
Example: Google Drive, Gmail, Canva, Discord, Zoom 

### Summary 

IaaS - Rent the kitchen 
PaaS - Bring the ingredients 
SaaS - order cooked food ! 

### Why Companies use cloud 

- Cost Saving 
- Faster Deployment 
- Easier backup & recovery 
- Global Access 
- Scalability 

### Cloud Security Model 

CLOUD IS NOT AUTOMATICALLY SECURE 
[Shared Responsibility Model] 
Provider secures the cloud 
Customer secures what they put in the cloud

### AWS Key Features 

- Over 200+ fully featured services 
-> Computing power (EC2) 
-> Storage 
-> Databases 
-> Networking 
-> Security Tools 
-> Machine Learning & AI services 
-> Developer Tools 
-> Supports almost any type of application and workload 

---GLOBAL INFRASTRUCTURE --- 
AWS has global footprint with data centers across multiple continents 
- Organized into -> Regions (geographical areas)
- Availability Zones (AZ) 
Ensures high availability , fault tolerance and low latency

---PAY AS YOU GO ---

--- HIGH SCALABILITY & flexible ---

---SECURITY AND COMPLIANCE ---
- Strong Security Features: Encryption 
- Identify and access management 
- Network Firewalls 
- Meets global compliance standards - trusted in finance, healthcare and government sectors 

---OFFER ESSENTIAL SERVICES --- 
compute, storage, networking and databases 

### AWS Compute Services 

--- AMAZON EC2 (ELASTIC COMPUTE CLOUD) --- 
- Provides resizable virtual servers for flexible compute capacity 
- Supports scaling resources up or down based on workload needs 
- Ideal for developers building web-scale applications 

--- AWS LAMBDA --- 
- serverless compute service - run code without servers 
- automatically handles scaling and infrastructure management 
- simplifies application deployment and reduces operational overhead 

AWS STORAGE :
--- AWS Storage --- 
- Amazon S3 
- highly reliable, scalable storage for files and large datasets 
- secure, durable and accessible from anywhere 

- Amazon EBS 
- Persistent block storage for EC2 instances 
- Ensures data durability and high availability for running applications 

- AWS Networking 
- Amazon VPC -> creates private isolated network within AWS  

- Amazon Route 53 
- Highly available DNS service 

AWS DATABASE SERVICES 
- AMAZON RDS (relational database services) 
- Simplifies setup, operation, and scaling of regional databases 
- Designed for structured data within minimal management 

Amazon DynamoDB 
- Fully managed noSQL database service 
- Fast, flexible and support automatic scaling for high-traffic apps 

### Understanding AWS Pricing and billing 

AWS offers flexible pricing options to suit
different workloads and budgets.

Supports cost optimization through free
tiers, pricing models, and cost
management tools

Provides access to many AWS services at
no cost for the first 12 months.

Includes usage allowances for compute,
storage, databases, and more.

Ideal for learning, testing, and
experimenting with AWS services.

Helps beginners explore AWS without
upfront expenses.

AWS PRICING MODELS 
On Demand - pay per hour / second based on actual usage (no long term commitments ) 
ideal for unpredictable or short term workloads 

Reserved instances - Commit to 1 year or 3 year usage for significant discounts 
best for stable and long term workloads 

Spot instances 
- use unused EC2 Capacity at reduced prices 
Highly cost effective but workloads may be interrupted.
Suitable for flexible, fault tolerant jobs (batch processing, data
analysis).

### AWS Cost Management Tools 

AWS Budgets -> set custom spending limits -> receive alerts when reaching or exceeding limit -> maintain financial control 

AWS Cost Explorer -> visualise cost and trends over time -> identify spending patterns and optimization opportunities -> forecast and cost planning 

### 5 Pillars of AWS Structure 

![Image](/uploads/1782959456882-screenshot-2026-07-02-103040.png)

DESIGNING FOR SCALABILITY 

TOOLS:
- AUTO SCALING -> adjusts compute capacity based on demand, maintains optimal performance while controlling costs 

-ELASTIC LOAD BALANCING (ELB) -> distribute incoming traffic across multiple servers prevents -> prevents single server from overloaded -> ensure smooth performance and high availability

![Image](/uploads/1782979087498-screenshot-2026-07-02-154021.png)
