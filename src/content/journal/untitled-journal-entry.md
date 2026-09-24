---
title: LeetCode - Valid Parenthesis
slug: untitled-journal-entry
order: 999
date: '2026-09-24'
mood: Writing
category: Progress
summary: use of Dictionary and stack
tags: []
lesson: ''
linkedinUrl: ''
cover: ''
pinned: false
featured: false
---
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

 

Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true

Example 5:

Input: s = "([)]"

Output: false

 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.



```bash
class Solution(object):
    def isValid(self, s):
        stack = []

        pairs = {
            ')': '(',
            ']': '[',
            '}': '{'
        }

        for char in s:
            if char in pairs:
                # Closing bracket
                if not stack or stack[-1] != pairs[char]:
                    return False
                stack.pop()
            else:
                # Opening bracket
                stack.append(char)

        return len(stack) == 0
```

![Image](/uploads/1790235086112-screenshot-2026-09-24-153114.png)
