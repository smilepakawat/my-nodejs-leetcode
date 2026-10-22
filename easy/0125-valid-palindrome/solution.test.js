import isPalindrome from './solution.js';

describe('125. Valid Palindrome', () => {
  // Sample cases from LeetCode
  test('example 1: "A man, a plan, a canal: Panama" -> true', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });

  test('example 2: "race a car" -> false', () => {
    expect(isPalindrome('race a car')).toBe(false);
  });

  test('example 3: " " -> true', () => {
    expect(isPalindrome(' ')).toBe(true);
  });

  // My own edge cases
  test('single character: "a" -> true', () => {
    expect(isPalindrome('a')).toBe(true);
  });

  test('only non-alphanumeric characters: ".,!?" -> true', () => {
    expect(isPalindrome('.,!?')).toBe(true);
  });

  test('digits count as alphanumeric: "0P" -> false', () => {
    expect(isPalindrome('0P')).toBe(false);
  });

  test('mixed digits and letters: "1a2b2a1" -> true', () => {
    expect(isPalindrome('1a2b2a1')).toBe(true);
  });

  test('case-insensitive: "AbBa" -> true', () => {
    expect(isPalindrome('AbBa')).toBe(true);
  });

  test('even-length non-palindrome: "ab" -> false', () => {
    expect(isPalindrome('ab')).toBe(false);
  });
});
