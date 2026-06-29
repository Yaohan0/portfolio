---
title: 'VLANS '
slug: vlans
order: 999
type: Class Notes
status: Active
date: '2026-06-29'
summary: |-
  Key Points





  What a LAN is and why VLANs matter



  How VLANs create separate broadcast domains on a single switch



  Difference between access and trunk ports, and how VLAN tags work



  Basics of inter‑VLAN routing using a Layer 3 device
tags: []
files: []
links: []
cover: ''
---
## LAN Basics 

The most common type is Ethernet LAN.
In a small‑company scenario, work computers share file servers and printers.
All devices in a LAN can communicate directly; they belong to the same broadcast domain.

## What is a VLAN? 

VLAN (Virtual Local Area Network) – a logical subdivision of a single physical network into multiple independent networks that share the same switch infrastructure.

Allows the creation of separate LANs without adding extra physical switches.

Each VLAN has its own broadcast domain.

Example: Marketing devices in VLAN 1 (yellow ports) and Sales devices in VLAN 2 (blue ports) are physically connected to the same switch but remain logically isolated.

## Switch Port Types 

Access Port -> One VLAN only -> Use: End-Device Connections (PCs, Printers)  - No VLAN Tag added [Frame belongs to the assigned VLAN] 

Access ports are configured to belong to a single VLAN; devices plugged into them inherit that VLAN

Trunk Port -> Multiple VLANs -> Use: Links between switches (or-switch-to-router) -> Ads a VLAN tag to each frame to identify its VLAN 

Trunk ports carry traffic for several VLANs over a physical link; the switch inserts a VLAN tag into the Ethernet frame header. 

## VLAN Tagging 

When a frame traverses from a trunk port, the switch adds a VLAN tag to the Ethernet frame. 
The tag identifies the originating VLAN so that downstream devices can forward the frame to the correct logical network. 

VLAN Tag is part of the Ethernet header and is read by the Switches to maintain VLAN separation 

## Benefits of VLANs 

1. Optimized Performance 
- reduces broadcast domain size; only devices within the same VLAN receive broadcast trafic 
- Less unnecessary broadcasting -> faster response times, lower latency 

2. Enhanced security 
- logical grouping of resources according to security policies 
- each VLAN acts as an isolated entity, limiting cross-department access. 

3. Cost efficiency 
- One physical infrastructure supports multiple logical networks 
- Fewer switches and cables -> lower hardware expenditure 

4. Management Flexibility 
- VLAN Configurations can be changed via software without rewiring 
- Enables rapid network re-design to accommodate organized changes   

## Inter-VLAN routing 

- process that allows devices in different VLANs to Communicate 

Requires Layer 3 device (Router or layer 3 Switch) 
Layer 3 Device receives tagged frames, removes the VLAN tag, routes the packet then re-applies the appropriate VLAN tag for the destination VLAN 

### Trunk Links 

Connect multiple switches, carrying traffic from several VLANs over a single physical connection. 
Ensure VLAN separation is preserved across the network 

Think of trunk link like a multi-lane highway: Each lane (VLAN) keeps its traffic separate yet all lanes share the same road surface
