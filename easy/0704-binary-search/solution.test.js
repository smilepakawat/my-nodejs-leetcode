import search from './solution.js';

describe('704. Binary Search', () => {
  // Sample cases from LeetCode
  test.skip('example 1: [-1,0,3,5,9,12], target 9 -> 4', () => {
    expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
  });

  test.skip('example 2: [-1,0,3,5,9,12], target 2 -> -1 (not found)', () => {
    expect(search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
  });

  // My own edge cases
  test.skip('single element, found: [5], target 5 -> 0', () => {
    expect(search([5], 5)).toBe(0);
  });

  test.skip('single element, not found: [5], target 3 -> -1', () => {
    expect(search([5], 3)).toBe(-1);
  });

  test.skip('target smaller than every element -> -1', () => {
    expect(search([1, 2, 3, 4, 5], -10)).toBe(-1);
  });

  test.skip('target larger than every element -> -1', () => {
    expect(search([1, 2, 3, 4, 5], 100)).toBe(-1);
  });

  test.skip('target at first index -> 0', () => {
    expect(search([2, 4, 6, 8, 10], 2)).toBe(0);
  });

  test.skip('target at last index -> length - 1', () => {
    expect(search([2, 4, 6, 8, 10], 10)).toBe(4);
  });

  test.skip('two-element array, target is the second element -> 1', () => {
    expect(search([1, 3], 3)).toBe(1);
  });

  test.skip('negative target present in array', () => {
    expect(search([-20, -10, -5, 0, 5], -10)).toBe(1);
  });
});
