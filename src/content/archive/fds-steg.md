---
title: 'Steganography '
slug: fds-steg
order: 999
type: Class Notes
status: Active
date: '2026-06-30'
summary: ''
tags: []
files: []
links: []
cover: ''
---
### Image Forensics 

WHAT IS IT -> process of identifying, recovering, analysing and interpreting files as digital evidence 

Worfkflow: 
Identify → Recover → Analyse → Interpret → Report
Stage	Meaning
Identify	- Find out what type of image/file it is
Recover	- Retrieve deleted or hidden images
Analyse	    - Inspect metadata, file structure, compression, hidden data
Interpret	- Explain what the findings mean
Report	    - Document evidence properly for submission

## MAIN IMAGE TYPES - BITMAP 

Bitmap/ Raster images (most common image types) 
- .jpg
- .png 
- .bmp 
- .gif 
- .tiff 
- .webp 
- .Camera RAW Files 

bitmap / raster page is made of pixels 

Pixel = Red value + Green value + Blue value 
each color range from 0 -255 

Why raster images matter in forensics: 
- Photos from phones and cameras are usually raster images 
- Deleted photos can often be recovered from disk 
- Metadata may reveal time, location, device model and editing software 
- Hidden data can be embedded within pixels 

## Vector Images 

- do not store pixels directly 
- instead they store mathematical instructions 

Common formats:
- .svg 
- .ai 
- .eps
- .dxf 

Why vector images matter in forensics: 
- Engineering drawings 
- CAD Designs 
- Logos 
- intellectual property theft cases 


### Metafile Images 

hybrid file 

It can contain: 
- Raster images 
- Vector graphics 
- Text 
- Metadata 
- Embedded objects 

Examples: 
- .pdf (especially important because it may contain hidden layers, embedded images, embedded files, metadata, deleted looking but recoverable content)  
- .wmf 
- .emf 



### Image File Formats and File Signatures 

![Image](/uploads/1782900986557-screenshot-2026-07-01-181617.png)

Do not trust the file extension -> trust the file header 
you can rename a file to change from jpg to a txt file but its header is still a jpg file 
[this is where file signatures/ magic bytes  come in ] 

### EXIF Metadata (Exchangeable Image File Format)
