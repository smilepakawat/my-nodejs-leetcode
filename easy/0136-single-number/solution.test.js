import singleNumber from './solution.js';

describe('136. Single Number', () => {
  // Sample cases from LeetCode
  test('example 1: [2,2,1] -> 1', () => {
    expect(singleNumber([2, 2, 1])).toBe(1);
  });

  test('example 2: [4,1,2,1,2] -> 4', () => {
    expect(singleNumber([4, 1, 2, 1, 2])).toBe(4);
  });

  test('example 3: [1] -> 1', () => {
    expect(singleNumber([1])).toBe(1);
  });

  // My own edge cases
  test('single negative element: [-5] -> -5', () => {
    expect(singleNumber([-5])).toBe(-5);
  });

  test('the unique value is negative: [3,-1,3] -> -1', () => {
    expect(singleNumber([3, -1, 3])).toBe(-1);
  });

  test('the unique value is zero: [0,1,1] -> 0', () => {
    expect(singleNumber([0, 1, 1])).toBe(0);
  });

  test('unique value first: [7,4,4,9,9] -> 7', () => {
    expect(singleNumber([7, 4, 4, 9, 9])).toBe(7);
  });

  test('unique value last: [4,4,9,9,7] -> 7', () => {
    expect(singleNumber([4, 4, 9, 9, 7])).toBe(7);
  });
});
