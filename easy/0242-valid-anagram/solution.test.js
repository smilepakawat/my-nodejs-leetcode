import isAnagram from './solution.js';

describe('242. Valid Anagram', () => {
  // Sample cases from LeetCode
  test('example 1: s = "anagram", t = "nagaram" -> true', () => {
    expect(isAnagram('anagram', 'nagaram')).toBe(true);
  });

  test('example 2: s = "rat", t = "car" -> false', () => {
    expect(isAnagram('rat', 'car')).toBe(false);
  });

  // My own edge cases
  test('different lengths: "abc" vs "ab" -> false', () => {
    expect(isAnagram('abc', 'ab')).toBe(false);
  });

  test('single matching character: "a" vs "a" -> true', () => {
    expect(isAnagram('a', 'a')).toBe(true);
  });

  test('single differing character: "a" vs "b" -> false', () => {
    expect(isAnagram('a', 'b')).toBe(false);
  });

  test('identical strings: "listen" vs "listen" -> true', () => {
    expect(isAnagram('listen', 'listen')).toBe(true);
  });

  test('same letters, different multiplicities: "aab" vs "abb" -> false', () => {
    expect(isAnagram('aab', 'abb')).toBe(false);
  });

  test('repeated letters matching: "aabbcc" vs "abcabc" -> true', () => {
    expect(isAnagram('aabbcc', 'abcabc')).toBe(true);
  });
});
