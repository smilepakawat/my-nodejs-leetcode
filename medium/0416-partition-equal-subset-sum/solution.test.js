import canPartition from './solution.js';

describe('416. Partition Equal Subset Sum', () => {
  // Sample cases from LeetCode
  test.skip('example 1: [1,5,11,5] -> true ([1,5,5] vs [11])', () => {
    expect(canPartition([1, 5, 11, 5])).toBe(true);
  });

  test.skip('example 2: [1,2,3,5] -> false (sum is odd, 11)', () => {
    expect(canPartition([1, 2, 3, 5])).toBe(false);
  });

  // My own edge cases
  test.skip("single element: [1] -> false (can't split one element into two non-empty equal subsets)", () => {
    expect(canPartition([1])).toBe(false);
  });

  test.skip('two equal elements: [1,1] -> true (one per subset)', () => {
    expect(canPartition([1, 1])).toBe(true);
  });

  test.skip('odd total sum short-circuits: [2,2,3] -> false', () => {
    expect(canPartition([2, 2, 3])).toBe(false);
  });

  test.skip('even sum but no achievable partition: [1,2,5] -> false (target 4 unreachable)', () => {
    expect(canPartition([1, 2, 5])).toBe(false);
  });

  test.skip('larger achievable split: [3,3,3,4,5] -> true ([4,5] vs [3,3,3], both sum 9)', () => {
    expect(canPartition([3, 3, 3, 4, 5])).toBe(true);
  });

  test.skip('all identical elements, even count: [4,4,4,4] -> true', () => {
    expect(canPartition([4, 4, 4, 4])).toBe(true);
  });

  test.skip('all identical elements, odd count: [4,4,4] -> false', () => {
    expect(canPartition([4, 4, 4])).toBe(false);
  });
});
