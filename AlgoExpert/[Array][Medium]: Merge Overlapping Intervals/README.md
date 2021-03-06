# [Merge Overlapping Intervals](https://www.algoexpert.io/questions/merge-overlapping-intervals)

`Medium` `Array`

### Question
Write a function that takes in a non-empty array of arbitrary intervals, merges any overlapping intervals, and returns the new intervals in no particular order.

Each interval `interval` is an array of two integers, with `interval[0]` as the start of the interval and `interval[1]` as the end of the interval.

Note that back-to-back intervals aren't considered to be overlapping. For example, [1, 5] and [6, 7] aren't overlapping; however, [1, 6] and [6, 7] are indeed overlapping.

Also note that the start of any particular interval will always be less than or equal to the end of that interval.

**Sample Input**
```
intervals = [[1, 2], [3, 5], [4, 7], [6, 8], [9, 10]]
```

**Sample Output**
```
[[1, 2], [3, 8], [9, 10]]
// Merge the intervals [3, 5], [4, 7], and [6, 8].
// The intervals could be ordered differently.
```

### My Solution
```js
/**
 * 
 * @param {number[][]} array
 * @returns {number[][]}
 */

function mergeOverlappingIntervals (array) {
  array.sort((a, b) => a[0] - b[0])
  let index = 0
  while (index < array.length - 1) {
    const [start, end] = array[index]
    const [nextStart, nextEnd] = array[index + 1]

    if (nextStart > end) {
      index++
      continue
    }

    array[index][0] = start
    array[index][1] = Math.max(end, nextEnd)
    array.splice(index + 1, 1)
  }
  return array
}

```
