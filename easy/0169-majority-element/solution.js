/**
 * LeetCode 169. Majority Element
 * https://leetcode.com/problems/majority-element/
 *
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
  const sorted = nums.toSorted((a, b) => a - b);
  const majority = Math.ceil(nums.length / 2);
  let count = 1;
  let curr = sorted[0];
  for (let i = 1; i < nums.length; ++i) {
    if (sorted[i] != curr) {
      count = 1;
      curr = sorted[i];
      continue;
    }
    count += 1;
    if (count >= majority) {
      return sorted[i];
    }
  }
  return curr;
}

export default majorityElement;
