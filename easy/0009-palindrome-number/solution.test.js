import isPalindrome from './solution.js';

describe('9. Palindrome Number', () => {
  // Sample cases from LeetCode
  test('example 1: 121 -> true', () => {
    expect(isPalindrome(121)).toBe(true);
  });

  test('example 2: -121 -> false (leading "-" breaks symmetry)', () => {
    expect(isPalindrome(-121)).toBe(false);
  });

  test('example 3: 10 -> false (reversed is "01")', () => {
    expect(isPalindrome(10)).toBe(false);
  });

  // My own edge cases
  test('single digit: 0 -> true', () => {
    expect(isPalindrome(0)).toBe(true);
  });

  test('single digit: 7 -> true', () => {
    expect(isPalindrome(7)).toBe(true);
  });

  test('trailing zero, not itself zero: 100 -> false', () => {
    expect(isPalindrome(100)).toBe(false);
  });

  test('negative single digit: -7 -> false', () => {
    expect(isPalindrome(-7)).toBe(false);
  });

  test('even-length palindrome: 1221 -> true', () => {
    expect(isPalindrome(1221)).toBe(true);
  });

  test('odd-length palindrome: 12321 -> true', () => {
    expect(isPalindrome(12321)).toBe(true);
  });

  test('large non-palindrome: 1234567 -> false', () => {
    expect(isPalindrome(1234567)).toBe(false);
  });
});
