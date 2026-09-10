import majorityElement from './solution.js';

describe('169. Majority Element', () => {
  // Sample cases from LeetCode
  test.skip('example 1: [3,2,3] -> 3', () => {
    expect(majorityElement([3, 2, 3])).toBe(3);
  });

  test.skip('example 2: [2,2,1,1,1,2,2] -> 2', () => {
    expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2);
  });

  // My own edge cases
  test.skip('single element: [1] -> 1', () => {
    expect(majorityElement([1])).toBe(1);
  });

  test.skip('two identical elements: [4,4] -> 4', () => {
    expect(majorityElement([4, 4])).toBe(4);
  });

  test.skip('all elements the same: [7,7,7,7] -> 7', () => {
    expect(majorityElement([7, 7, 7, 7])).toBe(7);
  });

  test.skip('majority is negative: [-1,-1,-1,2,3] -> -1', () => {
    expect(majorityElement([-1, -1, -1, 2, 3])).toBe(-1);
  });

  test.skip('bare majority, floor(n/2)+1 occurrences: [5,1,5,2,5] -> 5', () => {
    expect(majorityElement([5, 1, 5, 2, 5])).toBe(5);
  });

  test.skip('majority not contiguous: [1,2,1,3,1,4,1] -> 1', () => {
    expect(majorityElement([1, 2, 1, 3, 1, 4, 1])).toBe(1);
  });
});
