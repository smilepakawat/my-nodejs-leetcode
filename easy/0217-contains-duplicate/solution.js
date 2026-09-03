/**
 * LeetCode 217. Contains Duplicate
 * https://leetcode.com/problems/contains-duplicate/
 *
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  let set = new Set();
  for (const n of nums) {
    if (set.has(n)) {
      return true;
    }
    set.add(n);
  }

  return false;
}

export default containsDuplicate;
