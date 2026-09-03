import containsDuplicate from './solution.js';

describe('217. Contains Duplicate', () => {
  // Sample cases from LeetCode
  test('example 1: [1,2,3,1] -> true', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
  });

  test('example 2: [1,2,3,4] -> false', () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
  });

  test('example 3: [1,1,1,3,3,4,3,2,4,2] -> true', () => {
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
  });

  // My own edge cases
  test('single element: [1] -> false', () => {
    expect(containsDuplicate([1])).toBe(false);
  });

  test('empty array -> false', () => {
    expect(containsDuplicate([])).toBe(false);
  });

  test('all identical elements: [2,2,2] -> true', () => {
    expect(containsDuplicate([2, 2, 2])).toBe(true);
  });

  test('negative numbers, no duplicates: [-1,-2,-3] -> false', () => {
    expect(containsDuplicate([-1, -2, -3])).toBe(false);
  });

  test('negative duplicate: [-1,2,-1] -> true', () => {
    expect(containsDuplicate([-1, 2, -1])).toBe(true);
  });

  test('duplicate is zero: [0,4,0] -> true', () => {
    expect(containsDuplicate([0, 4, 0])).toBe(true);
  });
});
