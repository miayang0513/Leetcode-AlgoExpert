# [409. Longest Palindrome](https://leetcode.com/problems/longest-palindrome/)
`Easy` `String`

### Question 
You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.
 
**Example 1:**
```
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
```
**Example 2:**
```
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
```

**Constraints:**
* 0 <= intervals.length <= 104
* intervals[i].length == 2
* 0 <= starti <= endi <= 105
* intervals is sorted by starti in ascending order.
* newInterval.length == 2
* 0 <= start <= end <= 105

### My Solution
```js
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const letterMap = {}
  for (const letter of s) {
    if (letter in letterMap) {
      letterMap[letter]++
    } else {
      letterMap[letter] = 1
    }
  }

  let length = 0
  let needAddOne = false
  for (letter of Object.keys(letterMap)) {
    if (letterMap[letter] % 2 === 0) {
      length += letterMap[letter]
    } else {
      length += letterMap[letter] - 1
      if (letterMap[letter] % 2 === 1) {
        needAddOne = true
      }
    }
  }
  return needAddOne ? length + 1 : length
}
```