import twoSum from './solution.js';

describe('1. Two Sum', () => {
  // Sample cases from LeetCode
  test('example 1: [2,7,11,15], target 9 -> [0,1]', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  test('example 2: [3,2,4], target 6 -> [1,2]', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  test('example 3: [3,3], target 6 -> [0,1]', () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  // My own edge cases
  test('single element: no pair possible, returns []', () => {
    expect(twoSum([1], 2)).toEqual([]);
  });

  test('empty array: returns []', () => {
    expect(twoSum([], 5)).toEqual([]);
  });

  test('duplicates elsewhere in the array pick the correct pair', () => {
    expect(twoSum([1, 5, 5, 3], 8)).toEqual([2, 3]);
  });

  test('negative numbers', () => {
    expect(twoSum([-3, 4, 3, 90], 0)).toEqual([0, 2]);
  });

  test('negative target', () => {
    expect(twoSum([-1, -2, -3, -4], -6)).toEqual([1, 3]);
  });

  test('no valid pair exists', () => {
    expect(twoSum([1, 2, 3], 100)).toEqual([]);
  });

  test('zero as one of the addends', () => {
    expect(twoSum([0, 4, 3, 0], 0)).toEqual([0, 3]);
  });
});
