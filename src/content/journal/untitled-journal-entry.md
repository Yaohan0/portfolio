---
title: "LeetCode - Longest Common Prefix\_"
slug: untitled-journal-entry
order: 999
date: '2026-09-20'
mood: Writing
category: Progress
summary: Quite interesting problem...
tags: []
lesson: ''
linkedinUrl: ''
cover: ''
pinned: false
featured: false
---
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"


Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.


 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters if it is non-empty.

Original Idea: Store the strings in a dictionary. go through each word in the hash map/dictionary & check if the first element if its the same and so on.

Refined Idea: [No need hashmap / Dictionary] 
- 1: Take the first string as the initial prefix 
- 2: Compare the prefix with each subsequent string 
-3: if the current string doesn't start with the prefix, shorten it
-4: Continue until everything matches 

```bash
class Solution(object):
    def longestCommonPrefix(self, strs):
        if not strs:
            return ""

        prefix = strs[0]

        for string in strs[1:]:
            i = 0

            while i < len(prefix) and i < len(string):
                if prefix[i] != string[i]:
                    break
                i += 1

            prefix = prefix[:i]

            if not prefix:
                return ""

        return prefix

```

![Image](/uploads/1789873801210-screenshot-2026-09-20-110952.png)
