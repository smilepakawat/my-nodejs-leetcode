/**
 * LeetCode 268. Missing Number
 * https://leetcode.com/problems/missing-number/
 *
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber(nums) {
  nums.sort((a, b) => a - b);

  for (let i = 0; i <= nums.length - 1; ++i) {
    if (nums[i] != i) {
      return i;
    }
  }

  return nums[nums.length - 1] + 1;
}

export default missingNumber;
