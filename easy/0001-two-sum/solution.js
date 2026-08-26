/**
 * LeetCode 1. Two Sum
 * https://leetcode.com/problems/two-sum/
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]} indices of the two numbers that add up to target
 */
function twoSum(nums, target) {
  const seenIndexByValue = new Map();

  for (let i = 0; i < nums.length; i += 1) {
    const complement = target - nums[i];

    if (seenIndexByValue.has(complement)) {
      return [seenIndexByValue.get(complement), i];
    }

    seenIndexByValue.set(nums[i], i);
  }

  return [];
}

export default twoSum;
