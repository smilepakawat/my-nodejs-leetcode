import missingNumber from './solution.js';

describe('268. Missing Number', () => {
  // Sample cases from LeetCode
  test.skip('example 1: [3,0,1] -> 2', () => {
    expect(missingNumber([3, 0, 1])).toBe(2);
  });

  test.skip('example 2: [0,1] -> 2', () => {
    expect(missingNumber([0, 1])).toBe(2);
  });

  test.skip('example 3: [9,6,4,2,3,5,7,0,1] -> 8', () => {
    expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8);
  });

  // My own edge cases
  test.skip('single element zero: [0] -> 1', () => {
    expect(missingNumber([0])).toBe(1);
  });

  test.skip('single element one: [1] -> 0', () => {
    expect(missingNumber([1])).toBe(0);
  });

  test.skip('zero is missing: [1,2,3] -> 0', () => {
    expect(missingNumber([1, 2, 3])).toBe(0);
  });

  test.skip('n is missing from sorted input: [0,1,2,3] -> 4', () => {
    expect(missingNumber([0, 1, 2, 3])).toBe(4);
  });

  test.skip('reverse sorted input: [4,3,1,0] -> 2', () => {
    expect(missingNumber([4, 3, 1, 0])).toBe(2);
  });

  test.skip('large input: 0..9999 without 5000 -> 5000', () => {
    const nums = Array.from({ length: 10000 }, (_, i) => i).filter((x) => x !== 5000);
    expect(missingNumber(nums)).toBe(5000);
  });
});
