# [438. Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/)
`Medium` `String`

### Question 

Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 
**Example 1:**
```
Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
```
**Example 2:**
```
Input: s = "abab", p = "ab"
Output: [0,1,2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
```

**Constraints:**
* 1 <= s.length, p.length <= 3 * 10^4
* s and p consist of lowercase English letters.

### My Solution
```js
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const ans = []
  if (p.length > s.length) {
    return ans
  }

  const pMap = {}
  for (const letter of p) {
    pMap[letter] = pMap[letter] + 1 || 1
  }

  const windowMap = {}
  for (let i = 0; i < p.length; i++) {
    windowMap[s[i]] = windowMap[s[i]] + 1 || 1
  }

  let windowStart = 0
  let windowEnd = p.length - 1
  while (windowEnd < s.length) {
    let isEqual = true
    for (const letter of Object.keys(pMap)) {
      if (windowMap[letter] !== pMap[letter]) {
        isEqual = false
        break
      }
    }
    if (isEqual) {
      ans.push(windowStart)
    }
    windowMap[s[windowStart]]--
    windowMap[s[windowEnd + 1]] = windowMap[s[windowEnd + 1]] + 1 || 1
    windowStart++
    windowEnd++
  }

  return ans
}
```