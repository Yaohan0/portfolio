---
title: Etherchannel
slug: etherchannel
order: 999
type: Class Notes
status: Active
date: '2026-06-29'
summary: |-
  Key Points
  Understand what EtherChannel is and why it’s useful.
  Compare LACP and PAGP negotiation methods.
  Learn the required matching parameters for a successful bundle.
  See sample configurations and typical deployment examples.
tags: []
files: []
links: []
cover: ''
---
## Etherchannel Overview 

- Technology for bundling multiple physical links into one logical channel called a port channel. (aggregates the bandwidth of the member links and enables load-balancing across them) 



### Benefits 

- Aggregates bandwidth (4 1Gbps becomes 4Gbps 
- Automatic fail-over if a member link fails 
- Supports up to eight links (device-dependent) 
- Can be configured as a layer 2 or 3 interface 

## Negotiation Protocols 

![Image](/portfolio/uploads/1782729548917-screenshot-2026-06-29-183900.png)

Protocol Comparison 
----------------------------------
LACP - Link Aggregation Control Protocol 
PAGP - Port Aggregation Protocol 

Mode Combinations: 
1. LACP active <-> PAGP desirable - both sides actively initiate negotiation 
2. LACP Passive <-> PAGP auto - both sides only respond to negotiation 
3. Static (mode on) - no negotiation; forces channel formation regardless of protocol 

## Configuration Requirements 



## New heading



## New heading
