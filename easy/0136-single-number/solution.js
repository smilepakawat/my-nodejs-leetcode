/**
 * LeetCode 136. Single Number
 * https://leetcode.com/problems/single-number/
 *
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
  let map = new Map();
  let num = nums[0];
  for (const n of nums) {
    if (map.has(n)) {
      map.set(n, map.get(n) + 1);
    } else {
      map.set(n, 1);
    }
  }

  for (const [k, v] of map) {
    if (v == 1) {
      num = k;
      break;
    }
  }

  return num;
}

export default singleNumber;
