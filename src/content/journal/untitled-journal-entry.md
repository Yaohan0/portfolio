---
title: "LeetCode - Palindrome Number\_"
slug: untitled-journal-entry
order: 999
date: '2026-09-20'
mood: Writing
category: Progress
summary: 'slicing [::-1]'
tags: []
lesson: ''
linkedinUrl: ''
cover: ''
pinned: false
featured: false
---
Given an integer x, return true if x is a palindrome, and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Constraints:

-231 <= x <= 231 - 1

Original Ideas: 
1) Hashmap? using first and last number and middle numbers if theres more than 1 to be the same. If true, then its palindrome number 

2) Reverse the number to see if theyre the same as the original using slicing! 

FINALISED: Second option much easier

```bash
class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        
        s = str(x)
        return s == s[::-1]
```

## 📁 Notes

![Image]()
