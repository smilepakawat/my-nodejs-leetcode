import maxProfit from './solution.js';

describe('121. Best Time to Buy and Sell Stock', () => {
  // Sample cases from LeetCode
  test('example 1: [7,1,5,3,6,4] -> 5', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  });

  test('example 2: [7,6,4,3,1] -> 0 (no profit possible)', () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });

  // My own edge cases
  test('single price: [5] -> 0 (no second day to sell)', () => {
    expect(maxProfit([5])).toBe(0);
  });

  test('empty array -> 0', () => {
    expect(maxProfit([])).toBe(0);
  });

  test('all identical prices: [3,3,3,3] -> 0', () => {
    expect(maxProfit([3, 3, 3, 3])).toBe(0);
  });

  test('strictly increasing: [1,2,3,4,5] -> 4 (buy day 1, sell last day)', () => {
    expect(maxProfit([1, 2, 3, 4, 5])).toBe(4);
  });

  test('dip, then peak, then dip: [2,4,1,7,3] -> 6', () => {
    expect(maxProfit([2, 4, 1, 7, 3])).toBe(6);
  });

  test('all zero prices: [0,0,0] -> 0', () => {
    expect(maxProfit([0, 0, 0])).toBe(0);
  });
});
