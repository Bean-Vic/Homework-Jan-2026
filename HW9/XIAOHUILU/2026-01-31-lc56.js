/** 56. Merge Intervals
 * Given an array of intervals where intervals[i] = [starti, endi],
 * merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
 *
 * Example 1:
 * Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
  if (!intervals || intervals.length === 0) return [];

  intervals.sort((a, b) => a[0] - b[0]);

  const res = [];
  res.push(intervals[0].slice()); // copy to avoid mutation issues

  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    const last = res[res.length - 1];

    if (start > last[1]) {
      // no overlap
      res.push([start, end]);
    } else {
      // overlap, merge
      last[1] = Math.max(last[1], end);
    }
  }

  return res;
}