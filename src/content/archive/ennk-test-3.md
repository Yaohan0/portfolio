---
title: 'IPv4 & Subnetting '
slug: ennk-test-3
order: 999
type: Class Notes
status: Active
date: '2026-06-29'
summary: 'Basic IP address stuff '
tags: []
files: []
links: []
cover: ''
---
## IPv4 Address 

32 bit address to identify a device on a netrwork.
[made of network and host portion -> used to identify which part is network and host ] 
Example: 192.168.10.15/24 
Network portion: 192.168.10
Host portion: .25 

Three types of IPv4 Address in every subnet: 
1. Network Address -> host bits all 0 
2. Host Address 
3. Broadcast Address  -> host bits all 1 



### Subnet Mask

tells you which part of the IP Address is the network and which part is the host 
example : 255.255.255.0 

Prefix Length is another way to write subnet mask 
example : 255.255.255.0  -> /24 

shortcut for subnet qns: 
1) conver prefix to subnet mask 
2) find block size 
3) find which range the ip falls into 
4) network = start of range 
5) broadcast = end of range 
6) usable hosts = in btwn network and broadcast 


### ANDing 

FORMAL BINARY METHOD TO CALCULATE THE NETWORK ADDRESS 
compares 2 bits (0/1) 
1 AND 1 -> 1 
other combinations ->  0



### Default Gateway

Router IP address used to leave the local network for communication outside 

### Private IPv4 Address 

Used inside local/ priate networks 
10.0.0.0/8 -> Large Private Networks 
172.16.0.0/12 -> Medium Private Networks 
192.168.0.0/16 -> Home/Small Businesses 
[Not directly router on the public internet ]  -> NAT Translates them into public ip when going online 

NOTE: 127.0.0.1 -> Loopback (Testing)  
NOTE: 169.254.X.X -> APIPA (Fail to get IP From DHCP) 

Choosing subnet based on hosts 
2 ^ host bits -2 >= required hosts 


### Public IPv4 Address 

Globally routed 
Example: 8.8.8.8 , 1.1.1.1 

### New subheading
