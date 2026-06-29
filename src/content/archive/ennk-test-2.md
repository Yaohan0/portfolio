---
title: 'Network Concepts '
slug: ennk-test-2
order: 999
type: Class Notes
status: Active
date: '2026-06-29'
summary: >-
  Go through OSI Model, LAN WAN , Network Models , TCP IP , encapsulation,
  broadcast domains 
tags: []
files: []
links: []
cover: ''
---
Network -> group of devices connected together so they can communicate and share resources 

## LAN - Local Area Network 

network that covers a small area 
common devices -> switches/ hubs, LAN Cables & hosts/end devices 

---- SWITCH ---- 
Connects devices in the same LAN 
uses MAC Address [Layer 2 ] 
Switch forwards frame packets from PC 1 to 2 

---- Router ----
Connects different Networks 
uses IP address [Layer 3] 

## Network Models 

how data moves from one device to another 
Application -> Handles App
Transport -> Ports & Readability 
Network -> IP address 
Data Link -> MAC Addressing 
Physical -> Cables/signals 

## OSI MODEL 

Layer 7: APPLICATION -> user-facing network services [where network applications work, HTTP HTTPS FTP DNS SMTP IMAP ] 
Layer 6: PRESENTATION -> Format, encryption, compression  [deals with data format ] 
Layer 5: SESSION -> starts/ maintains/ end sessions [manages sessions btwn devices] 
Layer 4: TRANSPORTATION -> TCP/UDP, ports ,reliability  [handles transport btwn applications] 
Layer 3: NETWORK -> IP addressing/ Routing [handles logical addressing/ routing ] -> decides how packets move btwn networks IPv4/6 ICMP , Routing protocols 
Layer 2: DATA LINK -> MAC Addressing , Switching. frame [handles local network delivery] 
Layer 1: PHYSICAL -> Cables, bits , signals [handles physical transmission] 

## TCP/IP 

4 Layers  -> used more directly for real internet networking (more practical) 
APPLICATION - Data 
TRANSPORT  - Segment  [TCP/UDP Header] 
NETWORK  - Packet [IP Header] 
DATA LINK - Frame  [Ethernet header & Trailer ] 
PHYSICAL - Bits 

Encapsulation 
- Each layer adds its own header as data moves down the model

Decapsulation 
- when receiving device gets the data, it removes the headers 

![Image](/portfolio/uploads/1782736626348-screenshot-2026-06-29-203659.png)

## Broadcast 

message sent to everyone in the local network 
Layer 2 Broadcast MAC 
FF:FF:FF:FF:FF:FF
IPv4 example: 192.168.1.255 -> used by ARP , DHCP ... 

### Broadcast Domain 

area where a broadcast can travel 
each network broadcast domain equals 1 IP Network Address 

hosts in the same broadcast domain should have same IP network address when the host portion is zeroed 

### What creates a broadcast domain? 

--- SWITCH --- 
does NOT Break broadcast domains 

--- Router --- 
separates broadcast domains 

--- VLAN --- 
Creates a separate broadcast domain 

## Collision domain 

where devices could have frame collisions 
[Old hubs had one big collision domain ] 
Switches reduce collisions because each switch port has its own collision domain 

Hub - one Collision Domain 
Switch - Each port is separate collision damage 
Router - Each interface is separate collision domain 

Broadcast Domain vs Collision Domain 
Broadcast Domain - Where broadcasts can reach (Router/VLANS) 
Collision domain - Where collisions can happen (Switch ports ) 

## How to count broadcast domains 

## New heading
